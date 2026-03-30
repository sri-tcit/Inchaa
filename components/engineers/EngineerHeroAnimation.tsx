"use client";
import { useEffect, useRef } from "react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { useLanguage } from "@/context/LanguageContext";

export function EngineerHero() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const section = sectionRef.current;
    if (!cv || !section) return;
    const c = cv.getContext("2d")!;

    let W: number, H: number, ground: number;
    let mx = -1e4, my = -1e4, smx = -1e4, smy = -1e4;
    let hovering = false;
    let sparks: any[] = [], workers: any[] = [], vehicles: any[] = [], sites: any[] = [];

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      cv!.width = Math.round(innerWidth * dpr); cv!.height = Math.round(innerHeight * dpr);
      cv!.style.width = innerWidth + 'px'; cv!.style.height = innerHeight + 'px';
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = innerWidth; H = innerHeight; ground = Math.round(H * 0.84);
      initSites();
    }

    function initSites() {
      sites = []; workers = []; vehicles = [];
      var isSmall = W < 600, isMed = W < 900;
      var towerW = Math.round(isSmall ? W * 0.2 : isMed ? W * 0.15 : Math.min(165, W * 0.145));
      var towerFH = Math.round(isSmall ? H * 0.022 : Math.min(22, H * 0.027));
      var towerFloors = isSmall ? 12 : 18;
      var towerX = Math.round(isSmall ? W * 0.02 : W * 0.03);
      var blockW = Math.round(isSmall ? W * 0.22 : isMed ? W * 0.18 : Math.min(210, W * 0.19));
      var blockFH = Math.round(isSmall ? H * 0.025 : Math.min(24, H * 0.03));
      var blockFloors = isSmall ? 8 : 12;
      var blockX = Math.round(isSmall ? W * 0.72 : W * 0.71);
      sites.push({ x: towerX, w: towerW, maxFloors: towerFloors, floorH: towerFH, builtFloors: Math.round(towerFloors * 0.5), buildProgress: 0, label: 'TOWER A', sub: 'STRUCTURAL', craneAngle: 0, targetCraneAngle: 0, side: 'left' });
      sites.push({ x: blockX, w: blockW, maxFloors: blockFloors, floorH: blockFH, builtFloors: Math.round(blockFloors * 0.5), buildProgress: 0, label: 'BLOCK B', sub: 'MEP STAGE', craneAngle: 0, targetCraneAngle: 0, side: 'right' });
      for (var si = 0; si < sites.length; si++) {
        var s = sites[si];
        for (var i = 0; i < 12; i++) {
          workers.push({ siteIdx: si, x: s.x + 10 + Math.random() * (s.w - 20), y: ground, targetY: ground, phase: Math.random() * Math.PI * 2, speed: 0.2 + Math.random() * 0.4, type: Math.random() > 0.6 ? 'welder' : 'worker', hatColor: ['#f5c040', '#ffffff', '#4488ff', '#f55030'][Math.floor(Math.random() * 4)], dir: Math.random() > 0.5 ? 1 : -1 });
        }
      }
      vehicles.push({ x: -140, y: ground + 14, speed: 0.8, type: 'truck', active: false, timer: 0.5 });
      vehicles.push({ x: W + 140, y: ground + 14, speed: -0.6, type: 'mixer', active: false, timer: 3 });
    }

    function spawnSparks(x: number, y: number, n: number) {
      for (var i = 0; i < n; i++) {
        sparks.push({ x, y, vx: (Math.random() - 0.5) * 6, vy: -Math.random() * 7 - 3, life: 1, decay: 0.016 + Math.random() * 0.022, sz: 1 + Math.random() * 2.8, hot: Math.random() > 0.3 });
      }
    }

    function drawWorker(wx: number, wy: number, type: string, hatColor: string, t: number, phase: number) {
      var x = Math.round(wx), y = Math.round(wy);
      var walk = Math.round(Math.sin(t * 3 + phase) * 1.5);
      c.fillStyle = 'rgba(40,35,30,0.4)'; c.fillRect(x - 3 + walk, y + 3, 3, 2); c.fillRect(x + 1 - walk, y + 3, 3, 2);
      c.fillStyle = 'rgba(50,55,75,0.35)'; c.fillRect(x - 3, y, 2, 4); c.fillRect(x + 1, y, 2, 4);
      c.fillRect(x - 3 + walk, y + 2, 2, 2); c.fillRect(x + 1 - walk, y + 2, 2, 2);
      var vestColor = type === 'welder' ? 'rgba(200,90,25,0.4)' : 'rgba(230,190,30,0.35)';
      c.fillStyle = vestColor; c.fillRect(x - 3, y - 8, 7, 8);
      c.fillStyle = 'rgba(220,220,220,0.12)'; c.fillRect(x - 3, y - 6, 7, 1); c.fillRect(x - 3, y - 3, 7, 1);
      c.fillStyle = 'rgba(180,160,130,0.3)';
      if (type === 'welder') {
        c.fillRect(x - 5, y - 6, 2, 5); c.fillRect(x + 4, y - 7, 2, 2); c.fillRect(x + 6, y - 6, 2, 2); c.fillRect(x + 8, y - 5, 2, 1);
        c.fillStyle = 'rgba(200,200,200,0.2)'; c.fillRect(x + 9, y - 5, 3, 1);
      } else {
        c.fillRect(x - 5, y - 6 + walk, 2, 4); c.fillRect(x + 4, y - 6 - walk, 2, 4);
      }
      c.fillStyle = 'rgba(190,165,135,0.35)'; c.fillRect(x - 1, y - 10, 3, 2);
      c.fillStyle = 'rgba(185,160,130,0.35)'; c.fillRect(x - 2, y - 13, 5, 4);
      c.fillStyle = hatColor; c.globalAlpha = 0.45;
      c.fillRect(x - 4, y - 14, 9, 2); c.fillRect(x - 3, y - 16, 7, 3);
      c.fillStyle = 'rgba(255,255,255,0.08)'; c.fillRect(x - 2, y - 16, 5, 1);
      c.globalAlpha = 1;
      c.fillStyle = 'rgba(0,0,0,0.06)'; c.fillRect(x - 4, y + 5, 9, 1);
    }

    function drawCrane(s: any, t: number) {
      var isSmall = W < 600;
      var craneOff = isSmall ? 22 : 40;
      var craneBaseX = s.side === 'left' ? s.x + s.w + craneOff : s.x - craneOff;
      var topY = ground - s.builtFloors * s.floorH;
      var craneTopY = Math.min(Math.round(topY - (isSmall ? 45 : 80)), Math.round(ground - s.maxFloors * s.floorH - (isSmall ? 30 : 55)));
      var mastW = isSmall ? 5 : 8;
      if (hovering) { s.targetCraneAngle = Math.atan2(smx - craneBaseX, 400) * 0.3; }
      s.craneAngle += (s.targetCraneAngle - s.craneAngle) * 0.015;
      c.strokeStyle = 'rgba(200,155,20,0.6)'; c.lineWidth = 2.5;
      c.beginPath(); c.moveTo(craneBaseX - mastW / 2, ground); c.lineTo(craneBaseX - mastW / 2, craneTopY); c.stroke();
      c.beginPath(); c.moveTo(craneBaseX + mastW / 2, ground); c.lineTo(craneBaseX + mastW / 2, craneTopY); c.stroke();
      c.strokeStyle = 'rgba(200,155,20,0.3)'; c.lineWidth = 0.8;
      for (var ly = ground; ly > craneTopY; ly -= 12) {
        c.beginPath(); c.moveTo(craneBaseX - mastW / 2, ly); c.lineTo(craneBaseX + mastW / 2, ly); c.stroke();
        var nextY = ly - 12;
        if (nextY > craneTopY) {
          c.beginPath(); c.moveTo(craneBaseX - mastW / 2, ly); c.lineTo(craneBaseX + mastW / 2, nextY); c.stroke();
          c.beginPath(); c.moveTo(craneBaseX + mastW / 2, ly); c.lineTo(craneBaseX - mastW / 2, nextY); c.stroke();
        }
      }
      c.fillStyle = 'rgba(220,180,40,0.2)'; c.beginPath(); c.arc(craneBaseX, craneTopY, 6, 0, Math.PI * 2); c.fill();
      var jibLen = isSmall ? Math.round(W * 0.1) : Math.min(180, Math.round(W * 0.14));
      var jibEndX = Math.round(craneBaseX + Math.sin(s.craneAngle) * jibLen);
      var jibY = craneTopY - 2;
      c.strokeStyle = 'rgba(220,180,40,0.25)'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(craneBaseX, jibY); c.lineTo(jibEndX, jibY); c.stroke();
      c.beginPath(); c.moveTo(craneBaseX, jibY - 5); c.lineTo(jibEndX, jibY - 3); c.stroke();
      c.strokeStyle = 'rgba(220,180,40,0.08)'; c.lineWidth = 0.5;
      var jibSegs = Math.floor(jibLen / 15);
      for (var ji = 0; ji < jibSegs; ji++) {
        var jt = ji / jibSegs;
        var jx = Math.round(craneBaseX + (jibEndX - craneBaseX) * jt);
        c.beginPath(); c.moveTo(jx, jibY); c.lineTo(jx, jibY - 5 + (jibY - jibY + 5) * jt * 0.2); c.stroke();
        if (ji < jibSegs - 1) { var jx2 = Math.round(craneBaseX + (jibEndX - craneBaseX) * (ji + 1) / jibSegs); c.beginPath(); c.moveTo(jx, jibY); c.lineTo(jx2, jibY - 4); c.stroke(); }
      }
      var cjLen = jibLen * 0.3;
      var cjX = Math.round(craneBaseX - Math.sin(s.craneAngle) * cjLen);
      c.strokeStyle = 'rgba(220,180,40,0.18)'; c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(craneBaseX, jibY); c.lineTo(cjX, jibY); c.stroke();
      c.fillStyle = 'rgba(60,60,70,0.35)'; c.fillRect(Math.round(cjX - 10), Math.round(jibY), 20, 14);
      c.strokeStyle = 'rgba(80,80,90,0.15)'; c.lineWidth = 0.5; c.strokeRect(Math.round(cjX - 10), Math.round(jibY), 20, 14);
      c.strokeStyle = 'rgba(220,180,40,0.2)'; c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(craneBaseX - 5, craneTopY); c.lineTo(craneBaseX, craneTopY - 18); c.lineTo(craneBaseX + 5, craneTopY); c.stroke();
      c.strokeStyle = 'rgba(220,180,40,0.1)'; c.lineWidth = 0.5;
      c.beginPath(); c.moveTo(craneBaseX, craneTopY - 18); c.lineTo(jibEndX, jibY - 3); c.stroke();
      c.beginPath(); c.moveTo(craneBaseX, craneTopY - 18); c.lineTo(cjX, jibY); c.stroke();
      var trolleyT = 0.6 + Math.sin(t * 0.2) * 0.2;
      var trolleyX = Math.round(craneBaseX + (jibEndX - craneBaseX) * trolleyT);
      c.fillStyle = 'rgba(220,180,40,0.2)'; c.fillRect(trolleyX - 4, Math.round(jibY - 1), 8, 5);
      var hookY = Math.round(jibY + 60 + Math.sin(t * 1.1) * 10);
      var sway = Math.sin(t * 0.8) * 3;
      c.strokeStyle = 'rgba(180,190,210,0.15)'; c.lineWidth = 0.7;
      c.beginPath(); c.moveTo(trolleyX, jibY + 4); c.lineTo(trolleyX + sway, hookY); c.stroke();
      c.fillStyle = 'rgba(160,170,190,0.2)'; c.fillRect(Math.round(trolleyX + sway - 3), hookY, 6, 8);
      c.strokeStyle = 'rgba(160,170,190,0.25)'; c.lineWidth = 1.5; c.lineCap = 'round';
      c.beginPath(); c.arc(trolleyX + sway, hookY + 12, 4, 0, Math.PI); c.stroke();
      c.fillStyle = 'rgba(220,180,40,0.18)'; c.fillRect(Math.round(craneBaseX - 7), Math.round(craneTopY + 2), 14, 10);
      c.fillStyle = 'rgba(245,210,130,' + (0.08 + Math.sin(t) * 0.04) + ')'; c.fillRect(Math.round(craneBaseX - 4), Math.round(craneTopY + 4), 8, 5);
    }

    function drawBuilding(s: any, t: number) {
      c.fillStyle = 'rgba(120,115,105,0.7)'; c.fillRect(s.x - 15, ground - 8, s.w + 30, 12);
      c.fillStyle = 'rgba(0,0,0,0.06)'; c.fillRect(s.x - 15, ground + 4, s.w + 30, 4);
      c.strokeStyle = 'rgba(0,0,0,0.03)'; c.lineWidth = 0.5;
      for (var fi = s.x - 12; fi < s.x + s.w + 12; fi += 8) { c.beginPath(); c.moveTo(fi, ground - 8); c.lineTo(fi, ground + 4); c.stroke(); }
      for (var f = 0; f < s.builtFloors; f++) {
        var fy = ground - (f + 1) * s.floorH;
        var isRecent = f >= s.builtFloors - 2, isTop = f === s.builtFloors - 1;
        c.fillStyle = isRecent ? 'rgba(190,185,175,0.85)' : 'rgba(200,195,185,0.9)'; c.fillRect(s.x, fy, s.w, s.floorH - 1);
        var fSh = c.createLinearGradient(s.x, fy, s.x, fy + 4); fSh.addColorStop(0, 'rgba(0,0,0,0.08)'); fSh.addColorStop(1, 'transparent'); c.fillStyle = fSh; c.fillRect(s.x, fy, s.w, 4);
        c.fillStyle = 'rgba(0,0,0,0.08)'; c.fillRect(s.x, fy + s.floorH - 2, s.w, 2);
        var colPositions = [s.x + 5, s.x + s.w / 3, s.x + s.w * 2 / 3, s.x + s.w - 5];
        for (var ci = 0; ci < colPositions.length; ci++) {
          var cx2 = colPositions[ci];
          c.fillStyle = 'rgba(80,85,95,0.12)'; c.fillRect(Math.round(cx2 - 2), fy, 4, s.floorH);
          c.fillStyle = 'rgba(80,85,95,0.07)'; c.fillRect(Math.round(cx2 - 4), fy, 2, s.floorH); c.fillRect(Math.round(cx2 + 2), fy, 2, s.floorH);
        }
        if (!isRecent) {
          var winCols = Math.floor(s.w / 17);
          for (var wc = 0; wc < winCols; wc++) {
            var wx = s.x + 6 + wc * 17;
            var nearCol = false;
            for (var ck = 0; ck < colPositions.length; ck++) { if (Math.abs(wx + 5 - colPositions[ck]) < 6) nearCol = true; }
            if (nearCol) continue;
            c.strokeStyle = 'rgba(0,0,0,0.06)'; c.lineWidth = 0.5; c.strokeRect(wx, fy + 3, 10, s.floorH - 8);
            var lit = Math.sin(t * 0.15 + wc * 1.3 + f * 2.7) > 0.2;
            if (lit) {
              var wg = c.createLinearGradient(wx, fy + 3, wx, fy + s.floorH - 5);
              wg.addColorStop(0, 'rgba(160,195,230,0.25)'); wg.addColorStop(1, 'rgba(140,175,210,0.15)');
              c.fillStyle = wg;
            } else { c.fillStyle = 'rgba(50,65,85,0.35)'; }
            c.fillRect(wx + 1, fy + 4, 8, s.floorH - 10);
            if (lit) { c.fillStyle = 'rgba(255,255,255,0.08)'; c.fillRect(wx + 2, fy + 5, 2, s.floorH - 14); }
          }
        }
        if (isRecent && !isTop) { c.fillStyle = 'rgba(140,115,65,0.15)'; c.fillRect(s.x - 3, fy, 3, s.floorH); c.fillRect(s.x + s.w, fy, 3, s.floorH); }
      }
      if (s.builtFloors < s.maxFloors) {
        var cfY = ground - (s.builtFloors + 1) * s.floorH;
        var prog = s.buildProgress;
        c.fillStyle = 'rgba(180,175,165,0.55)'; c.fillRect(s.x, cfY, Math.round(s.w * prog), s.floorH - 1);
        c.strokeStyle = 'rgba(165,100,45,' + (0.15 + prog * 0.1) + ')'; c.lineWidth = 0.8;
        for (var rb = 0; rb < s.w; rb += 10) { if (rb / s.w < prog + 0.08) { c.beginPath(); c.moveTo(s.x + rb, cfY + 1); c.lineTo(s.x + rb, cfY + s.floorH - 1); c.stroke(); } }
        c.strokeStyle = 'rgba(165,105,55,0.05)'; c.lineWidth = 0.5;
        for (var hrb = cfY + 4; hrb < cfY + s.floorH; hrb += 5) { c.beginPath(); c.moveTo(s.x, hrb); c.lineTo(s.x + Math.round(s.w * prog), hrb); c.stroke(); }
        c.fillStyle = 'rgba(90,75,40,0.15)'; c.fillRect(Math.round(s.x + s.w * prog - 2), cfY, 3, s.floorH);
        if (hovering && prog > 0.05) {
          var pfg = c.createRadialGradient(s.x + s.w * prog, cfY + s.floorH / 2, 0, s.x + s.w * prog, cfY + s.floorH / 2, 20);
          pfg.addColorStop(0, 'rgba(245,190,80,0.06)'); pfg.addColorStop(1, 'transparent');
          c.fillStyle = pfg; c.fillRect(s.x + s.w * prog - 20, cfY - 5, 40, s.floorH + 10);
        }
        if (hovering && Math.random() > 0.9) { spawnSparks(s.x + Math.round(s.w * prog), cfY + s.floorH / 2, 2); }
      }
      var scaffH = Math.min((s.builtFloors + 2) * s.floorH, s.maxFloors * s.floorH);
      var scaffSide = s.side === 'left' ? -1 : 1;
      var scaffOff = W < 600 ? 12 : 20;
      var scaffW2 = W < 600 ? 8 : 14;
      var scaffX = scaffSide === -1 ? s.x - scaffOff : s.x + s.w + 4;
      for (var sly = ground; sly > ground - scaffH; sly -= s.floorH * 0.8) {
        c.strokeStyle = 'rgba(200,160,30,0.35)'; c.lineWidth = W < 600 ? 1 : 1.5;
        c.beginPath(); c.moveTo(scaffX, sly); c.lineTo(scaffX, sly - s.floorH * 0.8); c.stroke();
        c.beginPath(); c.moveTo(scaffX + scaffW2 * scaffSide, sly); c.lineTo(scaffX + scaffW2 * scaffSide, sly - s.floorH * 0.8); c.stroke();
        c.strokeStyle = 'rgba(200,160,30,0.25)'; c.lineWidth = W < 600 ? 0.5 : 1;
        c.beginPath(); c.moveTo(scaffX, sly); c.lineTo(scaffX + scaffW2 * scaffSide, sly); c.stroke();
        c.fillStyle = 'rgba(100,80,40,0.06)'; c.fillRect(Math.min(scaffX, scaffX + scaffW2 * scaffSide), sly - 1, Math.abs(scaffW2), 2);
        if (Math.round(sly) % Math.round(s.floorH * 1.6) < s.floorH) { c.strokeStyle = 'rgba(220,180,40,0.06)'; c.lineWidth = 0.5; c.beginPath(); c.moveTo(scaffX, sly); c.lineTo(scaffX + scaffW2 * scaffSide, sly - s.floorH * 0.8); c.stroke(); }
        c.fillStyle = 'rgba(180,150,50,0.05)'; c.fillRect(Math.min(scaffX, scaffX + scaffW2 * scaffSide), Math.round(sly - s.floorH * 0.8), Math.abs(scaffW2), 2);
      }
      if (W >= 600) {
        var matX = s.side === 'left' ? s.x + s.w + 55 : s.x - 65;
        for (var mi = 0; mi < 5; mi++) { c.fillStyle = 'rgba(140,90,45,0.12)'; c.fillRect(matX, ground - 3 - mi * 2, 35, 2); }
        for (var bi = 0; bi < 3; bi++) { for (var bj = 0; bj < 4; bj++) { c.fillStyle = 'rgba(55,60,70,' + (0.15 + bj * 0.03) + ')'; c.fillRect(matX + 38 + bi * 7, ground - 3 - bj * 5, 6, 4); } }
      }
    }

    function drawProgressBar(s: any, t: number) {
      var totalProg = (s.builtFloors + s.buildProgress) / s.maxFloors;
      var isS = W < 600;
      var barX = s.x, barY = ground + (isS ? 14 : 20), barW = s.w, barH = isS ? 3 : 5;
      c.fillStyle = 'rgba(0,0,0,0.06)'; c.fillRect(barX, barY, barW, barH);
      c.fillStyle = totalProg >= 1 ? 'rgba(34,197,94,0.6)' : 'rgba(79,70,229,' + (0.4 + Math.sin(t * 2) * 0.08) + ')';
      c.fillRect(barX, barY, Math.round(barW * totalProg), barH);
      c.strokeStyle = 'rgba(0,0,0,0.06)'; c.lineWidth = 0.5; c.strokeRect(barX, barY, barW, barH);
      c.font = 'bold ' + (isS ? 7 : 9) + 'px "JetBrains Mono",monospace'; c.textAlign = 'center';
      c.fillStyle = 'rgba(30,41,59,0.45)'; c.fillText(Math.round(totalProg * 100) + '%', s.x + s.w / 2, barY + (isS ? 12 : 16));
      c.font = (isS ? 5 : 7) + 'px "JetBrains Mono",monospace'; c.fillStyle = 'rgba(30,41,59,0.3)';
      c.fillText(s.label + ' — ' + s.sub, s.x + s.w / 2, barY + (isS ? 20 : 27));
      if (totalProg >= 1) {
        var flagX = s.x + s.w / 2, flagY = ground - s.maxFloors * s.floorH - 8;
        var fw = isS ? 20 : 28, fh = isS ? 4 : 6;
        c.strokeStyle = 'rgba(30,41,59,0.3)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(flagX, flagY); c.lineTo(flagX, flagY - (isS ? 28 : 40)); c.stroke();
        c.fillStyle = 'rgba(0,150,57,0.5)'; c.fillRect(flagX + 2, flagY - (isS ? 28 : 40), fw, fh);
        c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(flagX + 2, flagY - (isS ? 28 : 40) + fh, fw, fh);
        c.fillStyle = 'rgba(0,0,0,0.3)'; c.fillRect(flagX + 2, flagY - (isS ? 28 : 40) + fh * 2, fw, fh);
        c.fillStyle = 'rgba(255,0,0,0.4)'; c.fillRect(flagX - 3, flagY - (isS ? 28 : 40), 5, fh * 3);
      }
    }

    let rafId: number;
    function draw(t: number) {
      rafId = requestAnimationFrame(draw); t *= 0.001;
      smx += (mx - smx) * 0.06; smy += (my - smy) * 0.06;
      hovering = mx > 0;
      c.clearRect(0, 0, W, H);
      var sg = c.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.55);
      sg.addColorStop(0, '#f0f2f8'); sg.addColorStop(0.4, '#f5f6fa'); sg.addColorStop(1, '#eef0f5');
      c.fillStyle = sg; c.fillRect(0, 0, W, H);
      c.strokeStyle = 'rgba(79,70,229,0.03)'; c.lineWidth = 0.5;
      for (var gxi = 0; gxi < W; gxi += 80) { c.beginPath(); c.moveTo(gxi, 0); c.lineTo(gxi, H); c.stroke(); }
      for (var gyi = 0; gyi < H; gyi += 80) { c.beginPath(); c.moveTo(0, gyi); c.lineTo(W, gyi); c.stroke(); }
      if (hovering) { var cg = c.createRadialGradient(Math.round(smx), Math.round(smy), 0, Math.round(smx), Math.round(smy), 280); cg.addColorStop(0, 'rgba(79,70,229,0.04)'); cg.addColorStop(1, 'transparent'); c.fillStyle = cg; c.fillRect(0, 0, W, H); }
      var gg = c.createLinearGradient(0, ground, 0, H); gg.addColorStop(0, 'rgba(220,218,212,0.6)'); gg.addColorStop(0.15, 'rgba(210,208,200,0.5)'); gg.addColorStop(1, 'rgba(200,198,190,0.4)');
      c.fillStyle = gg; c.fillRect(0, ground, W, H - ground);
      c.strokeStyle = 'rgba(0,0,0,0.06)'; c.lineWidth = 1; c.beginPath(); c.moveTo(0, ground); c.lineTo(W, ground); c.stroke();
      for (var si2 = 0; si2 < sites.length; si2++) {
        var s = sites[si2];
        if (hovering) {
          var speedMult = Math.max(0.12, 1 - smy / H);
          s.buildProgress += 0.002 * speedMult;
          if (s.buildProgress >= 1) { if (s.builtFloors < s.maxFloors) { s.builtFloors++; s.buildProgress = 0; spawnSparks(s.x + s.w / 2, ground - s.builtFloors * s.floorH, 15); } }
        }
        drawBuilding(s, t); drawCrane(s, t); drawProgressBar(s, t);
      }
      for (var wi = 0; wi < workers.length; wi++) {
        var w = workers[wi];
        var s2 = sites[w.siteIdx];
        w.x += w.dir * w.speed * (hovering ? 1.5 : 0.4);
        if (w.x < s2.x + 5) w.dir = 1;
        if (w.x > s2.x + s2.w - 5) w.dir = -1;
        drawWorker(w.x, ground, w.type, w.hatColor, t, w.phase);
      }
      if (W >= 500) {
        for (var vi = 0; vi < vehicles.length; vi++) {
          var v = vehicles[vi];
          v.timer -= 0.016;
          if (v.timer <= 0 && !v.active) { v.active = true; v.x = v.speed > 0 ? -120 : W + 120; }
          if (!v.active) continue;
          v.x += v.speed * (hovering ? 1.5 : 0.25);
          if ((v.speed > 0 && v.x > W + 140) || (v.speed < 0 && v.x < -140)) { v.active = false; v.timer = 4 + Math.random() * 6; v.x = v.speed > 0 ? -120 : W + 120; }
          var vy = v.y;
          if (v.type === 'truck') {
            c.fillStyle = 'rgba(50,60,80,0.25)'; c.fillRect(Math.round(v.x), Math.round(vy - 15), 50, 15);
            c.fillStyle = 'rgba(55,65,85,0.3)'; c.fillRect(Math.round(v.x + 50), Math.round(vy - 12), 18, 12);
            c.fillStyle = 'rgba(100,140,200,0.06)'; c.fillRect(Math.round(v.x + 53), Math.round(vy - 10), 12, 6);
            c.fillStyle = 'rgba(20,25,35,0.5)';
            c.beginPath(); c.arc(Math.round(v.x + 12), vy, 4, 0, Math.PI * 2); c.fill();
            c.beginPath(); c.arc(Math.round(v.x + 38), vy, 4, 0, Math.PI * 2); c.fill();
            c.beginPath(); c.arc(Math.round(v.x + 58), vy, 3.5, 0, Math.PI * 2); c.fill();
            c.fillStyle = 'rgba(245,210,130,0.18)'; c.fillRect(Math.round(v.x + 66), Math.round(vy - 9), 3, 4);
            c.fillStyle = 'rgba(100,110,130,0.12)';
            for (var li = 0; li < 4; li++) { c.fillRect(Math.round(v.x + 5), Math.round(vy - 16 - li * 2), 42, 1.5); }
          } else {
            c.fillStyle = 'rgba(50,60,80,0.2)'; c.fillRect(Math.round(v.x), Math.round(vy - 12), 40, 12);
            c.strokeStyle = 'rgba(60,70,90,0.2)'; c.lineWidth = 2;
            c.beginPath(); c.ellipse(Math.round(v.x + 20), Math.round(vy - 18), 16, 12, 0, 0, Math.PI * 2); c.stroke();
            c.fillStyle = 'rgba(45,55,75,0.15)'; c.beginPath(); c.ellipse(Math.round(v.x + 20), Math.round(vy - 18), 15, 11, 0, 0, Math.PI * 2); c.fill();
            c.strokeStyle = 'rgba(80,90,110,0.08)'; c.lineWidth = 0.8; c.beginPath();
            for (var da = 0; da < Math.PI * 3; da += 0.25) { var dr = 11 - da * 1; if (dr < 1) break; c.lineTo(v.x + 20 + Math.cos(da + t * 2) * dr * 0.8, vy - 18 + Math.sin(da + t * 2) * dr * 0.55); }
            c.stroke();
            c.strokeStyle = 'rgba(60,70,90,0.15)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(Math.round(v.x + 35), Math.round(vy - 15)); c.lineTo(Math.round(v.x + 45), Math.round(vy - 8)); c.stroke();
            c.fillStyle = 'rgba(20,25,35,0.5)';
            c.beginPath(); c.arc(Math.round(v.x + 8), vy, 3.5, 0, Math.PI * 2); c.fill();
            c.beginPath(); c.arc(Math.round(v.x + 32), vy, 3.5, 0, Math.PI * 2); c.fill();
          }
        }
      }
      for (var spi = sparks.length - 1; spi >= 0; spi--) {
        var sp = sparks[spi];
        sp.x += sp.vx; sp.y += sp.vy; sp.vy += 0.2; sp.life -= sp.decay;
        if (sp.life <= 0) { sparks.splice(spi, 1); continue; }
        c.beginPath(); c.arc(Math.round(sp.x), Math.round(sp.y), sp.sz * sp.life, 0, Math.PI * 2);
        c.fillStyle = sp.hot ? 'rgba(255,200,80,' + sp.life * 0.85 + ')' : 'rgba(255,120,40,' + sp.life * 0.65 + ')'; c.fill();
        c.beginPath(); c.moveTo(sp.x, sp.y); c.lineTo(sp.x - sp.vx * 1.8, sp.y - sp.vy * 1.8);
        c.strokeStyle = 'rgba(255,180,60,' + sp.life * 0.2 + ')'; c.lineWidth = sp.sz * sp.life * 0.4; c.stroke();
      }
    }

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onMouseLeave = () => { mx = -1e4; my = -1e4; };
    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);
    resize();
    rafId = requestAnimationFrame(draw);

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
          {t.engineerHero.h1}
          <br className="hidden md:block" />
          {" "}{t.engineerHero.h1Line2}
        </h1>
        <p className="mt-6 text-[#64748b] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          {t.engineerHero.body}
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <PostProjectButton campaign="engineers_hero" size="md">
            {t.common.postProjectFree}
          </PostProjectButton>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(248,249,251,0.8))" }} />
    </section>
  );
}
