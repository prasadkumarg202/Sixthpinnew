import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  company: z.string().min(1).max(200),
  service: z.string().min(1).max(100),
  message: z.string().min(20).max(5000),
  budget: z.string().max(50).optional(),
  consent: z.literal(true),
});

// Simple in-memory rate limiting (per-IP, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validate body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: "Validation failed.", errors: result.error.flatten() },
        { status: 422 }
      );
    }

    const { name, email, company, service, message, budget } = result.data;

    // Send email via Resend (if configured)
    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.CONTACT_EMAIL_TO;
    const emailFrom = process.env.CONTACT_EMAIL_FROM;

    if (apiKey && emailTo && emailFrom && apiKey !== "re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx") {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        replyTo: email,
        subject: `New SixthPin enquiry — ${service} from ${company}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          `Service: ${service}`,
          `Budget: ${budget ?? "Not specified"}`,
          "",
          `Message:`,
          message,
        ].join("\n"),
      });
    } else {
      // Development fallback — log to console
      console.log("[Contact form submission — dev mode]", {
        name,
        email,
        company,
        service,
        budget,
        message,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API error]", err);
    // Never expose internal errors to the client
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
