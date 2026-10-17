// Cloudflare Pages Function: handles /api/contact on Cloudflare Workers edge
interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  try {
    const data = await context.request.json() as {
      name?: string;
      email?: string;
      company?: string;
      service?: string;
      message?: string;
      budget?: string;
      consent?: boolean;
    };

    if (!data.name || !data.email || !data.company || !data.service || !data.message || !data.consent) {
      return new Response(
        JSON.stringify({ message: "All required fields must be completed." }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = context.env.RESEND_API_KEY;
    const emailTo = context.env.CONTACT_EMAIL_TO;
    const emailFrom = context.env.CONTACT_EMAIL_FROM;

    if (apiKey && emailTo && emailFrom && apiKey !== "re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx") {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: [emailTo],
          reply_to: data.email,
          subject: `New SixthPin enquiry — ${data.service} from ${data.company}`,
          text: [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Company: ${data.company}`,
            `Service: ${data.service}`,
            `Budget: ${data.budget ?? "Not specified"}`,
            "",
            "Message:",
            data.message,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
      }
    } else {
      console.log("[SixthPin Cloudflare Contact submission]", data);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "An unexpected error occurred." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
