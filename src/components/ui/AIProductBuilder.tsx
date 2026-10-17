"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Server,
  Database,
  Bot,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface ProductTemplate {
  id: string;
  name: string;
  category: string;
  icon: typeof Brain;
  prompt: string;
  synthesizingSteps: string[];
  codeSnippet: string;
  outputSpecs: {
    latency: string;
    accuracy: string;
    security: string;
    architecture: string;
  };
  features: string[];
}

const products: ProductTemplate[] = [
  {
    id: "copilot",
    name: "Enterprise Knowledge Copilot",
    category: "Generative AI & RAG",
    icon: Bot,
    prompt: "Synthesize enterprise RAG assistant with hybrid vector search, role-based ACLs, and Azure OpenAI integration",
    synthesizingSteps: [
      "Vectorizing document corpora into hybrid embeddings...",
      "Configuring retrieval-augmented generation (RAG) pipeline...",
      "Enforcing enterprise token governance & RBAC filters...",
      "Finalizing multi-tenant assistant endpoints with streaming...",
    ],
    codeSnippet: `class EnterpriseCopilot:
    def __init__(self, tenant_id: str):
        self.rag = HybridVectorStore(index="sixthpin-knowledge")
        self.orchestrator = AgentGraph(model="azure-gpt-4o")
        self.security = RBACValidator(tenant=tenant_id)

    async def query(self, prompt: str, user_context: Context):
        context = await self.rag.retrieve_ranked(prompt, k=5)
        validated = self.security.redact_pii(context)
        return self.orchestrator.stream(prompt, validated)`,
    outputSpecs: {
      latency: "140ms p95",
      accuracy: "99.4% verifiable cite",
      security: "Zero-Data Retention / SOC2",
      architecture: "Hybrid RAG + Azure AI Search",
    },
    features: [
      "Private Enterprise Document Indexing",
      "Hallucination Guardrails & Audit Logging",
      "Native Teams & Web Embed Integrations",
    ],
  },
  {
    id: "cloud-mesh",
    name: "Self-Healing Cloud Mesh",
    category: "Cloud & Infrastructure as Code",
    icon: Server,
    prompt: "Generate multi-region Azure Terraform topology with zero-trust networking, auto-scaling, and FinOps policies",
    synthesizingSteps: [
      "Parsing multi-region disaster recovery SLAs...",
      "Generating Terraform HCL modules for Hub-Spoke VNet...",
      "Applying automated cost-anomaly triggers & FinOps budgets...",
      "Validating IaC against CIS Microsoft Azure Foundations...",
    ],
    codeSnippet: `module "enterprise_mesh" {
  source              = "sixthpin/azure-fabric/cloud"
  version             = "2.4.0"
  regions             = ["eastus2", "westeurope"]
  zero_trust_ingress  = true
  
  auto_remediation = {
    enable_self_heal   = true
    max_downtime_sec   = 0.5
    cost_anomaly_guard = "strict"
  }
}`,
    outputSpecs: {
      latency: "99.99% SLA Uptime",
      accuracy: "100% IaC Compliance",
      security: "Zero-Trust Private Endpoints",
      architecture: "Multi-Region Terraform Mesh",
    },
    features: [
      "Zero-Trust Network Isolation",
      "Continuous Cost Telemetry & Auto-Sizing",
      "Disaster Recovery Failover < 15s",
    ],
  },
  {
    id: "lakehouse",
    name: "Intelligent Data Lakehouse",
    category: "Data Engineering & Analytics",
    icon: Database,
    prompt: "Orchestrate real-time medallion lakehouse on Microsoft Fabric & Databricks with automated data quality checks",
    synthesizingSteps: [
      "Ingesting bronze streaming CDC from on-prem SQL...",
      "Executing silver layer deduplication and schema drift guard...",
      "Optimizing gold delta tables with Z-Order indexing...",
      "Generating semantic models for real-time executive BI...",
    ],
    codeSnippet: `spark.readStream \\
  .format("delta") \\
  .load("/mnt/bronze/transactions") \\
  .transform(deduplicate_and_clean) \\
  .writeStream \\
  .format("delta") \\
  .option("checkpointLocation", "/mnt/checkpoints/silver") \\
  .trigger(processingTime="10 seconds") \\
  .table("sixthpin_silver.validated_orders")`,
    outputSpecs: {
      latency: "Near Real-Time (<10s)",
      accuracy: "99.999% Integrity",
      security: "Column-Level Masking",
      architecture: "Fabric Delta Lakehouse",
    },
    features: [
      "Automated Schema Drift Resolution",
      "Real-Time Delta Lake Ingestion",
      "Self-Serve Business Intelligence Models",
    ],
  },
  {
    id: "devsecops",
    name: "Autonomous DevSecOps Agent",
    category: "Engineering & Automation",
    icon: Zap,
    prompt: "Deploy autonomous CI/CD agent for automated vulnerability patching, container scanning, and canary releases",
    synthesizingSteps: [
      "Injecting SAST & SBOM scanners into pipeline runner...",
      "Auto-synthesizing Docker multi-stage security hardened layers...",
      "Orchestrating canary deployment with automated rollback telemetry...",
      "Publishing signed attestation provenance into key vault...",
    ],
    codeSnippet: `name: Autonomous Enterprise Release
on: [push]
jobs:
  ai-verify-and-ship:
    runs-on: sixthpin-hardened-runner
    steps:
      - uses: sixthpin/agent-sec-audit@v3
        with:
          ai_policy_enforcement: "zero-tolerance"
          auto_patch_cve: true
      - run: deploy --strategy canary --metrics-gate p99_latency`,
    outputSpecs: {
      latency: "3.2m Build to Deploy",
      accuracy: "Zero Known CVEs",
      security: "SLSA Level 3 Provenance",
      architecture: "Autonomous Pipeline Runner",
    },
    features: [
      "Automated CVE Remediation Pull Requests",
      "Canary Release Telemetry Verification",
      "Compliance-as-Code Audit Trails",
    ],
  },
];

const DURATION_PER_BLOCK = 4000; // 4 seconds per block
const TICK_INTERVAL = 50; // Smooth 50ms interval

export function AIProductBuilder() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const [isManualPaused, setIsManualPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isTimerPaused = isManualPaused || isHovered;
  const activeProduct = products[currentIndex];

  // Auto-advance loop: each block shows for 4 seconds, then moves to next
  useEffect(() => {
    if (isTimerPaused) return;

    const timer = setInterval(() => {
      setElapsedMs((prev) => {
        const next = prev + TICK_INTERVAL;
        if (next >= DURATION_PER_BLOCK) {
          setCurrentIndex((idx) => (idx + 1) % products.length);
          return 0;
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [isTimerPaused]);

  // Derived progress and step states
  const progressPercent = Math.min(100, Math.round((elapsedMs / DURATION_PER_BLOCK) * 100));
  const stepIndex = Math.min(3, Math.floor((elapsedMs / DURATION_PER_BLOCK) * 4));
  const isSynthesizing = elapsedMs < DURATION_PER_BLOCK * 0.85;
  const remainingSec = Math.max(0, (DURATION_PER_BLOCK - elapsedMs) / 1000).toFixed(1);

  const handleSelectProduct = (index: number) => {
    setCurrentIndex(index);
    setElapsedMs(0);
  };

  const handleRestartCurrent = () => {
    setElapsedMs(0);
  };

  return (
    <section
      className="bg-[#101827] relative py-14 sm:py-16 px-4 overflow-hidden border-y border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glowing particles & grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E7192D] rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#E7192D]/40 rounded-full blur-[160px]" />
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ai-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with 4-Second Auto-Tour Badge */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7192D]/10 border border-[#E7192D]/30 text-xs font-semibold uppercase tracking-wider text-[#E7192D] mb-4">
            <Sparkles size={14} className="animate-spin text-[#E7192D]" style={{ animationDuration: "6s" }} />
            Autonomous AI Engineering Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Watch AI Create Enterprise Products in{" "}
            <span className="text-[#E7192D]">Real Time.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-4">
            SixthPin bridges strategy and execution with AI-driven solution engineering.
            Each architecture archetype showcases autonomous synthesis sequentially.
          </p>

          {/* Tour Status & Controls Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
            <span className={`w-2 h-2 rounded-full ${isTimerPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"}`} />
            <span>
              Auto-Tour: <strong className="text-white">4s per block</strong> ({isTimerPaused ? (isHovered ? "Paused on Hover" : "Paused") : `Switching in ${remainingSec}s`})
            </span>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setIsManualPaused((prev) => !prev)}
              className="text-slate-300 hover:text-white inline-flex items-center gap-1 font-semibold transition-colors"
              title={isManualPaused ? "Resume 4s rotation" : "Pause 4s rotation"}
            >
              {isManualPaused ? (
                <>
                  <Play size={11} fill="currentColor" className="text-emerald-400" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause size={11} className="text-amber-400" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Solution Archetype Blocks with 4-Second Animated Rotation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {products.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = currentIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectProduct(idx)}
                className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? "bg-white/10 border-[#E7192D] shadow-[0_0_30px_rgba(231,25,45,0.35)] ring-2 ring-[#E7192D] scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20 opacity-75 hover:opacity-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#E7192D] text-white shadow-md shadow-red-500/30 scale-105"
                          : "bg-white/5 text-slate-400"
                      }`}
                    >
                      <Icon size={20} className={isSelected ? "animate-pulse" : ""} />
                    </div>

                    {/* Active Block Live Timer Badge */}
                    {isSelected ? (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E7192D]/20 border border-[#E7192D]/40">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E7192D] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E7192D]" />
                        </span>
                        <span className="text-[10.5px] font-mono font-bold text-[#E7192D]">
                          {isTimerPaused ? "PAUSED" : `${remainingSec}s`}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[11px] font-mono font-bold text-slate-500">
                        0{idx + 1}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#E7192D] font-semibold tracking-wider uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className={isSelected ? "text-white font-medium" : ""}>
                    {isSelected
                      ? (isTimerPaused ? "Paused (Hovered)" : `Showing for 4s...`)
                      : "Click to View"}
                  </span>
                  <ArrowRight
                    size={13}
                    className={isSelected ? "text-[#E7192D] translate-x-1 transition-transform" : "opacity-40"}
                  />
                </div>

                {/* 4-Second Animated Progress Bar on Active Block */}
                {isSelected && (
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#E7192D] via-red-500 to-white transition-all duration-75 ease-linear"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive AI Forge Workspace */}
        <div className="bg-[#171B23] border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          {/* Top Engine Control Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E7192D]/15 border border-[#E7192D]/30 flex items-center justify-center">
                <Cpu size={18} className="text-[#E7192D] animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                  SixthPin AI Synthesis Pipeline // Active Target
                </p>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  {activeProduct.name}
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E7192D]/20 text-[#E7192D] border border-[#E7192D]/30 font-medium">
                    {isSynthesizing ? "Synthesizing Core" : "Ready / Validated"}
                  </span>
                </h4>
              </div>
            </div>

            <button
              onClick={handleRestartCurrent}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-[#E7192D] text-white text-xs font-semibold tracking-wider transition-all duration-200 border border-white/15 hover:border-[#E7192D]"
            >
              <RotateCcw size={14} className={isSynthesizing ? "animate-spin" : ""} />
              Restart 4s Synthesis
            </button>
          </div>

          {/* Synthesis Progress Bar */}
          <div className="py-5">
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-2">
                <Activity size={13} className="text-[#E7192D]" />
                {isSynthesizing
                  ? activeProduct.synthesizingSteps[stepIndex]
                  : "All architectural components compiled & verified successfully"}
              </span>
              <span className="text-[#E7192D] font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#E7192D] via-red-500 to-white transition-all duration-75 ease-linear"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Interactive Split Workbench */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4 items-stretch">
            {/* Left Column: Code Synthesis Terminal */}
            <div className="lg:col-span-7 bg-[#101827] rounded-2xl border border-white/10 p-5 font-mono text-xs flex flex-col justify-between overflow-hidden shadow-inner">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-slate-400 text-[11px] ml-2">engine_output.py</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Language: Python/HCL</span>
                </div>

                <div className="relative">
                  {/* Prompt bubble */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 mb-4 text-slate-300 text-[11px] leading-relaxed">
                    <span className="text-[#E7192D] font-bold mr-1.5">Prompt:</span>
                    {activeProduct.prompt}
                  </div>

                  {/* Code block */}
                  <pre className="text-slate-300 leading-relaxed overflow-x-auto p-2 scrollbar-thin">
                    <code>{activeProduct.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Terminal Footer status */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-2 text-green-400">
                  <ShieldCheck size={14} />
                  SOC2 / ISO 27001 Code Constraints Applied
                </span>
                <span className="text-slate-500">Engine: SixthPin v2.4</span>
              </div>
            </div>

            {/* Right Column: Generated Product Telemetry & Architecture */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 border border-white/10 rounded-2xl p-6">
              <div>
                <p className="text-xs font-semibold text-[#E7192D] uppercase tracking-wider mb-2">
                  Synthesized Product Architecture
                </p>
                <h5 className="text-xl font-bold text-white mb-4">
                  {activeProduct.name}
                </h5>

                {/* Performance Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                    <p className="text-[11px] text-slate-400 uppercase">Response Latency</p>
                    <p className="text-sm font-bold text-white font-mono mt-0.5">
                      {activeProduct.outputSpecs.latency}
                    </p>
                  </div>
                  <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                    <p className="text-[11px] text-slate-400 uppercase">Verification Metric</p>
                    <p className="text-sm font-bold text-white font-mono mt-0.5">
                      {activeProduct.outputSpecs.accuracy}
                    </p>
                  </div>
                  <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                    <p className="text-[11px] text-slate-400 uppercase">Security Posture</p>
                    <p className="text-sm font-bold text-emerald-400 font-mono mt-0.5">
                      {activeProduct.outputSpecs.security}
                    </p>
                  </div>
                  <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                    <p className="text-[11px] text-slate-400 uppercase">Target Runtime</p>
                    <p className="text-sm font-bold text-white font-mono mt-0.5">
                      {activeProduct.outputSpecs.architecture}
                    </p>
                  </div>
                </div>

                {/* Key Built-in Capabilities */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Included Enterprise Artifacts:
                  </p>
                  {activeProduct.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={15} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA link to contact/services */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to build this for your organization?</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E7192D] hover:text-white transition-colors"
                >
                  Start Project <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
