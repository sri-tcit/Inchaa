"use client";
import { useEffect, useRef } from "react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function ContractorHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const section = sectionRef.current;
    if (!cv || !section) return;
    const c = cv.getContext("2d")!;

    let W: number, H: number, gY: number;
    let tmx = 0.35, smx = 0.35;

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      cv!.width = Math.round(innerWidth * dpr); cv!.height = Math.round(innerHeight * dpr);
      cv!.style.width = innerWidth + 'px'; cv!.style.height = innerHeight + 'px';
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      W = innerWidth; H = innerHeight; gY = H * 0.6;
    }

    function pL() { return W * 0.08; }
    function pR() { return W * 0.92; }
    function pW() { return pR() - pL(); }

    function drawPalm(px: number, baseY: number, height: number, lean: number, trunkCol: string, frondCol: string, shadow: boolean) {
      var topX = px + lean, topY = baseY - height;
      if (shadow) { c.fillStyle = 'rgba(0,0,0,0.08)'; c.beginPath(); c.ellipse(px + height * 0.3, baseY + 2, height * 0.35, 4, 0, 0, Math.PI * 2); c.fill(); }
      c.strokeStyle = trunkCol; c.lineWidth = 6; c.lineCap = 'round';
      c.beginPath(); c.moveTo(px, baseY); c.quadraticCurveTo(px + lean * 0.3, baseY - height * 0.4, topX, topY); c.stroke();
      var segments = Math.floor(height / 8);
      for (var si = 1; si < segments; si++) {
        var t2 = si / segments, tx = px + (topX - px) * t2 * t2, ty = baseY + (topY - baseY) * t2;
        c.strokeStyle = 'rgba(0,0,0,0.08)'; c.lineWidth = 7 - t2 * 3;
        c.beginPath(); c.moveTo(tx - 3, ty); c.lineTo(tx + 3, ty); c.stroke();
      }
      c.strokeStyle = trunkCol; c.lineWidth = 3;
      c.beginPath(); c.moveTo(px + lean * 0.6, baseY - height * 0.7); c.quadraticCurveTo(topX - lean * 0.1, topY + height * 0.1, topX, topY); c.stroke();
      for (var fi = 0; fi < 10; fi++) {
        var fa = (fi / 10) * Math.PI * 2 - Math.PI * 0.3;
        var fLen = height * 0.45 + Math.sin(fi * 2.3) * height * 0.08;
        var endX = topX + Math.cos(fa) * fLen, endY = topY + Math.sin(fa) * fLen * 0.4 - fLen * 0.15;
        var midX = topX + Math.cos(fa) * fLen * 0.5, midY = topY + Math.sin(fa) * fLen * 0.2 - fLen * 0.2;
        c.strokeStyle = frondCol; c.lineWidth = 1.5; c.lineCap = 'round';
        c.beginPath(); c.moveTo(topX, topY); c.quadraticCurveTo(midX, midY, endX, endY + fLen * 0.15); c.stroke();
        for (var li = 0.2; li < 0.9; li += 0.12) {
          var lbx = topX + (endX - topX) * li, lby = topY + (endY + fLen * 0.15 - topY) * li - fLen * 0.15 * (1 - li);
          c.strokeStyle = frondCol; c.lineWidth = 0.5;
          c.beginPath(); c.moveTo(lbx, lby); c.lineTo(lbx + Math.cos(fa + 1.2) * 8, lby + 3); c.stroke();
          c.beginPath(); c.moveTo(lbx, lby); c.lineTo(lbx + Math.cos(fa - 1.2) * 8, lby + 3); c.stroke();
        }
      }
      c.fillStyle = 'rgba(80,60,20,0.4)';
      for (var ci = 0; ci < 3; ci++) { c.beginPath(); c.arc(topX + ci * 3 - 3, topY + 4 + ci * 2, 2.5, 0, Math.PI * 2); c.fill(); }
    }

    function drawBefore(t: number) {
      var L = pL(), R = pR(), PW = pW();
      var sg = c.createLinearGradient(0, 0, 0, gY);
      sg.addColorStop(0, '#22180a'); sg.addColorStop(0.2, '#2e2410'); sg.addColorStop(0.45, '#3a3018'); sg.addColorStop(0.7, '#4a3e22'); sg.addColorStop(0.9, '#5a4e2a'); sg.addColorStop(1, '#6a5c30');
      c.fillStyle = sg; c.fillRect(0, 0, W, H);
      c.fillStyle = 'rgba(255,240,200,0.03)';
      c.beginPath(); c.ellipse(W * 0.3, gY * 0.2, 120, 15, 0.1, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.ellipse(W * 0.65, gY * 0.28, 90, 10, -0.05, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.ellipse(W * 0.15, gY * 0.35, 70, 8, 0, 0, Math.PI * 2); c.fill();
      var sunX = W * 0.6, sunY = gY * 0.22;
      var sh = c.createRadialGradient(sunX, sunY, 0, sunX, sunY, W * 0.35);
      sh.addColorStop(0, 'rgba(255,230,160,0.18)'); sh.addColorStop(0.15, 'rgba(255,210,130,0.08)'); sh.addColorStop(0.4, 'rgba(220,170,80,0.03)'); sh.addColorStop(1, 'transparent');
      c.fillStyle = sh; c.fillRect(0, 0, W, gY);
      c.beginPath(); c.arc(sunX, sunY, 22, 0, Math.PI * 2); c.fillStyle = 'rgba(255,235,170,0.2)'; c.fill();
      c.beginPath(); c.arc(sunX, sunY, 12, 0, Math.PI * 2); c.fillStyle = 'rgba(255,245,200,0.12)'; c.fill();
      var gg = c.createLinearGradient(0, gY - 20, 0, H);
      gg.addColorStop(0, '#5a4e28'); gg.addColorStop(0.05, '#4a4020'); gg.addColorStop(0.15, '#3e3618'); gg.addColorStop(0.4, '#302a12'); gg.addColorStop(1, '#1a160a');
      c.fillStyle = gg; c.fillRect(0, gY - 20, W, H - gY + 20);
      c.fillStyle = 'rgba(90,78,40,0.12)'; c.beginPath(); c.ellipse(W * 0.3, gY + 40, 100, 30, 0.2, 0, Math.PI * 2); c.fill();
      c.fillStyle = 'rgba(70,60,30,0.1)'; c.beginPath(); c.ellipse(W * 0.7, gY + 20, 80, 25, -0.1, 0, Math.PI * 2); c.fill();
      for (var di = 0; di < 400; di++) {
        var dx = ((di * 137.5 + 23) % W), dy = gY + ((di * 73.1 + 11) % (H - gY));
        c.fillStyle = 'rgba(' + (55 + di % 20) + ',' + (48 + di % 15) + ',' + (25 + di % 10) + ',0.12)'; c.fillRect(dx, dy, 1, 1);
      }
      var roadY = H * 0.87, roadH = H * 0.13;
      c.fillStyle = 'rgba(40,36,22,0.55)'; c.fillRect(0, roadY, W, roadH);
      c.fillStyle = 'rgba(55,50,30,0.3)'; c.fillRect(0, roadY, W, 2);
      c.strokeStyle = 'rgba(80,72,40,0.18)'; c.lineWidth = 1.5; c.setLineDash([25, 18]);
      c.beginPath(); c.moveTo(0, roadY + roadH * 0.5); c.lineTo(W, roadY + roadH * 0.5); c.stroke(); c.setLineDash([]);
      var wallTop = gY - 45, wallBot = gY + 5, wallH2 = wallBot - wallTop;
      c.fillStyle = '#3a3420'; c.fillRect(L, wallTop, PW, wallH2);
      var ws = c.createLinearGradient(0, wallTop, 0, wallTop + 8); ws.addColorStop(0, 'rgba(0,0,0,0.15)'); ws.addColorStop(1, 'transparent'); c.fillStyle = ws; c.fillRect(L, wallTop, PW, 8);
      c.strokeStyle = 'rgba(0,0,0,0.06)'; c.lineWidth = 0.5;
      for (var bx = L; bx < R; bx += 20) { c.beginPath(); c.moveTo(bx, wallTop); c.lineTo(bx, wallBot); c.stroke(); }
      for (var by = wallTop; by < wallBot; by += 10) { c.beginPath(); c.moveTo(L, by); c.lineTo(R, by); c.stroke(); }
      c.fillStyle = '#44402a'; c.fillRect(L - 2, wallTop - 5, PW + 4, 7);
      c.fillStyle = 'rgba(0,0,0,0.1)'; c.fillRect(L - 2, wallTop - 5, PW + 4, 2);
      c.fillStyle = '#302a18';
      c.beginPath(); c.moveTo(L, wallTop - 5); c.lineTo(L - 45, gY - 18); c.lineTo(L - 45, gY + 15); c.lineTo(L, wallBot); c.closePath(); c.fill();
      c.beginPath(); c.moveTo(R, wallTop - 5); c.lineTo(R + 45, gY - 18); c.lineTo(R + 45, gY + 15); c.lineTo(R, wallBot); c.closePath(); c.fill();
      var gW = PW * 0.12, gX = L + PW * 0.5 - gW / 2;
      c.fillStyle = '#4a4020'; c.fillRect(gX, wallTop, gW, wallH2);
      c.fillStyle = '#3a3420'; c.fillRect(gX - 6, wallTop - 15, 8, wallH2 + 15); c.fillRect(gX + gW - 2, wallTop - 15, 8, wallH2 + 15);
      c.fillStyle = '#504830'; c.fillRect(gX - 8, wallTop - 20, 12, 7); c.fillRect(gX + gW - 4, wallTop - 20, 12, 7);
      var signX = L + 25, signY = wallTop + 10;
      c.fillStyle = 'rgba(80,80,80,0.3)'; c.fillRect(signX + 8, signY, 3, 50); c.fillRect(signX + 60, signY, 3, 50);
      c.fillStyle = 'rgba(240,238,230,0.18)'; c.fillRect(signX, signY - 35, 70, 38);
      c.strokeStyle = 'rgba(200,195,185,0.12)'; c.lineWidth = 1; c.strokeRect(signX, signY - 35, 70, 38);
      c.fillStyle = 'rgba(40,60,100,0.22)'; c.font = 'bold 8px "JetBrains Mono",monospace'; c.textAlign = 'left';
      c.fillText('ADM', signX + 6, signY - 22); c.font = '6px "JetBrains Mono",monospace'; c.fillStyle = 'rgba(40,60,100,0.15)';
      c.fillText('PLOT NO. 247', signX + 6, signY - 13); c.fillText('ZONE: RE-01', signX + 6, signY - 5);
      var ubX = R - 55;
      c.fillStyle = 'rgba(55,58,48,0.4)'; c.fillRect(ubX, gY - 5, 28, 18);
      c.strokeStyle = 'rgba(70,72,60,0.2)'; c.lineWidth = 0.8; c.strokeRect(ubX, gY - 5, 28, 18);
      var pegData = [[L + PW * 0.18, gY + 12], [L + PW * 0.42, gY + 22], [L + PW * 0.68, gY + 8], [L + PW * 0.88, gY + 28]];
      for (var pi = 0; pi < pegData.length; pi++) {
        var pg = pegData[pi];
        c.fillStyle = 'rgba(90,80,50,0.35)'; c.fillRect(pg[0] - 1, pg[1] - 14, 2.5, 16);
        c.fillStyle = 'rgba(245,140,30,0.25)';
        c.beginPath(); c.moveTo(pg[0] + 1.5, pg[1] - 12); c.lineTo(pg[0] + 14 + Math.sin(t * 1.8 + pi) * 4, pg[1] - 14 + Math.sin(t * 1.3 + pi) * 2); c.lineTo(pg[0] + 12 + Math.sin(t * 1.8 + pi) * 4, pg[1] - 9 + Math.sin(t * 1.3 + pi) * 2); c.closePath(); c.fill();
      }
      c.strokeStyle = 'rgba(48,42,22,0.2)'; c.lineWidth = 3;
      c.beginPath(); c.moveTo(gX + gW * 0.4, gY + 5); c.quadraticCurveTo(L + PW * 0.38, gY + 35, L + PW * 0.32, roadY - 5); c.stroke();
      c.beginPath(); c.moveTo(gX + gW * 0.6, gY + 5); c.quadraticCurveTo(L + PW * 0.4, gY + 38, L + PW * 0.35, roadY - 5); c.stroke();
      var bushes: number[][] = [[L + PW * 0.22, gY + 3, 14, 7], [L + PW * 0.72, gY - 3, 12, 6], [L + PW * 0.55, gY + 18, 10, 5]];
      for (var bi = 0; bi < bushes.length; bi++) {
        var b = bushes[bi];
        c.fillStyle = 'rgba(55,72,32,0.12)'; c.beginPath(); c.ellipse(b[0], b[1], b[2], b[3], 0, 0, Math.PI * 2); c.fill();
      }
      c.fillStyle = 'rgba(60,52,28,0.2)'; c.beginPath(); c.ellipse(L + PW * 0.6, gY + 32, 35, 12, 0.1, 0, Math.PI * 2); c.fill();
      drawPalm(L + PW * 0.73, gY - 2, 85, 8, 'rgba(85,65,30,0.35)', 'rgba(50,78,30,0.18)', true);
      drawPalm(R + 20, gY + 10, 60, -5, 'rgba(75,58,28,0.25)', 'rgba(45,70,28,0.12)', false);
      c.fillStyle = 'rgba(50,44,25,0.45)'; c.fillRect(0, gY - 40, L - 50, 38);
      c.fillStyle = 'rgba(42,38,22,0.35)'; c.fillRect(10, gY - 85, 55, 45);
      c.fillStyle = 'rgba(50,44,25,0.45)'; c.fillRect(R + 60, gY - 35, W - R - 60, 32);
      c.fillStyle = 'rgba(60,52,30,0.18)'; c.beginPath(); c.arc(W * 0.1, gY - 70, 24, Math.PI, 0); c.fill();
      c.fillRect(W * 0.1 - 2.5, gY - 98, 5, 28); c.beginPath(); c.arc(W * 0.1, gY - 98, 4, 0, Math.PI * 2); c.fill();
      c.strokeStyle = 'rgba(200,180,120,0.02)'; c.lineWidth = 1.5;
      for (var hi = 0; hi < 5; hi++) {
        c.beginPath();
        for (var hx = 0; hx < W; hx += 3) { c.lineTo(hx, gY - 2 + Math.sin(hx * 0.012 + t * 1.5 + hi * 0.8) * 4 + hi * 7); }
        c.stroke();
      }
    }

    function drawAfter(t: number) {
      var L = pL(), R = pR(), PW = pW();
      var sg = c.createLinearGradient(0, 0, 0, gY);
      sg.addColorStop(0, '#050e1c'); sg.addColorStop(0.25, '#0a1830'); sg.addColorStop(0.5, '#10203e'); sg.addColorStop(0.75, '#182848'); sg.addColorStop(1, '#1e3050');
      c.fillStyle = sg; c.fillRect(0, 0, W, H);
      for (var si = 0; si < 130; si++) {
        var sx = ((si * 191.7 + 7) % W), sy = ((si * 83.3 + 13) % (gY * 0.6));
        var sb = 0.08 + Math.sin(t * 0.3 + si * 0.7) * 0.15, ss = si % 7 === 0 ? 1.2 : si % 3 === 0 ? 0.8 : 0.4;
        c.beginPath(); c.arc(sx, sy, ss, 0, Math.PI * 2); c.fillStyle = 'rgba(200,215,245,' + sb + ')'; c.fill();
      }
      var moonX = W * 0.82, moonY = gY * 0.13;
      var mh = c.createRadialGradient(moonX, moonY, 0, moonX, moonY, 70);
      mh.addColorStop(0, 'rgba(210,220,240,0.12)'); mh.addColorStop(0.2, 'rgba(180,195,225,0.05)'); mh.addColorStop(0.5, 'rgba(140,160,200,0.02)'); mh.addColorStop(1, 'transparent');
      c.fillStyle = mh; c.fillRect(moonX - 70, moonY - 70, 140, 140);
      c.beginPath(); c.arc(moonX, moonY, 14, 0, Math.PI * 2); c.fillStyle = 'rgba(220,230,245,0.08)'; c.fill();
      var gg = c.createLinearGradient(0, gY - 15, 0, H);
      gg.addColorStop(0, '#1e2a3a'); gg.addColorStop(0.08, '#182435'); gg.addColorStop(0.3, '#121e2c'); gg.addColorStop(1, '#0a1220');
      c.fillStyle = gg; c.fillRect(0, gY - 15, W, H - gY + 15);
      var roadY = H * 0.87;
      c.fillStyle = 'rgba(18,24,35,0.55)'; c.fillRect(0, roadY, W, H - roadY);
      c.strokeStyle = 'rgba(40,52,68,0.15)'; c.lineWidth = 1.5; c.setLineDash([25, 18]);
      c.beginPath(); c.moveTo(0, roadY + (H - roadY) * 0.5); c.lineTo(W, roadY + (H - roadY) * 0.5); c.stroke(); c.setLineDash([]);
      c.strokeStyle = 'rgba(55,65,85,0.2)'; c.lineWidth = 2.5;
      c.beginPath(); c.moveTo(L - 18, roadY); c.lineTo(L - 18, roadY - 45); c.stroke();
      c.beginPath(); c.moveTo(L - 18, roadY - 45); c.lineTo(L - 8, roadY - 48); c.stroke();
      c.beginPath(); c.arc(L - 8, roadY - 50, 3.5, 0, Math.PI * 2); c.fillStyle = 'rgba(245,215,150,0.3)'; c.fill();
      var wallTop = gY - 48, wallBot = gY + 5;
      c.fillStyle = '#1c2838'; c.fillRect(L, wallTop, PW, wallBot - wallTop);
      c.strokeStyle = 'rgba(255,255,255,0.01)'; c.lineWidth = 0.3;
      for (var wty = wallTop; wty < wallBot; wty += 6) { c.beginPath(); c.moveTo(L, wty); c.lineTo(R, wty); c.stroke(); }
      c.fillStyle = '#222e3e'; c.fillRect(L - 3, wallTop - 5, PW + 6, 7);
      c.fillStyle = '#162230';
      c.beginPath(); c.moveTo(L, wallTop - 5); c.lineTo(L - 35, gY - 22); c.lineTo(L - 35, gY + 12); c.lineTo(L, wallBot); c.closePath(); c.fill();
      c.beginPath(); c.moveTo(R, wallTop - 5); c.lineTo(R + 35, gY - 22); c.lineTo(R + 35, gY + 12); c.lineTo(R, wallBot); c.closePath(); c.fill();
      var gW2 = PW * 0.12, gX2 = L + PW * 0.5 - gW2 / 2;
      c.fillStyle = '#0e1822'; c.fillRect(gX2, wallTop, gW2, wallBot - wallTop);
      c.strokeStyle = 'rgba(99,102,241,0.04)'; c.lineWidth = 0.4;
      for (var gs = gX2 + 3; gs < gX2 + gW2 - 3; gs += 4.5) { c.beginPath(); c.moveTo(gs, wallTop + 3); c.lineTo(gs, wallBot - 3); c.stroke(); }
      c.fillStyle = '#1e2a3a'; c.fillRect(gX2 - 9, wallTop - 18, 11, wallBot - wallTop + 18); c.fillRect(gX2 + gW2 - 2, wallTop - 18, 11, wallBot - wallTop + 18);
      for (var gli = 0; gli < 2; gli++) {
        var glx2 = gli === 0 ? gX2 - 3 : gX2 + gW2 + 3;
        c.beginPath(); c.arc(glx2, wallTop - 20, 3.5, 0, Math.PI * 2); c.fillStyle = 'rgba(245,215,150,0.35)'; c.fill();
        var plg = c.createRadialGradient(glx2, wallTop - 20, 0, glx2, wallTop - 20, 25);
        plg.addColorStop(0, 'rgba(245,215,150,0.1)'); plg.addColorStop(1, 'transparent'); c.fillStyle = plg; c.fillRect(glx2 - 25, wallTop - 45, 50, 50);
      }
      var vL = L + PW * 0.08, vR2 = R - PW * 0.07, vW = vR2 - vL;
      var floorY = gY - 38, gfH = H * 0.19, ffH = H * 0.15, roofY = floorY - gfH - ffH;
      c.fillStyle = 'rgba(0,0,0,0.12)'; c.fillRect(vL + 6, floorY + 2, vW, gfH);
      c.fillStyle = '#131d2c'; c.fillRect(vL, floorY - gfH, vW, gfH);
      var stW = vW * 0.3;
      c.fillStyle = '#1a2535'; c.fillRect(vL, floorY - gfH, stW, gfH);
      for (var sty = floorY - gfH; sty < floorY; sty += 7) {
        c.strokeStyle = 'rgba(255,255,255,0.02)'; c.lineWidth = 0.3;
        c.beginPath(); c.moveTo(vL, sty); c.lineTo(vL + stW, sty); c.stroke();
        var offset = (sty % 14 === 0) ? 8 : 0;
        for (var stx = vL + offset; stx < vL + stW; stx += 16) { c.beginPath(); c.moveTo(stx, sty); c.lineTo(stx, sty + 7); c.stroke(); }
      }
      var cant = vW * 0.05;
      c.fillStyle = '#151f30'; c.fillRect(vL - cant, floorY - gfH - ffH, vW + cant * 2, ffH);
      c.fillStyle = '#1c2840'; c.fillRect(vL - cant - 4, roofY - 7, vW + cant * 2 + 8, 9);
      var glL = vL + stW + 12, glW = vW * 0.36, glH = gfH * 0.72;
      c.fillStyle = '#080e18'; c.fillRect(glL, floorY - gfH + 12, glW, glH);
      var ig = c.createLinearGradient(glL, floorY - gfH + 12, glL, floorY - gfH + 12 + glH);
      ig.addColorStop(0, 'rgba(245,215,145,0.07)'); ig.addColorStop(0.4, 'rgba(245,195,115,0.05)'); ig.addColorStop(0.8, 'rgba(240,175,90,0.03)'); ig.addColorStop(1, 'rgba(235,160,75,0.02)');
      c.fillStyle = ig; c.fillRect(glL + 2, floorY - gfH + 14, glW - 4, glH - 4);
      c.strokeStyle = 'rgba(80,100,130,0.08)'; c.lineWidth = 1;
      for (var gmi = 1; gmi < 4; gmi++) { c.beginPath(); c.moveTo(glL + gmi * (glW / 4), floorY - gfH + 12); c.lineTo(glL + gmi * (glW / 4), floorY - gfH + 12 + glH); c.stroke(); }
      c.beginPath(); c.moveTo(glL, floorY - gfH + 12 + glH * 0.5); c.lineTo(glL + glW, floorY - gfH + 12 + glH * 0.5); c.stroke();
      var eX = vL + stW - 4, eW = vW * 0.1, eH = gfH * 0.88;
      c.fillStyle = '#060a14'; c.fillRect(eX, floorY - eH, eW, eH);
      var els = c.createRadialGradient(eX + eW / 2, floorY, 0, eX + eW / 2, floorY, 55);
      els.addColorStop(0, 'rgba(245,215,150,0.07)'); els.addColorStop(1, 'transparent'); c.fillStyle = els; c.fillRect(eX - 30, floorY - 3, eW + 60, 58);
      var mX = vL + vW * 0.26, mW2 = vW * 0.24;
      c.fillStyle = 'rgba(99,102,241,0.03)'; c.fillRect(mX, floorY - gfH - ffH + 12, mW2, ffH - 24);
      c.strokeStyle = 'rgba(99,102,241,0.05)'; c.lineWidth = 0.4;
      for (var mx2 = mX; mx2 < mX + mW2; mx2 += 7) { for (var my2 = floorY - gfH - ffH + 14; my2 < floorY - gfH - 14; my2 += 7) { c.strokeRect(mx2, my2, 5, 5); } }
      var garX = vR2 - vW * 0.2, garW2 = vW * 0.17, garH2 = gfH * 0.55;
      c.fillStyle = '#0a1220'; c.fillRect(garX, floorY - garH2, garW2, garH2);
      var poolX = vL - PW * 0.02, poolW2 = vW * 0.38, poolH2 = 32, poolY2 = floorY + 8;
      c.fillStyle = 'rgba(18,75,115,0.22)'; c.fillRect(poolX, poolY2, poolW2, poolH2);
      c.strokeStyle = 'rgba(70,170,210,0.04)'; c.lineWidth = 0.5;
      for (var wsi = 0; wsi < 7; wsi++) { c.beginPath(); for (var wsx = poolX; wsx < poolX + poolW2; wsx += 3) { c.lineTo(wsx, poolY2 + 4 + wsi * 4 + Math.sin(wsx * 0.05 + t * 1.8 + wsi) * 1.2); } c.stroke(); }
      var carX = garX - 28, carY = floorY + 18;
      c.fillStyle = 'rgba(12,18,28,0.65)'; c.fillRect(carX, carY - 14, 52, 14);
      c.fillStyle = 'rgba(10,14,22,0.55)';
      c.beginPath(); c.moveTo(carX + 9, carY - 14); c.lineTo(carX + 14, carY - 26); c.lineTo(carX + 40, carY - 26); c.lineTo(carX + 46, carY - 14); c.closePath(); c.fill();
      c.fillStyle = 'rgba(35,55,85,0.08)';
      c.beginPath(); c.moveTo(carX + 15, carY - 15); c.lineTo(carX + 18, carY - 24); c.lineTo(carX + 38, carY - 24); c.lineTo(carX + 41, carY - 15); c.closePath(); c.fill();
      c.fillStyle = 'rgba(6,8,14,0.6)';
      c.beginPath(); c.arc(carX + 11, carY, 4.5, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(carX + 40, carY, 4.5, 0, Math.PI * 2); c.fill();
      c.fillStyle = 'rgba(245,230,180,0.18)'; c.fillRect(carX + 50, carY - 10, 3, 4);
      drawPalm(L + 22, gY - 38, 90, 6, 'rgba(65,50,25,0.4)', 'rgba(25,60,25,0.22)', true);
      drawPalm(R - 18, gY - 32, 75, -5, 'rgba(60,46,22,0.35)', 'rgba(22,55,22,0.2)', true);
      drawPalm(vL - 22, floorY - 8, 80, 4, 'rgba(58,44,20,0.35)', 'rgba(22,52,22,0.2)', true);
      drawPalm(vR2 + 28, floorY - 5, 70, -6, 'rgba(55,42,20,0.3)', 'rgba(20,50,20,0.18)', true);
      c.fillStyle = 'rgba(16,45,20,0.18)';
      c.beginPath(); c.ellipse(vL - 12, floorY + 10, 48, 14, 0, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.ellipse(vR2 + 18, floorY + 6, 42, 12, 0, 0, Math.PI * 2); c.fill();
      for (var shi = 0; shi < 12; shi++) {
        var shx = vL + 12 + shi * (vW - 24) / 11;
        if (Math.abs(shx - (eX + eW / 2)) < 22 || Math.abs(shx - (garX + garW2 / 2)) < 28) continue;
        c.fillStyle = 'rgba(18,48,22,0.2)'; c.beginPath(); c.ellipse(shx, floorY + 3, 7, 4, 0, 0, Math.PI * 2); c.fill();
      }
      var bollards2 = [[garX + garW2 + 14, floorY + 10], [garX + garW2 + 14, floorY + 28], [gX2 - 10, gY - 18], [gX2 + gW2 + 10, gY - 18], [poolX - 7, poolY2 + 8], [poolX + poolW2 + 7, poolY2 + 8]];
      for (var bli = 0; bli < bollards2.length; bli++) {
        var bl = bollards2[bli];
        c.beginPath(); c.arc(bl[0], bl[1], 2, 0, Math.PI * 2); c.fillStyle = 'rgba(245,215,150,0.25)'; c.fill();
        var blg = c.createRadialGradient(bl[0], bl[1], 0, bl[0], bl[1], 16);
        blg.addColorStop(0, 'rgba(245,215,150,0.06)'); blg.addColorStop(1, 'transparent'); c.fillStyle = blg; c.fillRect(bl[0] - 16, bl[1] - 16, 32, 32);
      }
      c.fillStyle = 'rgba(14,20,32,0.6)'; c.fillRect(0, gY - 55, L - 30, 48); c.fillRect(5, gY - 95, 48, 40);
      c.fillStyle = 'rgba(14,20,32,0.6)'; c.fillRect(R + 35, gY - 50, W - R - 35, 42);
      c.fillStyle = 'rgba(16,24,40,0.3)'; c.beginPath(); c.arc(W * 0.1, gY - 70, 26, Math.PI, 0); c.fill();
      c.fillRect(W * 0.1 - 2.5, gY - 100, 5, 30); c.beginPath(); c.arc(W * 0.1, gY - 100, 4.5, 0, Math.PI * 2); c.fill();
    }

    let rafId: number;
    function draw(t: number) {
      rafId = requestAnimationFrame(draw); t *= 0.001;
      smx += (tmx - smx) * 0.06;
      var split = Math.round(smx * W);
      c.clearRect(0, 0, W, H);
      c.save(); drawAfter(t); c.restore();
      c.save(); c.beginPath(); c.rect(0, 0, split, H); c.clip(); drawBefore(t); c.restore();
      c.strokeStyle = 'rgba(255,255,255,0.3)'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(split, 0); c.lineTo(split, H); c.stroke();
      var dg = c.createLinearGradient(split - 40, 0, split + 40, 0);
      dg.addColorStop(0, 'transparent'); dg.addColorStop(0.5, 'rgba(255,255,255,0.03)'); dg.addColorStop(1, 'transparent');
      c.fillStyle = dg; c.fillRect(split - 40, 0, 80, H);
      c.beginPath(); c.arc(split, H * 0.5, 18, 0, Math.PI * 2); c.fillStyle = 'rgba(8,12,22,0.8)'; c.fill();
      c.strokeStyle = 'rgba(255,255,255,0.3)'; c.lineWidth = 1.5; c.stroke();
      c.strokeStyle = 'rgba(255,255,255,0.5)'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(split - 5, H * 0.5 - 4); c.lineTo(split - 9, H * 0.5); c.lineTo(split - 5, H * 0.5 + 4); c.stroke();
      c.beginPath(); c.moveTo(split + 5, H * 0.5 - 4); c.lineTo(split + 9, H * 0.5); c.lineTo(split + 5, H * 0.5 + 4); c.stroke();
      c.textAlign = 'center'; c.font = 'bold 11px "JetBrains Mono",monospace';
      if (split > 100) { c.fillStyle = 'rgba(200,170,100,0.35)'; c.fillText('BEFORE', split / 2, H - 48); }
      if (W - split > 100) { c.fillStyle = 'rgba(129,140,248,0.35)'; c.fillText('AFTER', split + (W - split) / 2, H - 48); }
    }

    const onMouseMove = (e: MouseEvent) => { tmx = e.clientX / innerWidth; };
    section.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resize);
    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      section.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center" style={{ cursor: 'col-resize' }}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-white font-bold leading-[1.08] tracking-tight text-[28px] md:text-[40px] lg:text-[48px]">
          Find Trusted Contractors
          <br className="hidden md:block" />
          {" "}in the UAE
        </h1>
        <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          A great contractor builds trust. A poor one builds problems. Inchaa connects
          you with reliable contractors across the UAE — whether you're renovating a villa
          or building from the ground up.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <PostProjectButton campaign="contractors_hero" size="md" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }} />
    </section>
  );
}
