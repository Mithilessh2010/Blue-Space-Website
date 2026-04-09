"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cmsData from "@/data/cms.json";

type Tab = "event" | "sponsors" | "faqs" | "deploy";

type CmsData = typeof cmsData;

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("event");
  const [data, setData] = useState<CmsData>(JSON.parse(JSON.stringify(cmsData)));
  const [deployLog, setDeployLog] = useState<string[]>([]);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStatus, setDeployStatus] = useState<"idle" | "running" | "success">("idle");
  const [saved, setSaved] = useState(false);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "event", label: "Event Info", icon: "📋" },
    { id: "sponsors", label: "Sponsors", icon: "🏷" },
    { id: "faqs", label: "FAQs", icon: "❓" },
    { id: "deploy", label: "Deploy", icon: "🚀" },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const simulateDeploy = async () => {
    setIsDeploying(true);
    setDeployStatus("running");
    setDeployLog([]);
    setActiveTab("deploy");

    const logLines = [
      "$ git add .",
      "$ git commit -m 'chore: update cms data via admin panel'",
      "[main a3f92c1] chore: update cms data via admin panel",
      " 1 file changed, 12 insertions(+), 8 deletions(-)",
      "$ git push origin main",
      "Enumerating objects: 5, done.",
      "Counting objects: 100% (5/5), done.",
      "Delta compression using up to 10 threads",
      "Compressing objects: 100% (3/3), done.",
      "Writing objects: 100% (3/3), 982 bytes | 982.00 KiB/s, done.",
      "remote: Resolving deltas: 100% (1/1), completed.",
      "To github.com:bluespace-hackathon/website.git",
      "   b2e4f0a..a3f92c1  main -> main",
      "",
      "▲ Vercel triggered by push to main...",
      "  ✓ Cloning github.com/bluespace-hackathon/website",
      "  ✓ Restoring Build Cache",
      "  ✓ Running npm install",
      "  ✓ Running npm run build",
      "  ✓ Build completed in 23.4s",
      "  ✓ Deploying to Production",
      "  ✓ Assigning Custom Domain",
      "",
      "🎉 Production: https://bluespace.vercel.app [LIVE]",
      "   Alias: bluespace-hackathon.vercel.app",
      "   Duration: 28s",
    ];

    for (let i = 0; i < logLines.length; i++) {
      await new Promise((res) => setTimeout(res, 120 + Math.random() * 80));
      setDeployLog((prev) => [...prev, logLines[i]]);
    }

    setIsDeploying(false);
    setDeployStatus("success");
  };

  const addSponsor = () => {
    const newSponsor = {
      id: Date.now().toString(),
      name: "New Sponsor",
      tier: "silver",
      logo: "/images/placeholder.png",
      url: "https://",
    };
    setData((d) => ({ ...d, sponsors: [...d.sponsors, newSponsor] }));
  };

  const removeSponsor = (id: string) => {
    setData((d) => ({ ...d, sponsors: d.sponsors.filter((s) => s.id !== id) }));
  };

  const addFaq = () => {
    const newFaq = {
      id: Date.now().toString(),
      question: "New question?",
      answer: "New answer.",
    };
    setData((d) => ({ ...d, faqs: [...d.faqs, newFaq] }));
  };

  const removeFaq = (id: string) => {
    setData((d) => ({ ...d, faqs: d.faqs.filter((f) => f.id !== id) }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(12px)" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="admin-terminal crt relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden"
      >
        {/* Header bar */}
        <div
          className="flex items-center gap-3 px-5 py-3 border-b border-blue-mid/20 flex-shrink-0"
          style={{ background: "rgba(74,112,169,0.08)" }}
        >
          <div className="flex gap-1.5">
            <button
              className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors"
              onClick={onClose}
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2 mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span
              className="text-blue-light/60 text-xs"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              BLUESPACE MISSION CONTROL — ADMIN v2.4.1
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-cream/30 hover:text-cream transition-colors text-lg leading-none ml-auto"
          >
            ×
          </button>
        </div>

        {/* Tab bar */}
        <div
          className="flex gap-0 border-b border-blue-mid/20 flex-shrink-0"
          style={{ background: "rgba(5,8,16,0.8)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-xs font-medium border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-blue-light text-blue-light bg-blue-mid/10"
                  : "border-transparent text-cream/40 hover:text-cream/70 hover:bg-blue-mid/5"
              }`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* EVENT INFO */}
          {activeTab === "event" && (
            <div className="space-y-5">
              <SectionHeader title="Event Information" subtitle="Edit core event details" />
              {(Object.keys(data.event) as (keyof typeof data.event)[]).map((key) => (
                <div key={key}>
                  <label
                    className="block text-blue-light/60 text-[10px] tracking-widest uppercase mb-1.5"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {key}
                  </label>
                  <input
                    type="text"
                    value={data.event[key]}
                    onChange={(e) =>
                      setData((d) => ({
                        ...d,
                        event: { ...d.event, [key]: e.target.value },
                      }))
                    }
                    className="w-full bg-blue-mid/5 border border-blue-mid/20 rounded-lg px-4 py-2.5 text-cream text-sm outline-none focus:border-blue-light/40 transition-colors"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* SPONSORS */}
          {activeTab === "sponsors" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <SectionHeader title="Sponsors" subtitle="Manage sponsor entries" />
                <button
                  onClick={addSponsor}
                  className="px-4 py-2 rounded-lg text-xs border border-blue-mid/40 text-blue-light hover:bg-blue-mid/20 transition-all"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  + Add Sponsor
                </button>
              </div>
              {data.sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="glass-card rounded-xl p-4 border border-blue-mid/20"
                >
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {(["name", "tier", "logo", "url"] as const).map((field) => (
                      <div key={field}>
                        <label
                          className="block text-blue-light/40 text-[10px] tracking-widest uppercase mb-1"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {field}
                        </label>
                        <input
                          type="text"
                          value={sponsor[field]}
                          onChange={(e) =>
                            setData((d) => ({
                              ...d,
                              sponsors: d.sponsors.map((s) =>
                                s.id === sponsor.id
                                  ? { ...s, [field]: e.target.value }
                                  : s
                              ),
                            }))
                          }
                          className="w-full bg-blue-mid/5 border border-blue-mid/15 rounded-lg px-3 py-2 text-cream text-xs outline-none focus:border-blue-light/30"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => removeSponsor(sponsor.id)}
                    className="text-red-400/60 hover:text-red-400 text-xs transition-colors"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    ✕ Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* FAQS */}
          {activeTab === "faqs" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <SectionHeader title="FAQ Items" subtitle="Edit questions and answers" />
                <button
                  onClick={addFaq}
                  className="px-4 py-2 rounded-lg text-xs border border-blue-mid/40 text-blue-light hover:bg-blue-mid/20 transition-all"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  + Add FAQ
                </button>
              </div>
              {data.faqs.map((faq, idx) => (
                <div
                  key={faq.id}
                  className="glass-card rounded-xl p-4 border border-blue-mid/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-blue-light/40 text-[10px] tracking-widest"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      FAQ_{String(idx + 1).padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => removeFaq(faq.id)}
                      className="text-red-400/60 hover:text-red-400 text-xs transition-colors"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      ✕ Remove
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-blue-light/40 text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
                        Question
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) =>
                          setData((d) => ({
                            ...d,
                            faqs: d.faqs.map((f) =>
                              f.id === faq.id ? { ...f, question: e.target.value } : f
                            ),
                          }))
                        }
                        className="w-full bg-blue-mid/5 border border-blue-mid/15 rounded-lg px-3 py-2 text-cream text-xs outline-none focus:border-blue-light/30"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      />
                    </div>
                    <div>
                      <label className="block text-blue-light/40 text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>
                        Answer
                      </label>
                      <textarea
                        value={faq.answer}
                        rows={3}
                        onChange={(e) =>
                          setData((d) => ({
                            ...d,
                            faqs: d.faqs.map((f) =>
                              f.id === faq.id ? { ...f, answer: e.target.value } : f
                            ),
                          }))
                        }
                        className="w-full bg-blue-mid/5 border border-blue-mid/15 rounded-lg px-3 py-2 text-cream text-xs outline-none focus:border-blue-light/30 resize-none"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DEPLOY */}
          {activeTab === "deploy" && (
            <div className="space-y-5">
              <SectionHeader title="Deploy" subtitle="Push changes to production" />

              {/* Deploy status */}
              <div className="glass-card rounded-xl p-5 border border-blue-mid/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-cream font-semibold text-sm mb-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Production Deployment
                    </p>
                    <p className="text-cream/40 text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>
                      target: bluespace.vercel.app
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      deployStatus === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : deployStatus === "running"
                        ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                        : "bg-blue-mid/10 border-blue-mid/30 text-blue-light"
                    }`}
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {deployStatus === "success"
                      ? "● LIVE"
                      : deployStatus === "running"
                      ? "● DEPLOYING"
                      : "● READY"}
                  </div>
                </div>

                <button
                  onClick={simulateDeploy}
                  disabled={isDeploying}
                  className={`w-full py-3 rounded-lg text-sm font-bold border transition-all duration-300 ${
                    isDeploying
                      ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-400/60 cursor-not-allowed"
                      : "border-blue-mid/40 bg-blue-mid/15 text-cream hover:bg-blue-mid/25 hover:border-blue-light/50 hover:shadow-glow-blue"
                  }`}
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {isDeploying ? "▲ Deploying..." : "▲ Git Commit + Deploy to Vercel"}
                </button>
              </div>

              {/* Deploy log terminal */}
              {deployLog.length > 0 && (
                <div
                  className="rounded-xl p-5 border border-blue-mid/20 min-h-64 max-h-80 overflow-y-auto"
                  style={{ background: "#000", fontFamily: "'Space Mono', monospace" }}
                >
                  {deployLog.map((line, i) => (
                    <div key={i} className="text-xs leading-6">
                      {line === "" ? (
                        <br />
                      ) : line.startsWith("$") ? (
                        <span className="text-blue-light">{line}</span>
                      ) : line.startsWith("✓") || line.startsWith("▲ Vercel") ? (
                        <span className="text-blue-light/60">{line}</span>
                      ) : line.startsWith("🎉") ? (
                        <span className="text-green-400 font-bold">{line}</span>
                      ) : line.startsWith("⚠") || line.startsWith("✗") ? (
                        <span className="text-red-400">{line}</span>
                      ) : (
                        <span className="text-cream/40">{line}</span>
                      )}
                    </div>
                  ))}
                  {isDeploying && (
                    <span className="text-blue-light animate-pulse text-xs">▋</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer bar */}
        <div
          className="flex items-center justify-between px-6 py-3 border-t border-blue-mid/20 flex-shrink-0"
          style={{ background: "rgba(5,8,16,0.9)" }}
        >
          <span
            className="text-cream/25 text-[10px]"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            session: admin@bluespace · {new Date().toLocaleString()}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs border border-cream/15 text-cream/50 hover:text-cream hover:border-cream/30 transition-all"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                saved
                  ? "border-green-500/50 bg-green-500/15 text-green-400"
                  : "border-blue-mid/50 bg-blue-mid/20 text-blue-light hover:bg-blue-mid/30"
              }`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {saved ? "✓ Saved" : "Save Changes"}
            </button>
            <button
              onClick={simulateDeploy}
              disabled={isDeploying}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold border border-blue-light/40 bg-blue-mid/20 text-cream hover:bg-blue-mid/30 transition-all disabled:opacity-40"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              ▲ Deploy
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h3
        className="text-cream font-bold text-base mb-1"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-cream/40 text-xs"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        {subtitle}
      </p>
    </div>
  );
}
