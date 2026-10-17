"use client";

import { useState } from "react";
import {
  Brain,
  Cloud,
  Rocket,
  Database,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface VerticalItem {
  id: string;
  num: string;
  name: string;
  category: string;
  shortDesc: string;
  angleDeg: number;
  x: number;
  y: number;
  textAnchor: "start" | "end" | "middle";
  textOffsetX: number;
  textOffsetY: number;
  icon: typeof Brain;
  color: string;
  link: string;
  capabilities: string[];
}

const verticals: VerticalItem[] = [
  {
    id: "ai-solutions",
    num: "01",
    name: "AI Solutions",
    category: "Cognitive Intelligence",
    shortDesc: "Generative AI, enterprise copilots & RAG orchestration directed by human intent.",
    angleDeg: -90,
    x: 300,
    y: 68,
    textAnchor: "middle",
    textOffsetX: 0,
    textOffsetY: -28,
    icon: Brain,
    color: "#E7192D",
    link: "/services/ai-solutions",
    capabilities: ["Enterprise Copilots", "RAG Pipelines", "Autonomous Agents"],
  },
  {
    id: "infra-automation",
    num: "02",
    name: "Infra Automation",
    category: "Cloud & DevOps",
    shortDesc: "Self-healing cloud infrastructure, Terraform IaC, and zero-touch operations.",
    angleDeg: -30,
    x: 424,
    y: 138,
    textAnchor: "start",
    textOffsetX: 24,
    textOffsetY: -2,
    icon: Cloud,
    color: "#38BDF8",
    link: "/services/cloud-infrastructure",
    capabilities: ["Terraform HCL", "Azure & AWS Fabric", "Zero-Touch CI/CD"],
  },
  {
    id: "startup-apps",
    num: "03",
    name: "Startup Apps",
    category: "Agile Innovation",
    shortDesc: "High-velocity product engineering, scalable SaaS backends, and rapid MVPs.",
    angleDeg: 30,
    x: 424,
    y: 278,
    textAnchor: "start",
    textOffsetX: 24,
    textOffsetY: 8,
    icon: Rocket,
    color: "#F59E0B",
    link: "/services/automation",
    capabilities: ["Full-Stack SaaS", "Rapid MVP Velocity", "Modern App Stacks"],
  },
  {
    id: "cloud-migration",
    num: "04",
    name: "Cloud Migration",
    category: "Cloud Modernization",
    shortDesc: "End-to-end cloud migrations, on-prem to Azure & AWS transitions, and HA/DR resilience.",
    angleDeg: 90,
    x: 300,
    y: 348,
    textAnchor: "middle",
    textOffsetX: 0,
    textOffsetY: 36,
    icon: Cloud,
    color: "#A855F7",
    link: "/services/database-migration",
    capabilities: ["On-Prem to AWS & Azure", "Near-Zero Downtime", "Landing Zone Migration"],
  },
  {
    id: "enterprise-services",
    num: "05",
    name: "Enterprise Services",
    category: "Architecture & Advisory",
    shortDesc: "Enterprise architecture roadmaps, technical audits, and digital transformation.",
    angleDeg: 150,
    x: 176,
    y: 278,
    textAnchor: "end",
    textOffsetX: -24,
    textOffsetY: 8,
    icon: Building2,
    color: "#10B981",
    link: "/services/enterprise-consulting",
    capabilities: ["Cloud Roadmaps", "Platform Selection", "Security Audits"],
  },
  {
    id: "data-engineering",
    num: "06",
    name: "Data Engineering",
    category: "Lakehouse & Fabric",
    shortDesc: "Azure Data Factory, Microsoft Fabric, Databricks, and real-time business intelligence.",
    angleDeg: 210,
    x: 176,
    y: 138,
    textAnchor: "end",
    textOffsetX: -24,
    textOffsetY: -2,
    icon: Layers,
    color: "#6366F1",
    link: "/services/data-engineering",
    capabilities: ["Fabric Lakehouse", "Databricks Pipelines", "Unified Analytics"],
  },
];

export function SpiritualMindNexus() {
  const [activeId, setActiveId] = useState<string>("ai-solutions");

  const activeVertical = verticals.find((v) => v.id === activeId) || verticals[0];

  // Epicenter center coordinates (scaled to 600 x 425 canvas)
  const cx = 300;
  const cy = 208;
  const innerRadius = 46;

  return (
    <div className="relative w-full max-w-2xl flex flex-col items-center justify-center select-none py-1">
      {/* Background ambient radial spiritual aura */}
      <div className="absolute inset-0 bg-radial from-[#E7192D]/20 via-[#101827]/80 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Six-Pin Identifier Badge */}
      <div className="relative z-20 mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-md">
        <span className="w-4.5 h-4.5 rounded-full bg-[#E7192D] text-white flex items-center justify-center font-black text-[11px] shadow-[0_0_10px_rgba(231,25,45,0.7)]">
          6
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-white">
          SIXTHPIN: 6 CORE VERTICALS
        </span>
        <span className="text-[10px] text-[#E7192D] font-mono font-semibold">
          // NUMBERS 01 - 06
        </span>
      </div>

      {/* SVG Canvas for Symbol with 6 Verticals, Prominent Numbers, & Directional Arrows */}
      <svg
        width="600"
        height="425"
        viewBox="0 0 600 425"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[560px] relative z-10 overflow-visible"
        aria-label="SixthPin Symbol: Spirituality of Human Mind radiating into 6 Categorized Verticals with visible Numbers 01 to 06 and central Number 6"
      >
        <defs>
          {/* Subtle gradient for the pin */}
          <linearGradient id="mindPinGradient" x1="220" y1="180" x2="300" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF334B" />
            <stop offset="0.6" stopColor="#E7192D" />
            <stop offset="1" stopColor="#990B1B" />
          </linearGradient>

          {/* Spiritual aura golden/crimson radiance */}
          <radialGradient id="spiritualAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#E7192D" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#101827" stopOpacity="0" />
          </radialGradient>

          {/* High-tech glow filters */}
          <filter id="nexusGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="arrowheadGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dynamic Arrowhead Markers for each Vertical Color */}
          {verticals.map((v) => (
            <marker
              key={`marker-${v.id}`}
              id={`arrow-${v.id}`}
              markerWidth="9"
              markerHeight="9"
              refX="7"
              refY="4.5"
              orient="auto"
            >
              <polygon points="0 1, 8 4.5, 0 8, 2.5 4.5" fill={v.color} />
            </marker>
          ))}
        </defs>

        {/* Concentric Coordinate Rings */}
        <circle cx={cx} cy={cy} r="185" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="3 6" />
        <circle cx={cx} cy={cy} r="140" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <circle cx={cx} cy={cy} r="90" stroke="#E7192D" strokeWidth="0.7" strokeOpacity="0.2" strokeDasharray="6 8" />

        {/* ─── 6 RADIATING DIRECTIONAL ARROWS & SPOKES ──────────────── */}
        {verticals.map((v) => {
          const isSelected = activeId === v.id;
          const rad = (v.angleDeg * Math.PI) / 180;
          const startX = cx + Math.cos(rad) * innerRadius;
          const startY = cy + Math.sin(rad) * innerRadius;
          // Target endpoint right before the node circle (node radius is 20)
          const endX = v.x - Math.cos(rad) * 24;
          const endY = v.y - Math.sin(rad) * 24;

          const midX = cx + (endX - cx) * 0.55;
          const midY = cy + (endY - cy) * 0.55;

          return (
            <g
              key={v.id}
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveId(v.id)}
              onMouseEnter={() => setActiveId(v.id)}
            >
              {/* Main Directional Arrow Shaft with Arrowhead */}
              <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={isSelected ? v.color : "white"}
                strokeOpacity={isSelected ? 1 : 0.25}
                strokeWidth={isSelected ? 2.5 : 1.2}
                strokeDasharray={isSelected ? "none" : "4 5"}
                markerEnd={`url(#arrow-${v.id})`}
                filter={isSelected ? "url(#arrowheadGlow)" : undefined}
                className={isSelected ? "animate-spoke-active" : "animate-data-stream"}
              />

              {/* Energy Wave Particle */}
              <circle
                cx={midX}
                cy={midY}
                r={isSelected ? 3.5 : 2}
                fill={v.color}
                className="animate-ping"
                style={{ animationDuration: "2.4s" }}
              />

              {/* Terminal Category Node Target with CLEAR NUMBER */}
              <g className="transition-transform duration-300">
                {/* Node Outer Ring */}
                <circle
                  cx={v.x}
                  cy={v.y}
                  r={isSelected ? 26 : 22}
                  fill="#101827"
                  stroke={v.color}
                  strokeWidth={isSelected ? 3.5 : 2.5}
                  filter={isSelected ? "url(#nexusGlow)" : undefined}
                  className="transition-all duration-300"
                />

                {/* Node Inner Ring Background */}
                <circle
                  cx={v.x}
                  cy={v.y}
                  r={isSelected ? 20 : 17}
                  fill={isSelected ? v.color : "#1E293B"}
                  fillOpacity={isSelected ? 0.9 : 0.95}
                  className="transition-all duration-300"
                />

                {/* CLEAR BOLD NUMBER (01, 02, 03, 04, 05, 06) */}
                <text
                  x={v.x}
                  y={v.y + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize={isSelected ? "14" : "12.5"}
                  fontWeight="900"
                  fontFamily="monospace"
                  className="pointer-events-none select-none tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                >
                  {v.num}
                </text>

                {/* Vertical Name Title */}
                <text
                  x={v.x + v.textOffsetX}
                  y={v.y + v.textOffsetY}
                  textAnchor={v.textAnchor}
                  fill="white"
                  fontSize={isSelected ? "12" : "11"}
                  fontWeight="700"
                  letterSpacing="0.04em"
                  className="pointer-events-none drop-shadow-md transition-all duration-200"
                >
                  {v.name.toUpperCase()}
                </text>

                {/* Vertical Category Tag */}
                <text
                  x={v.x + v.textOffsetX}
                  y={v.y + v.textOffsetY + 13}
                  textAnchor={v.textAnchor}
                  fill={isSelected ? v.color : "#94A3B8"}
                  fontSize="9"
                  fontWeight="600"
                  letterSpacing="0.08em"
                  className="pointer-events-none uppercase transition-colors duration-200"
                >
                  {v.category}
                </text>
              </g>
            </g>
          );
        })}

        {/* ─── CENTRAL HUB: SPIRITUALITY OF HUMAN MIND WITH NUMBER 6 & MIND VIBRATIONS ─── */}
        <g className="animate-pin-float">
          {/* Spiritual aura behind human mind core */}
          <circle
            cx={cx}
            cy={cy - 12}
            r="44"
            fill="url(#spiritualAura)"
            className="animate-pulse"
            style={{ animationDuration: "3.5s" }}
          />

          {/* ACTIVE MIND VIBRATION WAVES: Pulsing outwards to attract visitors */}
          <circle
            cx={cx}
            cy={cy - 18}
            stroke="#FFD700"
            fill="none"
            filter="url(#nexusGlow)"
            className="animate-mind-wave-1"
          />
          <circle
            cx={cx}
            cy={cy - 18}
            stroke="#E7192D"
            fill="none"
            filter="url(#nexusGlow)"
            className="animate-mind-wave-2"
          />
          <circle
            cx={cx}
            cy={cy - 18}
            stroke="#38BDF8"
            fill="none"
            filter="url(#nexusGlow)"
            className="animate-mind-wave-3"
          />

          {/* Sinusoidal thought-wave resonance rings */}
          <circle
            cx={cx}
            cy={cy - 18}
            r="54"
            stroke="#FFD700"
            strokeWidth="1.2"
            strokeOpacity="0.5"
            className="animate-sinusoidal-ripple"
          />
          <circle
            cx={cx}
            cy={cy - 18}
            r="78"
            stroke="#E7192D"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            className="animate-sinusoidal-ripple"
            style={{ animationDirection: "reverse", animationDuration: "3.5s" }}
          />

          {/* Expanding golden spiritual consciousness halo */}
          <circle
            cx={cx}
            cy={cy - 12}
            stroke="#FFD700"
            fill="none"
            filter="url(#nexusGlow)"
            className="animate-spiritual-halo"
          />

          {/* Rotating Sacred Geometry / Consciousness Chakra Wheel */}
          <g className="animate-sacred-spin">
            {[0, 60, 120].map((rot) => (
              <ellipse
                key={rot}
                cx={cx}
                cy={cy - 12}
                rx="34"
                ry="13"
                stroke="white"
                strokeWidth="0.6"
                strokeOpacity="0.3"
                transform={`rotate(${rot} ${cx} ${cy - 12})`}
              />
            ))}
          </g>

          {/* SixthPin Main Pin Outline & Body */}
          <path
            d={`M${cx} ${cy - 60} C${cx - 24} ${cy - 60} ${cx - 42} ${cy - 42} ${cx - 42} ${cy - 18} C${cx - 42} ${cy + 6} ${cx} ${cy + 50} ${cx} ${cy + 50} C${cx} ${cy + 50} ${cx + 42} ${cy + 6} ${cx + 42} ${cy - 18} C${cx + 42} ${cy - 42} ${cx + 24} ${cy - 60} ${cx} ${cy - 60}Z`}
            fill="url(#mindPinGradient)"
            filter="url(#nexusGlow)"
          />

          {/* Pin highlight bevel */}
          <path
            d={`M${cx} ${cy - 58} C${cx - 22} ${cy - 58} ${cx - 38} ${cy - 40} ${cx - 38} ${cy - 20} C${cx - 38} ${cy - 11} ${cx - 34} ${cy - 1} ${cx - 26} ${cy + 10} C${cx - 29} ${cy - 1} ${cx - 30} ${cy - 11} ${cx - 30} ${cy - 18} C${cx - 30} ${cy - 33.5} ${cx - 17} ${cy - 46} ${cx} ${cy - 46} C${cx + 10} ${cy - 46} ${cx + 18} ${cy - 41} ${cx + 23} ${cy - 34} C${cx + 20} ${cy - 42} ${cx + 11} ${cy - 58} ${cx} ${cy - 58}Z`}
            fill="white"
            fillOpacity="0.25"
          />

          {/* ULTRA-VISIBLE BOLD NUMBER 6 IN CENTER EMBLEM */}
          {/* Outer golden halo pulse */}
          <circle cx={cx} cy={cy - 18} r="28" fill="none" stroke="#FFD700" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: "3.5s" }} />
          {/* Solid Bright White Portal Disc with Crimson Border */}
          <circle cx={cx} cy={cy - 18} r="25" fill="#FFFFFF" stroke="#E7192D" strokeWidth="3.5" filter="url(#nexusGlow)" />

          {/* ULTRA-PROMINENT NUMBER 6 */}
          <text
            x={cx}
            y={cy - 6.5}
            textAnchor="middle"
            fill="#E7192D"
            fontSize="34"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            className="pointer-events-none select-none tracking-tight"
            style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.3))" }}
          >
            6
          </text>

          {/* Pin Ground Shadow */}
          <ellipse cx={cx} cy={cy + 54} rx="26" ry="6.5" fill="#E7192D" fillOpacity="0.3" />
        </g>
      </svg>

      {/* ─── INTERACTIVE VERTICALS EXPLORER & PHILOSOPHY CARD ─────── */}
      <div className="w-full max-w-lg mt-1 bg-[#171B23]/95 border border-white/15 rounded-xl p-3.5 shadow-xl backdrop-blur-md">
        {/* Header: Vertical Number & Name */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-md text-white font-mono font-black text-xs flex items-center justify-center shadow-sm"
              style={{ backgroundColor: activeVertical.color }}
            >
              {activeVertical.num}
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                {activeVertical.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Vertical {activeVertical.num} of 06
              </span>
            </div>
          </div>
          <span
            className="text-[10.5px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border"
            style={{
              color: activeVertical.color,
              borderColor: `${activeVertical.color}40`,
              backgroundColor: `${activeVertical.color}15`,
            }}
          >
            {activeVertical.category}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-2">
          {activeVertical.shortDesc}
        </p>

        {/* Capabilities Pills */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {activeVertical.capabilities.map((cap) => (
            <span
              key={cap}
              className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
            >
              ✓ {cap}
            </span>
          ))}
        </div>

        {/* All Six Vertical Selectors / Navigation */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {verticals.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveId(v.id)}
                className={`text-[10.5px] px-2.5 py-1 rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                  activeId === v.id
                    ? "text-white font-bold shadow-md"
                    : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
                }`}
                style={{
                  backgroundColor: activeId === v.id ? v.color : undefined,
                  borderColor: activeId === v.id ? v.color : undefined,
                }}
              >
                <span className="font-mono font-bold text-[10px]">{v.num}</span>
                {v.name}
              </button>
            ))}
          </div>

          <Link
            href={activeVertical.link}
            className="text-xs font-semibold text-white hover:text-[#E7192D] transition-colors inline-flex items-center gap-1 flex-shrink-0 ml-2"
          >
            Explore <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
