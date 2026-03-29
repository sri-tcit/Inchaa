"use client";
import { useEffect, useRef } from "react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function ConsultantHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const section = sectionRef.current;
    if (!cv || !section) return;
    const c = cv.getContext("2d")!;

    let W = 0, H = 0, cx2 = 0, cy2 = 0;
    let mx = -1e4, my = -1e4, smx = 0, smy = 0;
    let threats: any[] = [];
    let impacts: any[] = [];
    let shieldR = 0;
    let spawnTimer = 0;

    const riskLabels = ['Cost Overrun','Delay','Defects','Disputes','Permit Issue','Rework','Penalty','Scope Creep','Poor Quality','Safety Risk','Contractor Default','Design Error'];
    const riskIcons = ['💸','⏰','🔨','⚖️','📋','🔄','⚠️','📐','❌','🚧','🏚','✏️'];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      cv!.width = Math.round(innerWidth * dpr);
      cv!.height = Math.round(innerHeight * dpr);
      cv!.style.width = innerWidth + 'px';
      cv!.style.height = innerHeight + 'px';
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = innerWidth; H = innerHeight;
      cx2 = Math.round(W / 2); cy2 = Math.round(H / 2);
      smx = cx2; smy = cy2;
      shieldR = W < 600 ? Math.min(W, H) * 0.28 : W < 900 ? Math.min(W, H) * 0.3 : Math.min(W, H) * 0.32;
    }

    function spawnThreat() {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.max(W, H) * 0.7;
      const rIdx = Math.floor(Math.random() * riskLabels.length);
      const speed = 0.3 + Math.random() * 0.5;
      threats.push({
        x: cx2 + Math.cos(angle) * dist,
        y: cy2 + Math.sin(angle) * dist,
        angle: angle + Math.PI,
        speed,
        label: riskLabels[rIdx],
        icon: riskIcons[rIdx],
        life: 1,
        size: 6 + Math.random() * 4,
        col: Math.random() > 0.5 ? '239,68,68' : '245,158,11',
        hit: false,
        hitTime: 0,
        phase: Math.random() * Math.PI * 2,
      });
    }

    function spawnImpact(x: number, y: number, col: string) {
      for (let i = 0; i < 8; i++) {
        const a = Math.random() * Math.PI * 2;
        impacts.push({
          x, y,
          vx: Math.cos(a) * (2 + Math.random() * 3),
          vy: Math.sin(a) * (2 + Math.random() * 3),
          life: 1,
          decay: 0.025 + Math.random() * 0.02,
          size: 1.5 + Math.random() * 2,
          col,
        });
      }
    }

    function drawShield(t: number): number {
      const pulse = 1 + Math.sin(t * 1.5) * 0.012;
      const isS = W < 600;
      const R = shieldR * pulse;

      const cursorDist = Math.sqrt((smx - cx2) ** 2 + (smy - cy2) ** 2);
      const cursorOnShield = Math.max(0, 1 - Math.abs(cursorDist - R) / 100);
      const ss = 0.6 + cursorOnShield * 0.4;

      // Outer atmospheric glow
      const g0 = c.createRadialGradient(cx2, cy2, R * 0.6, cx2, cy2, R * 1.5);
      g0.addColorStop(0, 'transparent');
      g0.addColorStop(0.5, `rgba(79,70,229,${0.05 * ss})`);
      g0.addColorStop(1, 'transparent');
      c.fillStyle = g0; c.fillRect(0, 0, W, H);

      // Shield fill
      const gf = c.createRadialGradient(cx2, cy2, 0, cx2, cy2, R);
      gf.addColorStop(0, 'rgba(79,70,229,0.02)');
      gf.addColorStop(0.6, `rgba(79,70,229,${0.05 * ss})`);
      gf.addColorStop(0.9, `rgba(79,70,229,${0.08 * ss})`);
      gf.addColorStop(1, 'transparent');
      c.fillStyle = gf; c.beginPath(); c.arc(cx2, cy2, R, 0, Math.PI * 2); c.fill();

      // Shield dome rings
      for (let ri = 0; ri < 3; ri++) {
        const ringR = R - ri * 8;
        c.beginPath(); c.arc(cx2, cy2, ringR, 0, Math.PI * 2);
        c.strokeStyle = `rgba(79,70,229,${(0.1 + ri * 0.04 + ss * 0.1) * pulse})`;
        c.lineWidth = 2 - ri * 0.5; c.stroke();
      }

      // Inner ring
      c.beginPath(); c.arc(cx2, cy2, R * 0.5, 0, Math.PI * 2);
      c.strokeStyle = `rgba(79,70,229,${0.05 * ss})`; c.lineWidth = 0.5; c.stroke();

      // Hexagonal mesh
      if (!isS) {
        const hexR = 28;
        c.strokeStyle = `rgba(79,70,229,${0.04 + ss * 0.04})`; c.lineWidth = 0.4;
        for (let hx = -R; hx < R; hx += hexR * 1.5) {
          for (let hy = -R; hy < R; hy += hexR * 1.73) {
            const px = cx2 + hx + (Math.abs(Math.floor(hy / (hexR * 1.73))) % 2 === 1 ? hexR * 0.75 : 0);
            const py = cy2 + hy;
            const d = Math.sqrt((px - cx2) ** 2 + (py - cy2) ** 2);
            if (d > R - 15 || d < R * 0.35) continue;
            const hDist = Math.sqrt((px - smx) ** 2 + (py - smy) ** 2);
            const hBright = Math.max(0, 1 - hDist / 150) * 0.04;
            if (hBright > 0.005) { c.strokeStyle = `rgba(79,70,229,${0.04 + ss * 0.04 + hBright})`; }
            c.beginPath();
            for (let hi = 0; hi < 6; hi++) {
              const ha = hi * Math.PI / 3;
              const hpx = px + Math.cos(ha) * hexR * 0.4;
              const hpy = py + Math.sin(ha) * hexR * 0.4;
              if (hi === 0) c.moveTo(hpx, hpy); else c.lineTo(hpx, hpy);
            }
            c.closePath(); c.stroke();
            c.strokeStyle = `rgba(79,70,229,${0.04 + ss * 0.04})`;
          }
        }
      }

      // Rotating scan arcs
      const scanA = t * 0.4;
      c.beginPath(); c.arc(cx2, cy2, R, scanA, scanA + 0.7);
      c.strokeStyle = `rgba(79,70,229,${0.22 + ss * 0.15})`; c.lineWidth = 3; c.stroke();
      c.beginPath(); c.arc(cx2, cy2, R, scanA - 0.3, scanA);
      c.strokeStyle = `rgba(79,70,229,${0.1 + ss * 0.06})`; c.lineWidth = 1.5; c.stroke();
      c.beginPath(); c.arc(cx2, cy2, R, scanA + Math.PI, scanA + Math.PI + 0.5);
      c.strokeStyle = `rgba(79,70,229,${0.16 + ss * 0.1})`; c.lineWidth = 2; c.stroke();

      // Service labels around shield
      if (W >= 800) {
        const labels = ['COST CONTROL','QUALITY ASSURANCE','SCHEDULE MANAGEMENT','RISK MITIGATION','COMPLIANCE','SUPERVISION','PROJECT MANAGEMENT'];
        c.font = 'bold 9px "JetBrains Mono",monospace';
        for (let li = 0; li < labels.length; li++) {
          const la = (li / (labels.length - 1)) * Math.PI * 1.5 + Math.PI * 0.4 + t * 0.012;
          const lx = cx2 + Math.cos(la) * (R + 25);
          const ly = cy2 + Math.sin(la) * (R + 25);
          c.textAlign = lx > cx2 ? 'left' : 'right';
          c.fillStyle = `rgba(67,56,202,${0.25 + ss * 0.12})`;
          c.fillText(labels[li], Math.round(lx), Math.round(ly));
        }
      } else if (W >= 600) {
        const labelsShort = ['COST','QUALITY','SCHEDULE','RISK','COMPLIANCE','SUPERVISION','PM'];
        c.font = 'bold 7px "JetBrains Mono",monospace';
        for (let li2 = 0; li2 < labelsShort.length; li2++) {
          const la2 = (li2 / (labelsShort.length - 1)) * Math.PI * 1.5 + Math.PI * 0.4 + t * 0.012;
          const lx2 = cx2 + Math.cos(la2) * (R + 18);
          const ly2 = cy2 + Math.sin(la2) * (R + 18);
          c.textAlign = lx2 > cx2 ? 'left' : 'right';
          c.fillStyle = `rgba(67,56,202,${0.22 + ss * 0.1})`;
          c.fillText(labelsShort[li2], Math.round(lx2), Math.round(ly2));
        }
      }

      return ss;
    }

    function drawVillaIcon(_t: number) {
      const vx = cx2, vy = cy2 + 22;
      const vs = W < 600 ? 0.7 : W < 900 ? 0.85 : 1;

      const vg = c.createRadialGradient(vx, vy, 0, vx, vy, 35 * vs);
      vg.addColorStop(0, 'rgba(79,70,229,0.05)'); vg.addColorStop(1, 'transparent');
      c.fillStyle = vg; c.fillRect(vx - 35 * vs, vy - 35 * vs, 70 * vs, 70 * vs);

      c.fillStyle = 'rgba(79,70,229,0.12)';
      c.fillRect(Math.round(vx - 20 * vs), Math.round(vy - 10 * vs), Math.round(40 * vs), Math.round(24 * vs));
      c.strokeStyle = 'rgba(79,70,229,0.08)'; c.lineWidth = 0.5;
      c.strokeRect(Math.round(vx - 20 * vs), Math.round(vy - 10 * vs), Math.round(40 * vs), Math.round(24 * vs));

      c.beginPath();
      c.moveTo(vx - 25 * vs, vy - 10 * vs);
      c.lineTo(vx, vy - 28 * vs);
      c.lineTo(vx + 25 * vs, vy - 10 * vs);
      c.closePath();
      c.fillStyle = 'rgba(79,70,229,0.14)'; c.fill();
      c.strokeStyle = 'rgba(79,70,229,0.08)'; c.lineWidth = 0.5; c.stroke();

      c.fillStyle = 'rgba(79,70,229,0.08)';
      c.fillRect(Math.round(vx - 5 * vs), Math.round(vy + 2 * vs), Math.round(10 * vs), Math.round(12 * vs));

      c.fillStyle = 'rgba(245,200,100,0.12)';
      c.fillRect(Math.round(vx - 16 * vs), Math.round(vy - 5 * vs), Math.round(9 * vs), Math.round(7 * vs));
      c.fillRect(Math.round(vx + 7 * vs), Math.round(vy - 5 * vs), Math.round(9 * vs), Math.round(7 * vs));
    }

    let rafId: number;
    function draw(t: number) {
      rafId = requestAnimationFrame(draw);
      t *= 0.001;
      if (W === 0) return;

      if (mx > 0) { smx += (mx - smx) * 0.06; smy += (my - smy) * 0.06; }
      else { smx += (cx2 - smx) * 0.02; smy += (cy2 - smy) * 0.02; }

      c.clearRect(0, 0, W, H);

      // Background
      const bg = c.createRadialGradient(cx2, cy2, 0, cx2, cy2, Math.max(W, H) * 0.55);
      bg.addColorStop(0, '#f0f2f8'); bg.addColorStop(0.4, '#f5f6fa'); bg.addColorStop(1, '#eef0f5');
      c.fillStyle = bg; c.fillRect(0, 0, W, H);

      // Subtle grid
      c.strokeStyle = 'rgba(79,70,229,0.03)'; c.lineWidth = 0.5;
      for (let gx = 0; gx < W; gx += 80) { c.beginPath(); c.moveTo(gx, 0); c.lineTo(gx, H); c.stroke(); }
      for (let gy = 0; gy < H; gy += 80) { c.beginPath(); c.moveTo(0, gy); c.lineTo(W, gy); c.stroke(); }

      // Spawn threats periodically
      spawnTimer += 0.016;
      if (spawnTimer > 1.5 && threats.length < 12) { spawnThreat(); spawnTimer = 0; }

      // Draw shield
      const ss = drawShield(t);

      // Update and draw threats
      for (let i = threats.length - 1; i >= 0; i--) {
        const th = threats[i];
        if (th.hit) {
          th.hitTime += 0.016;
          th.life -= 0.06;
          if (th.life <= 0) { threats.splice(i, 1); continue; }
          c.globalAlpha = th.life;
          c.font = `bold ${th.size}px sans-serif`;
          c.textAlign = 'center';
          c.fillText(th.icon, Math.round(th.x), Math.round(th.y - th.hitTime * 20));
          c.globalAlpha = 1;
          continue;
        }

        const dx = cx2 - th.x, dy = cy2 - th.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        th.x += Math.cos(th.angle) * th.speed * (mx > 0 ? 1.5 : 0.6);
        th.y += Math.sin(th.angle) * th.speed * (mx > 0 ? 1.5 : 0.6);

        // Check shield collision
        if (dist < shieldR + 5 && !th.hit) {
          th.hit = true;
          spawnImpact(th.x, th.y, th.col);
          continue;
        }

        // Draw threat particle
        const alpha = Math.min(1, (dist - shieldR) / 80);
        if (alpha <= 0) continue;

        c.globalAlpha = alpha * th.life;
        c.beginPath();
        c.arc(Math.round(th.x), Math.round(th.y), th.size, 0, Math.PI * 2);
        c.fillStyle = `rgba(${th.col},0.7)`; c.fill();

        // Threat trail
        c.beginPath();
        c.moveTo(Math.round(th.x), Math.round(th.y));
        c.lineTo(Math.round(th.x - Math.cos(th.angle) * 18), Math.round(th.y - Math.sin(th.angle) * 18));
        c.strokeStyle = `rgba(${th.col},0.25)`; c.lineWidth = th.size * 0.5; c.stroke();

        // Label
        if (W >= 600 && th.size > 7) {
          c.font = `bold 8px "JetBrains Mono",monospace`;
          c.fillStyle = `rgba(${th.col},0.6)`;
          c.textAlign = 'center';
          c.fillText(th.label, Math.round(th.x), Math.round(th.y - th.size - 4));
        }
        c.globalAlpha = 1;
      }

      // Update and draw impacts
      for (let i = impacts.length - 1; i >= 0; i--) {
        const im = impacts[i];
        im.x += im.vx; im.y += im.vy;
        im.vx *= 0.92; im.vy *= 0.92;
        im.life -= im.decay;
        if (im.life <= 0) { impacts.splice(i, 1); continue; }
        c.beginPath();
        c.arc(Math.round(im.x), Math.round(im.y), im.size * im.life, 0, Math.PI * 2);
        c.fillStyle = `rgba(${im.col},${im.life * 0.8})`; c.fill();
      }

      // Draw villa
      drawVillaIcon(t);

      // Shield blocked count label
      if (ss > 0.8 && W >= 600) {
        c.font = 'bold 10px "JetBrains Mono",monospace';
        c.textAlign = 'center';
        c.fillStyle = `rgba(67,56,202,${0.3 * ss})`;
        c.fillText(`${threats.filter(t2 => t2.hit).length + Math.floor(t * 0.2)} risks blocked`, cx2, cy2 + shieldR + 50);
      }
    }

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onMouseLeave = () => { mx = -1e4; my = -1e4; };
    const onTouchMove = (e: TouchEvent) => { mx = e.touches[0].clientX; my = e.touches[0].clientY; };
    const onTouchEnd = () => { mx = -1e4; my = -1e4; };

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    section.addEventListener('touchmove', onTouchMove, { passive: true });
    section.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', resize);
    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      section.removeEventListener('touchmove', onTouchMove);
      section.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center" style={{ background: '#f8f9fb' }}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-[#1e293b] font-bold leading-[1.08] tracking-tight text-[28px] md:text-[40px] lg:text-[48px]">
          Find Trusted Consultants
          <br className="hidden md:block" />
          {" "}in the UAE
        </h1>
        <p className="mt-6 text-[#64748b] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Your project is only as good as the people advising it. Inchaa connects you
          with quantity surveyors, project management consultants, design consultants,
          and supervision consultants across the UAE.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <PostProjectButton campaign="consultants_hero" size="md" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(248,249,251,0.8))" }} />
    </section>
  );
}
