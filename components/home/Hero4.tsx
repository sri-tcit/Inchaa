"use client";

import { useEffect, useRef } from "react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function Hero4() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const c = canvas.getContext("2d");
    if (!c) return;

    let W = 0, H = 0;
    let mx = -1e4, my = -1e4, smx = 0, smy = 0;
    let rafId: number;

    // ── data ──────────────────────────────────────────────────
    const pros: Record<string, { name: string; type: string; rating: number; icon: string; col: string }[]> = {
      gc: [
        { name: "Al Masdar Contracting", type: "General Contractor", rating: 4.8, icon: "🏗", col: "99,102,241" },
        { name: "Al Reef Builders", type: "General Contractor", rating: 4.5, icon: "🏗", col: "251,146,60" },
        { name: "Horizon Contracting", type: "Building Contractor", rating: 4.7, icon: "🏗", col: "59,130,246" },
      ],
      eng: [
        { name: "Gulf Structures Eng.", type: "Structural Engineer", rating: 4.9, icon: "📐", col: "245,158,11" },
        { name: "Falcon Engineering", type: "Civil Engineer", rating: 4.9, icon: "🔧", col: "6,182,212" },
      ],
      pm: [
        { name: "ProBuild Consultants", type: "Project Consultant", rating: 4.7, icon: "📋", col: "16,185,129" },
        { name: "Pinnacle PM", type: "Project Manager", rating: 4.6, icon: "📋", col: "5,150,105" },
      ],
      qs: [
        { name: "Precision QS", type: "Quantity Surveyor", rating: 4.7, icon: "📊", col: "34,197,94" },
        { name: "CostWise Consulting", type: "Cost Consultant", rating: 4.6, icon: "📊", col: "21,128,61" },
      ],
      mep: [
        { name: "Emirates MEP Co.", type: "MEP Engineer", rating: 4.6, icon: "⚡", col: "236,72,153" },
        { name: "PowerLink Systems", type: "MEP Contractor", rating: 4.7, icon: "⚡", col: "244,63,94" },
      ],
      int: [
        { name: "Desert Rose Interiors", type: "Interior Designer", rating: 4.8, icon: "🎨", col: "139,92,246" },
        { name: "Noor Design Studio", type: "Fit-Out Contractor", rating: 4.6, icon: "🎨", col: "168,85,247" },
        { name: "Lusso Interiors", type: "Interior Specialist", rating: 4.7, icon: "🎨", col: "124,58,237" },
      ],
      land: [
        { name: "Green Oasis LLC", type: "Landscape Contractor", rating: 4.7, icon: "🌿", col: "34,197,94" },
        { name: "Al Hadeeqa Gardens", type: "Landscape Designer", rating: 4.8, icon: "🌿", col: "22,163,74" },
        { name: "AquaScape UAE", type: "Irrigation Specialist", rating: 4.5, icon: "💧", col: "6,182,212" },
      ],
      reno: [
        { name: "RenoPro Emirates", type: "Renovation Contractor", rating: 4.7, icon: "🔨", col: "251,146,60" },
        { name: "Al Tajdeed Contracting", type: "Renovation Specialist", rating: 4.5, icon: "🔨", col: "249,115,22" },
        { name: "Refresh Contracting", type: "Refurb Contractor", rating: 4.6, icon: "🔨", col: "234,88,12" },
      ],
      solar: [
        { name: "SunPower Gulf", type: "Solar Installer", rating: 4.8, icon: "☀️", col: "245,158,11" },
        { name: "CleanTech Energy", type: "Solar Engineer", rating: 4.6, icon: "☀️", col: "234,179,8" },
        { name: "Shams Solar UAE", type: "PV Contractor", rating: 4.7, icon: "☀️", col: "202,138,4" },
      ],
      smart: [
        { name: "SmartLiving UAE", type: "Smart Home Integrator", rating: 4.7, icon: "📱", col: "99,102,241" },
        { name: "iHome Systems", type: "Automation Specialist", rating: 4.8, icon: "📡", col: "129,140,248" },
        { name: "ConnectHub Tech", type: "Home Automation", rating: 4.6, icon: "🔌", col: "79,70,229" },
      ],
      pool: [
        { name: "Blue Lagoon Pools", type: "Pool Contractor", rating: 4.8, icon: "🏊", col: "6,182,212" },
        { name: "AquaBuild UAE", type: "Pool Builder", rating: 4.6, icon: "💧", col: "14,165,233" },
        { name: "Crystal Pools LLC", type: "Pool Specialist", rating: 4.7, icon: "🏊", col: "2,132,199" },
      ],
    };

    const projects = [
      { type: "Villa Construction", loc: "Saadiyat Island, Abu Dhabi", icon: "🏠", pool: ["gc", "eng", "pm", "mep", "qs"] },
      { type: "Villa Renovation", loc: "Al Raha Beach, Abu Dhabi", icon: "🔨", pool: ["reno", "int", "mep", "pm"] },
      { type: "Solar Panels", loc: "Dubai Hills Estate, Dubai", icon: "☀️", pool: ["solar", "mep"] },
      { type: "Landscaping", loc: "Masaar, Sharjah", icon: "🌿", pool: ["land"] },
      { type: "Interior Fit-Out", loc: "DIFC, Dubai", icon: "🎨", pool: ["int", "mep"] },
      { type: "Villa Extension", loc: "Nakheel Villas, Dubai", icon: "🏗", pool: ["gc", "eng", "pm", "mep"] },
      { type: "Swimming Pool", loc: "Khalifa City, Abu Dhabi", icon: "🏊", pool: ["pool", "land"] },
      { type: "Smart Home Systems", loc: "JBR, Dubai", icon: "📱", pool: ["smart", "mep"] },
    ];

    // ── state ─────────────────────────────────────────────────
    type QuoteEntry = {
      prof: typeof pros["gc"][0];
      x: number; y: number; tx: number; ty: number;
      progress: number; arrived: boolean; arriveTime: number;
    };
    type Particle = { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; col: string };

    let currentProjectIdx = 0;
    let cycleTimer = 0;
    const cycleDuration = 7;
    let activeQuotes: QuoteEntry[] = [];
    let quoteCount = 0;
    let particles: Particle[] = [];
    let currentPool: typeof pros["gc"] = [];

    function buildQuotePool(idx: number) {
      const p = projects[idx];
      const pool: typeof pros["gc"] = [];
      for (const cat of p.pool) for (const pro of pros[cat]) pool.push(pro);
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      return pool;
    }
    currentPool = buildQuotePool(0);

    function roundRect(x: number, y: number, w: number, h: number, r: number) {
      c.beginPath();
      c.moveTo(x + r, y); c.lineTo(x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r);
      c.lineTo(x + w, y + h - r); c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      c.lineTo(x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r);
      c.lineTo(x, y + r); c.quadraticCurveTo(x, y, x + r, y);
      c.closePath();
    }

    function spawnParticles(x: number, y: number, col: string, n: number) {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        particles.push({
          x, y,
          vx: Math.cos(a) * (1.5 + Math.random() * 3),
          vy: Math.sin(a) * (1.5 + Math.random() * 3),
          life: 1, decay: 0.02 + Math.random() * 0.02,
          size: 1.5 + Math.random() * 2, col,
        });
      }
    }

    function draw(ts: number) {
      rafId = requestAnimationFrame(draw);
      const t = ts * 0.001;
      if (W === 0) return;

      if (mx > 0) { smx += (mx - smx) * 0.05; smy += (my - smy) * 0.05; }
      else { smx += (W / 2 - smx) * 0.01; smy += (H / 2 - smy) * 0.01; }

      const isS = W < 600;
      const isM = W < 900;

      // Cycle
      cycleTimer += 0.016;
      const cyclePhase = cycleTimer / cycleDuration;
      if (cycleTimer >= cycleDuration) {
        cycleTimer = 0;
        currentProjectIdx = (currentProjectIdx + 1) % projects.length;
        activeQuotes = []; quoteCount = 0;
        currentPool = buildQuotePool(currentProjectIdx);
      }

      // Spawn quotes
      const maxQuotes = Math.min(isS ? 3 : isM ? 4 : 5, currentPool.length);
      const quoteIntervals = [0.15, 0.28, 0.4, 0.52, 0.64];
      for (let qi = 0; qi < Math.min(quoteIntervals.length, maxQuotes); qi++) {
        if (cyclePhase >= quoteIntervals[qi] && activeQuotes.length === qi) {
          const prof = currentPool[qi];
          let sx: number, sy: number;
          const side = qi % 4;
          if (isS) {
            if (side === 0) { sx = W + 80; sy = H * 0.2 + qi * H * 0.12; }
            else if (side === 1) { sx = W + 80; sy = H * 0.6 + qi * H * 0.05; }
            else if (side === 2) { sx = -80; sy = H * 0.15 + qi * H * 0.13; }
            else { sx = -80; sy = H * 0.55 + qi * H * 0.08; }
          } else {
            sx = W + 80; sy = H * 0.15 + qi * H * 0.14;
          }
          const projCX = isS ? W * 0.5 : isM ? W * 0.45 : W * 0.56;
          const projCY = H * 0.5;
          const targetAngle = -Math.PI * 0.35 + qi * Math.PI * 0.22;
          const targetDist = isS ? H * 0.22 : isM ? Math.min(W * 0.22, 240) : Math.min(W * 0.2, 260);
          const tx = projCX + Math.cos(targetAngle) * targetDist;
          const ty = projCY + Math.sin(targetAngle) * targetDist;
          activeQuotes.push({ prof, x: sx, y: sy, tx, ty, progress: 0, arrived: false, arriveTime: 0 });
          quoteCount++;
        }
      }

      c.clearRect(0, 0, W, H);

      // Background
      const bg = c.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.55);
      bg.addColorStop(0, "#f0f2f8"); bg.addColorStop(0.4, "#f5f6fa"); bg.addColorStop(1, "#eef0f5");
      c.fillStyle = bg; c.fillRect(0, 0, W, H);

      // Grid
      c.strokeStyle = "rgba(79,70,229,0.03)"; c.lineWidth = 0.5;
      for (let gx = 0; gx < W; gx += 80) { c.beginPath(); c.moveTo(gx, 0); c.lineTo(gx, H); c.stroke(); }
      for (let gy = 0; gy < H; gy += 80) { c.beginPath(); c.moveTo(0, gy); c.lineTo(W, gy); c.stroke(); }

      // ── PROJECT CARD ──────────────────────────────────────────
      const proj = projects[currentProjectIdx];
      const projFade = cyclePhase < 0.1 ? cyclePhase * 10 : cyclePhase > 0.88 ? Math.max(0, (1 - cyclePhase) * 8) : 1;
      const projX = isS ? Math.round(W * 0.1) : isM ? Math.round(W * 0.35) : Math.round(W * 0.48);
      const projY = Math.round(H * 0.38);
      const projW = isS ? Math.round(W * 0.35) : isM ? Math.round(W * 0.2) : Math.min(210, Math.round(W * 0.16));
      const projH = isS ? 65 : isM ? 75 : 85;

      const pg = c.createRadialGradient(projX + projW / 2, projY + projH / 2, 0, projX + projW / 2, projY + projH / 2, projW);
      pg.addColorStop(0, `rgba(99,102,241,${0.04 * projFade})`); pg.addColorStop(1, "transparent");
      c.fillStyle = pg; c.fillRect(projX - projW / 2, projY - projH / 2, projW * 2, projH * 2);

      c.globalAlpha = projFade;
      c.fillStyle = "rgba(255,255,255,0.92)";
      roundRect(projX, projY, projW, projH, 10); c.fill();
      c.strokeStyle = "rgba(79,70,229,0.25)"; c.lineWidth = 1.5;
      roundRect(projX, projY, projW, projH, 10); c.stroke();

      c.fillStyle = "rgba(79,70,229,0.5)";
      roundRect(projX, projY, 4, projH, 2); c.fill();

      c.font = (isS ? 14 : 18) + "px sans-serif"; c.textAlign = "left";
      c.fillText(proj.icon, projX + (isS ? 10 : 14), projY + (isS ? 24 : 28));

      c.font = `bold ${isS ? 9 : 11}px "Plus Jakarta Sans",sans-serif`;
      c.fillStyle = "rgba(30,41,59,0.85)";
      c.fillText(proj.type, projX + (isS ? 28 : 38), projY + (isS ? 20 : 24));

      c.font = `${isS ? 7 : 9}px "JetBrains Mono",monospace`;
      c.fillStyle = "rgba(100,116,139,0.7)";
      c.fillText(proj.loc, projX + (isS ? 28 : 38), projY + (isS ? 32 : 38));

      c.font = `bold ${isS ? 6 : 7}px "JetBrains Mono",monospace`;
      c.fillStyle = "rgba(79,70,229,0.6)";
      c.fillText("● NEW PROJECT", projX + (isS ? 10 : 14), projY + projH - (isS ? 14 : 18));

      if (quoteCount > 0) {
        c.font = `bold ${isS ? 8 : 9}px "JetBrains Mono",monospace`;
        c.fillStyle = "rgba(34,197,94,0.7)"; c.textAlign = "right";
        c.fillText(`${quoteCount} quote${quoteCount > 1 ? "s" : ""} received`, projX + projW - (isS ? 8 : 12), projY + projH - (isS ? 14 : 18));
        c.textAlign = "left";
      }
      c.globalAlpha = 1;

      // ── QUOTE CARDS ───────────────────────────────────────────
      const projCenterX = projX + projW / 2;
      const projCenterY = projY + projH / 2;

      for (let ai = 0; ai < activeQuotes.length; ai++) {
        const aq = activeQuotes[ai];
        aq.progress = Math.min(1, aq.progress + 0.012);
        aq.x += (aq.tx - aq.x) * 0.04;
        aq.y += (aq.ty - aq.y) * 0.04;

        if (aq.progress >= 0.95 && !aq.arrived) {
          aq.arrived = true; aq.arriveTime = t;
          spawnParticles(projCenterX, projCenterY, "34,197,94", 6);
        }

        const qFade = Math.min(1, aq.progress * 3) * projFade;
        const qx = Math.round(aq.x), qy = Math.round(aq.y);
        const qw = isS ? Math.round(W * 0.3) : isM ? Math.round(W * 0.18) : Math.min(170, Math.round(W * 0.14));
        const qh = isS ? 48 : isM ? 55 : 62;
        const prof2 = aq.prof;

        if (qFade > 0.2) {
          const beamA = aq.arrived ? 0.15 : qFade * 0.08;
          c.beginPath(); c.moveTo(qx + qw / 2, qy + qh / 2); c.lineTo(projCenterX, projCenterY);
          c.strokeStyle = `rgba(${prof2.col},${beamA})`; c.lineWidth = 1 + qFade; c.stroke();
          const pt = ((t * 0.5 + ai * 0.2) % 1);
          const px = qx + qw / 2 + (projCenterX - qx - qw / 2) * pt;
          const py = qy + qh / 2 + (projCenterY - qy - qh / 2) * pt;
          c.beginPath(); c.arc(px, py, 2 + qFade * 2, 0, Math.PI * 2);
          c.fillStyle = `rgba(${prof2.col},${0.2 * qFade * (1 - Math.abs(pt - 0.5) * 2)})`; c.fill();
        }

        c.globalAlpha = qFade;
        c.fillStyle = "rgba(255,255,255,0.9)";
        roundRect(qx, qy, qw, qh, 8); c.fill();
        c.strokeStyle = `rgba(${prof2.col},${aq.arrived ? 0.35 : 0.2})`; c.lineWidth = 1;
        roundRect(qx, qy, qw, qh, 8); c.stroke();

        c.fillStyle = `rgba(${prof2.col},0.5)`;
        roundRect(qx, qy, 3, qh, 1); c.fill();

        c.font = (isS ? 10 : 13) + "px sans-serif"; c.textAlign = "left";
        c.fillText(prof2.icon, qx + (isS ? 8 : 12), qy + (isS ? 18 : 22));

        c.font = `bold ${isS ? 7 : 9}px "Plus Jakarta Sans",sans-serif`;
        c.fillStyle = "rgba(30,41,59,0.8)";
        c.fillText(prof2.name, qx + (isS ? 22 : 28), qy + (isS ? 16 : 20));

        c.font = `${isS ? 6 : 7.5}px "JetBrains Mono",monospace`;
        c.fillStyle = "rgba(100,116,139,0.65)";
        c.fillText(prof2.type, qx + (isS ? 22 : 28), qy + (isS ? 27 : 32));

        c.font = `bold ${isS ? 7 : 8}px "JetBrains Mono",monospace`;
        c.fillStyle = "rgba(202,138,4,0.7)";
        c.fillText(`★ ${prof2.rating}`, qx + (isS ? 22 : 28), qy + qh - (isS ? 10 : 14));

        if (aq.arrived) {
          c.font = `bold ${isS ? 6 : 7}px "JetBrains Mono",monospace`;
          c.fillStyle = "rgba(34,197,94,0.5)"; c.textAlign = "right";
          c.fillText("✓ QUOTE SENT", qx + qw - (isS ? 6 : 10), qy + qh - (isS ? 10 : 14));
          c.textAlign = "left";
        }
        c.globalAlpha = 1;
      }

      // ── PARTICLES ────────────────────────────────────────────
      for (let pi = particles.length - 1; pi >= 0; pi--) {
        const p = particles[pi];
        p.x += p.vx; p.y += p.vy; p.vx *= 0.95; p.vy *= 0.95; p.life -= p.decay;
        if (p.life <= 0) { particles.splice(pi, 1); continue; }
        c.beginPath(); c.arc(Math.round(p.x), Math.round(p.y), p.size * p.life, 0, Math.PI * 2);
        c.fillStyle = `rgba(${p.col},${p.life * 0.4})`; c.fill();
      }

      // ── FLOW ARROWS ──────────────────────────────────────────
      if (!isS && !isM) {
        const arrowY = H * 0.5;
        for (let ari = 0; ari < 3; ari++) {
          const arX = W * 0.7 + ari * 40;
          const arA = 0.03 + Math.sin(t * 2 + ari) * 0.015;
          c.strokeStyle = `rgba(79,70,229,${arA * 2})`; c.lineWidth = 1;
          c.beginPath(); c.moveTo(arX, arrowY - 6); c.lineTo(arX + 8, arrowY); c.lineTo(arX, arrowY + 6); c.stroke();
        }
      }

      // ── CYCLE DOTS ───────────────────────────────────────────
      const dotY = H - 25;
      const dotStartX = W / 2 - (projects.length * 8) / 2;
      for (let di = 0; di < projects.length; di++) {
        c.beginPath(); c.arc(Math.round(dotStartX + di * 12), dotY, 2.5, 0, Math.PI * 2);
        c.fillStyle = di === currentProjectIdx ? "rgba(79,70,229,0.55)" : "rgba(79,70,229,0.15)";
        c.fill();
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = section.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = rect.width; H = rect.height;
      smx = W / 2; smy = H / 2;
    }

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onMouseLeave = () => { mx = -1e4; my = -1e4; };
    const onTouchMove = (e: TouchEvent) => { mx = e.touches[0].clientX; my = e.touches[0].clientY; };
    const onTouchEnd = () => { mx = -1e4; my = -1e4; };

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    section.addEventListener("touchmove", onTouchMove, { passive: true });
    section.addEventListener("touchstart", onTouchMove as EventListener, { passive: true });
    section.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", resize);

    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      section.removeEventListener("touchmove", onTouchMove);
      section.removeEventListener("touchstart", onTouchMove as EventListener);
      section.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Top gradient for navbar readability */}
      <div
        className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, rgba(248,249,251,0.6), transparent)" }}
      />

      {/* Left text content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen
                      px-8 md:px-16 lg:px-16 xl:px-20
                      pt-32 pb-16 max-w-[540px]">

        {/* Headline */}
        <h1 className="text-[#1e293b] font-bold leading-[1.05] tracking-tight
                       text-[46px] md:text-[58px] lg:text-[68px] xl:text-[76px]">
          Your Construction<br />Project,{" "}
          <span style={{ color: "#4338ca" }}>Simplified.</span>
        </h1>

        {/* Divider */}
        <div className="mt-8 mb-8 w-12 h-[2px] bg-yellow" />

        {/* Subtext */}
        <p className="text-[#64748b] text-lg md:text-xl leading-relaxed max-w-[460px]">
          Post your project on Inchaa and receive competing quotes from verified contractors,
          engineers, and consultants across the UAE. Compare, hire, and build with confidence.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <PostProjectButton campaign="homepage_hero" size="lg" className="!text-lg !px-12 !py-5">
            Post Your Project Free
          </PostProjectButton>
        </div>
      </div>
    </section>
  );
}
