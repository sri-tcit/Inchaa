"use client";
import { useEffect, useRef } from "react";
import { JoinButton } from "./JoinButton";

export function JoinHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const section = sectionRef.current;
    if (!cv || !section) return;
    const ctx = cv.getContext("2d")!;

    let W: number, H: number, cx: number, cy: number;
    let mx = -1e4, my = -1e4, smx = 0, smy = 0;
    let cards: any[] = [], particles: any[] = [];
    let connectCount = 0, connectDisplay = 0;

    const projectData = [
      {type:'Villa',loc:'Saadiyat Island',val:'12M',icon:'🏠',cat:0},
      {type:'Tower',loc:'JLT, Dubai',val:'85M',icon:'🏗',cat:1},
      {type:'MEP Works',loc:'Al Reem Island',val:'8M',icon:'⚡',cat:2},
      {type:'Fit-Out',loc:'DIFC, Dubai',val:'15M',icon:'🎨',cat:3},
      {type:'Villa',loc:'Al Raha Beach',val:'18M',icon:'🏠',cat:0},
      {type:'Warehouse',loc:'KIZAD',val:'22M',icon:'🏭',cat:4},
      {type:'Hotel',loc:'Yas Island',val:'120M',icon:'🏨',cat:1},
      {type:'School',loc:'Khalifa City',val:'35M',icon:'🏫',cat:1},
      {type:'Office Tower',loc:'Masdar City',val:'28M',icon:'🏢',cat:1},
      {type:'Villa',loc:'Emirates Hills',val:'25M',icon:'🏠',cat:0},
      {type:'Road Works',loc:'Sharjah',val:'40M',icon:'🛣',cat:4},
      {type:'Renovation',loc:'Al Ain',val:'65M',icon:'🔨',cat:0},
      {type:'Apartment',loc:'JVC, Dubai',val:'32M',icon:'🏢',cat:0},
      {type:'Villa',loc:'MBZ City',val:'9M',icon:'🏠',cat:0},
      {type:'Fit-Out',loc:'Abu Dhabi Mall',val:'12M',icon:'🎨',cat:3},
      {type:'Pool & Deck',loc:'Palm Jumeirah',val:'6M',icon:'🏊',cat:0},
      {type:'Façade',loc:'Downtown Dubai',val:'30M',icon:'🔧',cat:2},
      {type:'Steel Works',loc:'Musaffah',val:'18M',icon:'🔩',cat:4},
    ];
    const catCols = ['46,200,140','99,102,241','245,158,11','236,72,153','139,92,246'];

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      cv!.width = innerWidth * dpr; cv!.height = innerHeight * dpr;
      cv!.style.width = innerWidth + 'px'; cv!.style.height = innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = innerWidth; H = innerHeight;
      cx = Math.round(W / 2); cy = Math.round(H / 2); smx = cx; smy = cy;
      layoutCards();
    }

    function layoutCards() {
      cards = [];
      var isSmall = W < 700, isMed = W < 1000;
      var cardW = isSmall ? 110 : 140, cardH = isSmall ? 48 : 58;
      var safeW = isSmall ? 200 : isMed ? 280 : 340, safeH = isSmall ? 160 : isMed ? 190 : 220;
      var maxCards = isSmall ? 8 : isMed ? 12 : projectData.length;
      for (var i = 0; i < maxCards; i++) {
        var pd = projectData[i], placed = false, attempts = 0, nx = 0, ny = 0;
        while (!placed && attempts < 100) {
          nx = 60 + Math.random() * (W - 120 - cardW); ny = 90 + Math.random() * (H - 140 - cardH);
          var dcx = Math.abs(nx + cardW / 2 - cx), dcy = Math.abs(ny + cardH / 2 - cy);
          if (dcx < safeW && dcy < safeH) { attempts++; continue; }
          var overlap = false;
          for (var j = 0; j < cards.length; j++) { if (Math.abs(nx - cards[j].x) < cardW + 15 && Math.abs(ny - cards[j].y) < cardH + 12) { overlap = true; break; } }
          if (!overlap) placed = true;
          attempts++;
        }
        if (!placed) { nx = 60 + Math.random() * (W - 180); ny = 90 + Math.random() * (H - 200); }
        nx = Math.round(nx); ny = Math.round(ny);
        cards.push({ x: nx, y: ny, baseX: nx, baseY: ny, w: cardW, h: cardH, data: pd, hover: 0, hovered: false, connected: false, connectAnim: 0, floatPhase: Math.random() * Math.PI * 2, floatSpeed: 0.15 + Math.random() * 0.2, pulsePhase: Math.random() * Math.PI * 2 });
      }
    }

    function spawnParticles(x: number, y: number, col: string, count: number) {
      for (var i = 0; i < count; i++) {
        var angle = Math.random() * Math.PI * 2, speed = 2 + Math.random() * 4;
        particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, decay: 0.015 + Math.random() * 0.02, size: 2 + Math.random() * 3, col });
      }
    }

    function roundRect(c2: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
      c2.beginPath();
      c2.moveTo(x + r, y); c2.lineTo(x + w - r, y); c2.quadraticCurveTo(x + w, y, x + w, y + r);
      c2.lineTo(x + w, y + h - r); c2.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      c2.lineTo(x + r, y + h); c2.quadraticCurveTo(x, y + h, x, y + h - r);
      c2.lineTo(x, y + r); c2.quadraticCurveTo(x, y, x + r, y); c2.closePath();
    }

    function drawCard(card: any, t: number) {
      var d = card.data, col = catCols[d.cat], h = card.hover, isConn = card.connected;
      card.x = Math.round(card.baseX + Math.sin(t * card.floatSpeed + card.floatPhase) * 5);
      card.y = Math.round(card.baseY + Math.cos(t * card.floatSpeed * 0.7 + card.floatPhase) * 4);
      var x = card.x, y = card.y, w = card.w, h2 = card.h;
      var scale = 1 + h * 0.12, sw = Math.round(w * scale), sh = Math.round(h2 * scale);
      var sx = Math.round(x - (sw - w) / 2), sy = Math.round(y - (sh - h2) / 2);
      if (h > 0.15 || isConn) {
        var beamA = isConn ? 0.25 : h * 0.15, beamCol = isConn ? '34,197,94' : col;
        ctx.beginPath(); ctx.moveTo(sx + sw / 2, sy + sh / 2); ctx.lineTo(cx, cy);
        ctx.strokeStyle = 'rgba(' + beamCol + ',' + beamA + ')'; ctx.lineWidth = 1 + h * 3; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(sx + sw / 2, sy + sh / 2); ctx.lineTo(cx, cy);
        ctx.strokeStyle = 'rgba(' + beamCol + ',' + (beamA * 0.5) + ')'; ctx.lineWidth = 0.5 + h; ctx.stroke();
        var pCount = isConn ? 3 : 1;
        for (var pi = 0; pi < pCount; pi++) {
          var pt = ((t * 0.6 + card.pulsePhase + pi * 0.33) % 1);
          var px = sx + sw / 2 + (cx - sx - sw / 2) * pt, py = sy + sh / 2 + (cy - sy - sh / 2) * pt;
          var pSize = 3 + h * 4;
          ctx.beginPath(); ctx.arc(px, py, pSize, 0, Math.PI * 2);
          var pg = ctx.createRadialGradient(px, py, 0, px, py, pSize);
          pg.addColorStop(0, 'rgba(' + beamCol + ',' + (0.3 * (1 - Math.abs(pt - 0.5) * 2)) + ')'); pg.addColorStop(1, 'transparent');
          ctx.fillStyle = pg; ctx.fill();
        }
      }
      if (h > 0.1) { ctx.fillStyle = 'rgba(0,0,0,' + (h * 0.06) + ')'; ctx.fillRect(sx + 3, sy + 3, sw, sh); }
      var cardBg = isConn ? 'rgba(240,253,244,' + (0.92 + h * 0.07) + ')' : 'rgba(255,255,255,' + (0.85 + h * 0.12) + ')';
      ctx.fillStyle = cardBg; roundRect(ctx, sx, sy, sw, sh, 8); ctx.fill();
      var borderCol = isConn ? 'rgba(34,197,94,' + (0.35 + h * 0.35) + ')' : 'rgba(' + col + ',' + (0.2 + h * 0.3) + ')';
      ctx.strokeStyle = borderCol; ctx.lineWidth = 1 + h; roundRect(ctx, sx, sy, sw, sh, 8); ctx.stroke();
      ctx.fillStyle = 'rgba(' + col + ',' + (0.5 + h * 0.4) + ')'; roundRect(ctx, sx, sy, 4, sh, 2); ctx.fill();
      var isS = W < 700;
      ctx.font = (isS ? 10 : 12 + h * 3) + 'px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(d.icon, sx + (isS ? 10 : 12), sy + (isS ? 18 : 22) + h * 2);
      ctx.font = 'bold ' + (isS ? 9 : 10 + h * 1.5) + 'px "Plus Jakarta Sans",sans-serif';
      ctx.fillStyle = 'rgba(30,41,59,' + (0.75 + h * 0.25) + ')';
      ctx.fillText(d.type, sx + (isS ? 26 : 30), sy + (isS ? 16 : 20) + h * 1);
      ctx.font = (isS ? 7 : 8.5 + h) + 'px "JetBrains Mono",monospace';
      ctx.fillStyle = 'rgba(100,116,139,' + (0.7 + h * 0.3) + ')';
      ctx.fillText(d.loc, sx + (isS ? 26 : 30), sy + (isS ? 28 : 34) + h * 1.5);
      if (isConn) {
        ctx.font = 'bold 8px "JetBrains Mono",monospace';
        ctx.fillStyle = 'rgba(34,197,94,' + (0.4 + h * 0.3) + ')';
        ctx.fillText('✓ QUOTE SENT', sx + 12, sy + sh - 8);
        var gg = ctx.createRadialGradient(sx + sw / 2, sy + sh / 2, 0, sx + sw / 2, sy + sh / 2, sw * 0.8);
        gg.addColorStop(0, 'rgba(34,197,94,0.04)'); gg.addColorStop(1, 'transparent');
        ctx.fillStyle = gg; ctx.fillRect(sx - 20, sy - 20, sw + 40, sh + 40);
      }
    }

    function drawCenterHub(t: number) {
      var pulse = 1 + Math.sin(t * 1.5) * 0.04;
      for (var ri = 1; ri <= 3; ri++) {
        var r = 32 + ri * 18;
        ctx.beginPath(); ctx.arc(cx, cy, r * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(99,102,241,' + (0.03 + ri * 0.012) + ')'; ctx.lineWidth = 0.8; ctx.stroke();
        var dotAngle = t * 0.3 * ri + ri * 2;
        ctx.beginPath(); ctx.arc(cx + Math.cos(dotAngle) * r * pulse, cy + Math.sin(dotAngle) * r * pulse, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99,102,241,0.2)'; ctx.fill();
      }
      var mg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 65);
      mg.addColorStop(0, 'rgba(99,102,241,0.1)'); mg.addColorStop(0.5, 'rgba(99,102,241,0.03)'); mg.addColorStop(1, 'transparent');
      ctx.fillStyle = mg; ctx.fillRect(cx - 65, cy - 65, 130, 130);
      ctx.beginPath(); ctx.arc(cx, cy, 22 * pulse, 0, Math.PI * 2);
      var hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 22 * pulse);
      hg.addColorStop(0, 'rgba(255,255,255,0.95)'); hg.addColorStop(1, 'rgba(240,242,248,0.9)');
      ctx.fillStyle = hg; ctx.fill();
      ctx.strokeStyle = 'rgba(99,102,241,0.35)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = 'rgba(129,140,248,0.45)';
      ctx.beginPath(); ctx.arc(cx, cy - 3, 6, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx, cy + 10, 9, 5.5, 0, Math.PI, 0); ctx.fill();
    }

    function drawGrid() {
      ctx.strokeStyle = 'rgba(79,70,229,0.03)'; ctx.lineWidth = 0.5;
      for (var gx = 0; gx < W; gx += 90) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke(); }
      for (var gy = 0; gy < H; gy += 90) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }
    }

    function drawHUD(t: number) {
      connectDisplay += (connectCount - connectDisplay) * 0.05;
      if (W < 600) return;
      ctx.font = '7px "JetBrains Mono",monospace'; ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(34,197,94,0.5)'; ctx.fillText('QUOTES SENT', 36, H - 42);
      ctx.font = 'bold 18px "Outfit",sans-serif';
      ctx.fillStyle = 'rgba(34,197,94,0.65)'; ctx.fillText(String(Math.round(connectDisplay)), 36, H - 24);
      ctx.beginPath(); ctx.arc(28, H - 39, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(34,197,94,' + (0.5 + Math.sin(t * 3) * 0.15) + ')'; ctx.fill();
      ctx.textAlign = 'right'; ctx.font = '7px "JetBrains Mono",monospace';
      ctx.fillStyle = 'rgba(79,70,229,0.4)'; ctx.fillText('AVAILABLE PROJECTS', W - 36, H - 42);
      ctx.font = 'bold 18px "Outfit",sans-serif';
      ctx.fillStyle = 'rgba(79,70,229,0.55)'; ctx.fillText(String(cards.length), W - 36, H - 24);
    }

    let rafId: number;
    function draw(t: number) {
      rafId = requestAnimationFrame(draw); t *= 0.001;
      smx += (mx - smx) * 0.06; smy += (my - smy) * 0.06;
      ctx.clearRect(0, 0, W, H);
      var bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.55);
      bg.addColorStop(0, '#f0f2f8'); bg.addColorStop(0.4, '#f5f6fa'); bg.addColorStop(1, '#eef0f5');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      drawGrid();
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var dx = smx - (card.x + card.w / 2), dy = smy - (card.y + card.h / 2);
        var dist = Math.sqrt(dx * dx + dy * dy);
        var targetHover = Math.max(0, 1 - dist / 200);
        card.hover += (targetHover - card.hover) * 0.08;
        var isDirectHover = smx >= card.x && smx <= card.x + card.w && smy >= card.y && smy <= card.y + card.h;
        if (isDirectHover && !card.connected && card.hover > 0.5) {
          card.hovered = true; card.connectAnim += 0.02;
          if (card.connectAnim >= 1) {
            card.connected = true; connectCount++;
            spawnParticles(card.x + card.w / 2, card.y + card.h / 2, '34,197,94', 20);
            spawnParticles(cx, cy, '34,197,94', 10); card.connectAnim = 1;
          }
        } else { card.hovered = false; if (!card.connected) card.connectAnim = Math.max(0, card.connectAnim - 0.03); }
        if (card.connectAnim > 0 && !card.connected) {
          var barW2 = card.w * 0.8, barX2 = card.x + card.w * 0.1, barY2 = card.y + card.h + 4;
          ctx.fillStyle = 'rgba(0,0,0,0.06)'; roundRect(ctx, barX2, barY2, barW2, 3, 2); ctx.fill();
          ctx.fillStyle = 'rgba(34,197,94,0.5)'; roundRect(ctx, barX2, barY2, barW2 * card.connectAnim, 3, 2); ctx.fill();
          ctx.font = 'bold 7px "JetBrains Mono",monospace'; ctx.textAlign = 'center';
          ctx.fillStyle = 'rgba(34,197,94,0.55)'; ctx.fillText('SENDING QUOTE...', card.x + card.w / 2, barY2 + 14);
        }
        drawCard(card, t);
      }
      drawCenterHub(t);
      for (var pi = particles.length - 1; pi >= 0; pi--) {
        var p = particles[pi];
        p.x += p.vx; p.y += p.vy; p.vx *= 0.96; p.vy *= 0.96; p.life -= p.decay;
        if (p.life <= 0) { particles.splice(pi, 1); continue; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.col + ',' + (p.life * 0.5) + ')'; ctx.fill();
      }
      drawHUD(t);
    }

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onMouseLeave = () => { mx = -1e4; my = -1e4; };
    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);
    resize();
    rafId = requestAnimationFrame(draw);

    setTimeout(() => {
      if (cards.length > 0) {
        var bestIdx = 0, bestScore = -1e9;
        for (var ai = 0; ai < cards.length; ai++) {
          var ac = cards[ai];
          var score = (ac.x > cx ? 1 : -0.5) + (ac.y < cy ? 0.5 : -0.3);
          if (score > bestScore) { bestScore = score; bestIdx = ai; }
        }
        cards[bestIdx].hover = 0.8;
        setTimeout(() => { if (!cards[bestIdx].connected) cards[bestIdx].hover = 0; }, 2500);
      }
    }, 2000);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center" style={{ background: '#f8f9fb' }}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-[#1e293b] font-bold leading-[1.08] tracking-tight text-[28px] md:text-[40px] lg:text-[48px]">
          Grow Your Business
          <br className="hidden md:block" />
          {" "}with Inchaa
        </h1>
        <p className="mt-6 text-[#64748b] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Create your professional profile on Inchaa as a contractor, engineer, or consultant
          and connect with homeowners, developers and main contractors actively looking to hire
          construction professionals across the UAE.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <JoinButton />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(248,249,251,0.8))" }} />
    </section>
  );
}
