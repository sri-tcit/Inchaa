"use client";
import { useEffect, useRef } from "react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function ConsultantHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d")!;

    let mx = -1000, my = -1000, smx = -1000, smy = -1000;
    let elements: any[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      generateBlueprint();
    }

    function generateBlueprint() {
      elements = [];
      const w = canvas!.width, h = canvas!.height;
      const gs = 36;
      for (let x = 0; x < w; x += gs) elements.push({type:'vline',x,y1:0,y2:h,w:0.3,major:false});
      for (let y = 0; y < h; y += gs) elements.push({type:'hline',y,x1:0,x2:w,w:0.3,major:false});
      const mg = 180;
      for (let x = 0; x < w; x += mg) elements.push({type:'vline',x,y1:0,y2:h,w:1,major:true});
      for (let y = 0; y < h; y += mg) elements.push({type:'hline',y,x1:0,x2:w,w:1,major:true});
      const plans = [
        {x:w*0.03,y:h*0.08,w:320,h:220,label:'TOWER A - TYPICAL FLOOR'},
        {x:w*0.72,y:h*0.06,w:250,h:200,label:'TOWER B - PODIUM'},
        {x:w*0.04,y:h*0.58,w:260,h:190,label:'VILLA TYPE C'},
        {x:w*0.68,y:h*0.52,w:340,h:260,label:'COMMERCIAL BLOCK'},
        {x:w*0.35,y:h*0.15,w:130,h:100,label:'CORE'},
        {x:w*0.55,y:h*0.7,w:140,h:110,label:'SUBSTATION'},
        {x:w*0.2,y:h*0.75,w:180,h:130,label:'PARKING STRUCT.'},
        {x:w*0.82,y:h*0.4,w:160,h:200,label:'SERVICE BLOCK'},
      ] as any[];
      for (const p of plans) {
        elements.push({type:'rect',x:p.x,y:p.y,w:p.w,h:p.h,lw:2,color:'wall'});
        const numV = 1 + Math.floor(Math.random()*3);
        const numH = 1 + Math.floor(Math.random()*3);
        for (let i = 0; i < numV; i++) {
          const rx = p.x + p.w * (0.15 + (i+1)/(numV+1)*0.7);
          const gapY = p.y + p.h * (0.3 + Math.random()*0.4);
          elements.push({type:'seg',x1:rx,y1:p.y,x2:rx,y2:gapY-12,lw:1.2,color:'wall'});
          elements.push({type:'seg',x1:rx,y1:gapY+12,x2:rx,y2:p.y+p.h,lw:1.2,color:'wall'});
          elements.push({type:'arc',cx:rx,cy:gapY-12,r:12,sa:0,ea:Math.PI*0.5,lw:0.7,color:'detail'});
        }
        for (let i = 0; i < numH; i++) {
          const ry = p.y + p.h * (0.15 + (i+1)/(numH+1)*0.7);
          const gapX = p.x + p.w * (0.3 + Math.random()*0.4);
          elements.push({type:'seg',x1:p.x,y1:ry,x2:gapX-12,y2:ry,lw:1.2,color:'wall'});
          elements.push({type:'seg',x1:gapX+12,y1:ry,x2:p.x+p.w,y2:ry,lw:1.2,color:'wall'});
          elements.push({type:'arc',cx:gapX-12,cy:ry,r:12,sa:-Math.PI*0.5,ea:0,lw:0.7,color:'detail'});
        }
        const cs = 40;
        for (let cx2 = p.x+cs; cx2 < p.x+p.w-5; cx2 += cs) {
          for (let cy2 = p.y+cs; cy2 < p.y+p.h-5; cy2 += cs) {
            if (Math.random()>0.35) elements.push({type:'col',cx:cx2,cy:cy2,r:3});
          }
        }
        if (p.w > 150) {
          const sx = p.x + p.w*0.7 + Math.random()*p.w*0.15;
          const sy = p.y + p.h*0.1 + Math.random()*p.h*0.3;
          for (let s = 0; s < 7; s++) {
            elements.push({type:'seg',x1:sx,y1:sy+s*5,x2:sx+25,y2:sy+s*5,lw:0.6,color:'detail'});
          }
          elements.push({type:'rect',x:sx-1,y:sy-1,w:27,h:33,lw:0.6,color:'detail'});
        }
        elements.push({type:'dim',x1:p.x,y1:p.y-22,x2:p.x+p.w,y2:p.y-22,label:(p.w/10).toFixed(1)+'m'});
        elements.push({type:'dim',x1:p.x-22,y1:p.y,x2:p.x-22,y2:p.y+p.h,label:(p.h/10).toFixed(1)+'m'});
        elements.push({type:'label',x:p.x+8,y:p.y+p.h+16,text:p.label,size:9});
        [[p.x,p.y],[p.x+p.w,p.y],[p.x,p.y+p.h],[p.x+p.w,p.y+p.h]].forEach(([cx2,cy2])=>{
          elements.push({type:'cross',cx:cx2,cy:cy2,s:7});
        });
        if (Math.random() > 0.5) {
          const hx = p.x + 6, hy = p.y + 6;
          const hw = Math.min(p.w * 0.25, 60), hh = Math.min(p.h * 0.3, 50);
          for (let d = 0; d < hw + hh; d += 6) {
            const sx1 = hx + Math.min(d, hw);
            const sy1 = hy + Math.max(0, d - hw);
            const sx2 = hx + Math.max(0, d - hh);
            const sy2 = hy + Math.min(d, hh);
            elements.push({type:'seg',x1:sx1,y1:sy1,x2:sx2,y2:sy2,lw:0.3,color:'hatch'});
          }
        }
      }
      elements.push({type:'seccut',x1:w*0.08,y1:h*0.48,x2:w*0.92,y2:h*0.48,label:'A'});
      elements.push({type:'seccut',x1:w*0.42,y1:h*0.03,x2:w*0.42,y2:h*0.97,label:'B'});
      elements.push({type:'compass',cx:w-90,cy:110});
      elements.push({type:'scale',x:60,y:h-55,len:220});
      elements.push({type:'tblock',x:w-340,y:h-95,w:300,h:70});
      elements.push({type:'revcloud',x:w*0.5,y:h*0.35,w:80,h:50});
    }

    function alpha(ex: number, ey: number) {
      const dx = smx - ex, dy = smy - ey;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const ambient = 0.10;
      const boost = Math.max(0, 1 - dist / 300);
      return Math.min(1, ambient + boost * 0.8);
    }

    function segAlphaLine(x1: number, y1: number, x2: number, y2: number, callback: Function) {
      const len = Math.sqrt((x2-x1)**2+(y2-y1)**2);
      const steps = Math.max(1, Math.ceil(len / 25));
      for (let s = 0; s < steps; s++) {
        const t1 = s/steps, t2 = (s+1)/steps;
        const sx1 = x1+(x2-x1)*t1, sy1 = y1+(y2-y1)*t1;
        const sx2 = x1+(x2-x1)*t2, sy2 = y1+(y2-y1)*t2;
        const a = alpha((sx1+sx2)/2,(sy1+sy2)/2);
        if (a > 0.04) callback(sx1,sy1,sx2,sy2,a);
      }
    }

    function colorFor(type: string, a: number) {
      if (type==='wall') return `rgba(129,140,248,${a*0.75})`;
      if (type==='detail') return `rgba(99,102,241,${a*0.55})`;
      if (type==='hatch') return `rgba(99,102,241,${a*0.25})`;
      if (type==='dim') return `rgba(248,113,113,${a*0.5})`;
      return `rgba(99,102,241,${a*0.5})`;
    }

    let rafId: number;
    function draw() {
      smx += (mx-smx)*0.1;
      smy += (my-smy)*0.1;
      ctx.clearRect(0,0,canvas!.width,canvas!.height);
      if (smx > 0) {
        const g = ctx.createRadialGradient(smx,smy,0,smx,smy,340);
        g.addColorStop(0,'rgba(99,102,241,0.07)');
        g.addColorStop(0.6,'rgba(99,102,241,0.02)');
        g.addColorStop(1,'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0,0,canvas!.width,canvas!.height);
      }
      for (const el of elements) {
        if (el.type==='vline') {
          segAlphaLine(el.x,el.y1,el.x,el.y2,(sx1:number,sy1:number,sx2:number,sy2:number,a:number)=>{
            ctx.beginPath();ctx.moveTo(sx1,sy1);ctx.lineTo(sx2,sy2);
            ctx.strokeStyle = el.major ? `rgba(99,102,241,${a*0.3})` : `rgba(99,102,241,${a*0.1})`;
            ctx.lineWidth=el.w;ctx.stroke();
          });
        } else if (el.type==='hline') {
          segAlphaLine(el.x1,el.y,el.x2,el.y,(sx1:number,sy1:number,sx2:number,sy2:number,a:number)=>{
            ctx.beginPath();ctx.moveTo(sx1,sy1);ctx.lineTo(sx2,sy2);
            ctx.strokeStyle = el.major ? `rgba(99,102,241,${a*0.3})` : `rgba(99,102,241,${a*0.1})`;
            ctx.lineWidth=el.w;ctx.stroke();
          });
        } else if (el.type==='rect') {
          [[el.x,el.y,el.x+el.w,el.y],[el.x+el.w,el.y,el.x+el.w,el.y+el.h],[el.x+el.w,el.y+el.h,el.x,el.y+el.h],[el.x,el.y+el.h,el.x,el.y]].forEach(([x1,y1,x2,y2])=>{
            segAlphaLine(x1,y1,x2,y2,(sx1:number,sy1:number,sx2:number,sy2:number,a:number)=>{
              ctx.beginPath();ctx.moveTo(sx1,sy1);ctx.lineTo(sx2,sy2);
              ctx.strokeStyle=colorFor(el.color,a);ctx.lineWidth=el.lw;ctx.stroke();
            });
          });
        } else if (el.type==='seg') {
          segAlphaLine(el.x1,el.y1,el.x2,el.y2,(sx1:number,sy1:number,sx2:number,sy2:number,a:number)=>{
            ctx.beginPath();ctx.moveTo(sx1,sy1);ctx.lineTo(sx2,sy2);
            ctx.strokeStyle=colorFor(el.color,a);ctx.lineWidth=el.lw;ctx.stroke();
          });
        } else if (el.type==='arc') {
          const a = alpha(el.cx,el.cy);
          if(a>0.05){ctx.beginPath();ctx.arc(el.cx,el.cy,el.r,el.sa,el.ea);ctx.strokeStyle=colorFor(el.color,a);ctx.lineWidth=el.lw;ctx.stroke();}
        } else if (el.type==='col') {
          const a = alpha(el.cx,el.cy);
          if(a>0.05){
            ctx.beginPath();ctx.arc(el.cx,el.cy,el.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(99,102,241,${a*0.3})`;ctx.fill();
            ctx.strokeStyle=`rgba(129,140,248,${a*0.45})`;ctx.lineWidth=0.6;ctx.stroke();
          }
        } else if (el.type==='cross') {
          const a = alpha(el.cx,el.cy);
          if(a>0.06){
            ctx.beginPath();ctx.moveTo(el.cx-el.s,el.cy);ctx.lineTo(el.cx+el.s,el.cy);
            ctx.moveTo(el.cx,el.cy-el.s);ctx.lineTo(el.cx,el.cy+el.s);
            ctx.strokeStyle=`rgba(248,113,113,${a*0.5})`;ctx.lineWidth=0.8;ctx.stroke();
          }
        } else if (el.type==='dim') {
          const mx2=(el.x1+el.x2)/2, my2=(el.y1+el.y2)/2;
          const a = alpha(mx2,my2);
          if(a>0.08){
            ctx.setLineDash([4,4]);
            ctx.beginPath();ctx.moveTo(el.x1,el.y1);ctx.lineTo(el.x2,el.y2);
            ctx.strokeStyle=`rgba(248,113,113,${a*0.4})`;ctx.lineWidth=0.6;ctx.stroke();
            ctx.setLineDash([]);
            const vert=el.x1===el.x2;
            ctx.beginPath();
            if(vert){ctx.moveTo(el.x1-4,el.y1);ctx.lineTo(el.x1+4,el.y1);ctx.moveTo(el.x2-4,el.y2);ctx.lineTo(el.x2+4,el.y2);}
            else{ctx.moveTo(el.x1,el.y1-4);ctx.lineTo(el.x1,el.y1+4);ctx.moveTo(el.x2,el.y2-4);ctx.lineTo(el.x2,el.y2+4);}
            ctx.stroke();
            ctx.font='bold 8px monospace';ctx.fillStyle=`rgba(248,113,113,${a*0.55})`;ctx.textAlign='center';
            ctx.fillText(el.label,mx2+(vert?12:0),my2+(vert?0:-6));
          }
        } else if (el.type==='label') {
          const a = alpha(el.x+40,el.y);
          if(a>0.1){
            ctx.font=`bold ${el.size}px monospace`;
            ctx.fillStyle=`rgba(129,140,248,${a*0.55})`;
            ctx.textAlign='left';ctx.fillText(el.text,el.x,el.y);
          }
        } else if (el.type==='seccut') {
          segAlphaLine(el.x1,el.y1,el.x2,el.y2,(sx1:number,sy1:number,sx2:number,sy2:number,a:number)=>{
            ctx.setLineDash([14,6,3,6]);ctx.beginPath();ctx.moveTo(sx1,sy1);ctx.lineTo(sx2,sy2);
            ctx.strokeStyle=`rgba(248,113,113,${a*0.2})`;ctx.lineWidth=0.8;ctx.stroke();ctx.setLineDash([]);
          });
          for(const[ex,ey] of [[el.x1,el.y1],[el.x2,el.y2]]){
            const a=alpha(ex,ey);
            if(a>0.08){
              ctx.beginPath();ctx.arc(ex,ey,13,0,Math.PI*2);ctx.strokeStyle=`rgba(248,113,113,${a*0.35})`;ctx.lineWidth=1;ctx.stroke();
              ctx.font='bold 10px monospace';ctx.fillStyle=`rgba(248,113,113,${a*0.55})`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(el.label,ex,ey);ctx.textBaseline='alphabetic';
            }
          }
        } else if (el.type==='compass') {
          const a=alpha(el.cx,el.cy);
          if(a>0.06){
            ctx.strokeStyle=`rgba(129,140,248,${a*0.5})`;ctx.lineWidth=1;
            ctx.beginPath();ctx.arc(el.cx,el.cy,25,0,Math.PI*2);ctx.stroke();
            ctx.beginPath();ctx.moveTo(el.cx,el.cy-30);ctx.lineTo(el.cx,el.cy+20);ctx.stroke();
            ctx.beginPath();ctx.moveTo(el.cx-6,el.cy-20);ctx.lineTo(el.cx,el.cy-30);ctx.lineTo(el.cx+6,el.cy-20);
            ctx.fillStyle=`rgba(129,140,248,${a*0.5})`;ctx.fill();
            ctx.font='bold 11px monospace';ctx.textAlign='center';ctx.fillStyle=`rgba(129,140,248,${a*0.5})`;ctx.fillText('N',el.cx,el.cy-37);
          }
        } else if (el.type==='scale') {
          const a=alpha(el.x+el.len/2,el.y);
          if(a>0.06){
            ctx.strokeStyle=`rgba(129,140,248,${a*0.4})`;ctx.lineWidth=1.5;ctx.beginPath();
            ctx.moveTo(el.x,el.y);ctx.lineTo(el.x+el.len,el.y);
            ctx.moveTo(el.x,el.y-6);ctx.lineTo(el.x,el.y+6);
            ctx.moveTo(el.x+el.len,el.y-6);ctx.lineTo(el.x+el.len,el.y+6);
            ctx.moveTo(el.x+el.len/2,el.y-4);ctx.lineTo(el.x+el.len/2,el.y+4);ctx.stroke();
            ctx.font='8px monospace';ctx.fillStyle=`rgba(129,140,248,${a*0.5})`;ctx.textAlign='center';
            ctx.fillText('0',el.x,el.y+16);ctx.fillText('10m',el.x+el.len/2,el.y+16);ctx.fillText('20m',el.x+el.len,el.y+16);
            ctx.fillText('SCALE 1:100',el.x+el.len/2,el.y-10);
          }
        } else if (el.type==='tblock') {
          const a=alpha(el.x+el.w/2,el.y+el.h/2);
          if(a>0.06){
            ctx.strokeStyle=`rgba(129,140,248,${a*0.5})`;ctx.lineWidth=1.2;ctx.strokeRect(el.x,el.y,el.w,el.h);
            ctx.beginPath();ctx.moveTo(el.x,el.y+el.h*0.5);ctx.lineTo(el.x+el.w,el.y+el.h*0.5);ctx.stroke();
            ctx.font='bold 10px monospace';ctx.fillStyle=`rgba(129,140,248,${a*0.5})`;ctx.textAlign='left';
            ctx.fillText('INCHAA DEVELOPMENTS LLC',el.x+10,el.y+22);
            ctx.font='8px monospace';ctx.fillText('GENERAL ARRANGEMENT PLAN',el.x+10,el.y+36);
            ctx.fillText('DWG: INC-GA-001  REV: A',el.x+10,el.y+58);
            ctx.fillText('DATE: 2026.03',el.x+200,el.y+58);
          }
        } else if (el.type==='revcloud') {
          const a=alpha(el.x+el.w/2,el.y+el.h/2);
          if(a>0.08){
            ctx.strokeStyle=`rgba(248,113,113,${a*0.35})`;ctx.lineWidth=1;
            const bumps=16;ctx.beginPath();
            for(let i=0;i<bumps;i++){
              const angle=(i/bumps)*Math.PI*2;
              const na=((i+1)/bumps)*Math.PI*2;
              const r1x=el.x+el.w/2+Math.cos(angle)*(el.w/2);
              const r1y=el.y+el.h/2+Math.sin(angle)*(el.h/2);
              const r2x=el.x+el.w/2+Math.cos(na)*(el.w/2);
              const r2y=el.y+el.h/2+Math.sin(na)*(el.h/2);
              const cpx=(r1x+r2x)/2+Math.cos((angle+na)/2)*12;
              const cpy=(r1y+r2y)/2+Math.sin((angle+na)/2)*12;
              if(i===0)ctx.moveTo(r1x,r1y);
              ctx.quadraticCurveTo(cpx,cpy,r2x,r2y);
            }
            ctx.stroke();
            ctx.font='7px monospace';ctx.fillStyle=`rgba(248,113,113,${a*0.4})`;ctx.textAlign='center';
            ctx.fillText('REV.A',el.x+el.w/2,el.y-6);
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onMouseLeave = () => { mx = -1000; my = -1000; };
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
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center" style={{ background: '#0a0e1a' }}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-white font-bold leading-[1.08] tracking-tight text-[28px] md:text-[40px] lg:text-[48px]">
          Find Trusted Consultants
          <br className="hidden md:block" />
          {" "}in the UAE
        </h1>
        <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Your project is only as good as the people advising it. Inchaa connects you
          with quantity surveyors, project management consultants, design consultants,
          and supervision consultants across the UAE.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <PostProjectButton campaign="consultants_hero" size="md" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(10,14,26,0.6))" }} />
    </section>
  );
}
