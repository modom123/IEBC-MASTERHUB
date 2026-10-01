/*
  FILE      : build_pdfs_2026-10-01_1702.cjs
  CREATED   : 2026-10-01_1702 UTC
  PURPOSE   : Rebuilds the teacher-guide PDFs (one per guide + the complete manual) from the
              Markdown guides in this folder, in IEBC brand styling.
  USAGE     : npm i marked playwright   (once, anywhere on your machine)
              node build_pdfs_2026-10-01_1702.cjs YYYY-MM-DD_HHMM
              The stamp names the complete manual and appears in every PDF footer.
              After rebuilding, update ACAD_GUIDES / ACAD_GUIDE_MANUAL in the MasterHub
              file if file names changed.
*/
const fs=require('fs'), path=require('path');
const {marked}=require('marked');
const {chromium}=require('playwright');
const DIR=__dirname, OUT=path.join(DIR,'pdf');
const STAMP=process.argv[2]; if(!/^\d{4}-\d{2}-\d{2}_\d{4}$/.test(STAMP||'')){ console.error('Usage: node build_pdfs_*.cjs YYYY-MM-DD_HHMM'); process.exit(1); }
const files=fs.readdirSync(DIR).filter(f=>f.endsWith('.md')).sort();
const css=`
@page{size:Letter;margin:0.75in 0.7in 0.8in}
body{font-family:"DejaVu Sans","Liberation Sans",Arial,sans-serif;font-size:10pt;line-height:1.5;color:#0B1D35}
h1{font-family:"DejaVu Serif",Georgia,serif;color:#0B2140;font-size:20pt;border-bottom:3px solid #C8902A;padding-bottom:6px;margin:0 0 14px}
h2{font-family:"DejaVu Serif",Georgia,serif;color:#0B2140;font-size:14pt;margin:22px 0 8px;border-bottom:1px solid #DDE4EF;padding-bottom:3px;page-break-after:avoid}
h3{color:#17377A;font-size:11.5pt;margin:16px 0 6px;page-break-after:avoid}
table{border-collapse:collapse;width:100%;margin:8px 0 12px;font-size:9pt;page-break-inside:auto}
tr{page-break-inside:avoid}
th{background:#0B2140;color:#fff;text-align:left;padding:5px 7px;font-weight:600}
td{border:1px solid #DDE4EF;padding:5px 7px;vertical-align:top}
tr:nth-child(even) td{background:#F7F9FC}
code{font-family:"DejaVu Sans Mono",monospace;font-size:8.5pt;background:#EEF2F8;padding:1px 4px;border-radius:3px}
pre{background:#F7F9FC;border:1px solid #DDE4EF;border-left:3px solid #C8902A;padding:9px 11px;white-space:pre-wrap;font-size:8.5pt;page-break-inside:avoid}
pre code{background:none;padding:0}
hr{border:none;border-top:1px solid #DDE4EF;margin:18px 0}
ul,ol{padding-left:20px}li{margin:2px 0}
blockquote{border-left:3px solid #C8902A;margin:8px 0;padding:4px 12px;background:#FFF8EC}
.stamp{font-family:"DejaVu Sans Mono",monospace;font-size:7.5pt;color:#5A6A82;background:#F7F9FC;border:1px solid #DDE4EF;border-radius:4px;padding:8px 10px;margin-bottom:16px;white-space:pre-wrap}
.cover{page-break-after:always;text-align:center;padding-top:2.2in}
.cover .brand{font-family:"DejaVu Serif",Georgia,serif;font-size:13pt;letter-spacing:3px;color:#C8902A;text-transform:uppercase}
.cover h1{border:none;font-size:30pt;margin:16px 0 8px}
.cover p{color:#3A4A60;font-size:11pt}
.toc{page-break-after:always}.toc li{margin:5px 0;font-size:10.5pt}
.guide{page-break-before:always}
`;
function split(md){ const m=md.match(/^<!--([\s\S]*?)-->\s*/); return {stamp:m?m[1].trim().replace(/^\s+/gm,s=>s.length>2?'  ':''):'', body:m?md.slice(m[0].length):md}; }
function html(inner,title){ return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body>${inner}</body></html>`; }
const hdr=t=>`<div style="font-size:7pt;width:100%;padding:0 0.7in;color:#7A8AA0;font-family:Arial;display:flex;justify-content:space-between"><span>IEBC Academy · Teacher Guide · Internal</span><span>${t}</span></div>`;
const ftr=`<div style="font-size:7pt;width:100%;padding:0 0.7in;color:#7A8AA0;font-family:Arial;display:flex;justify-content:space-between"><span>Generated ${STAMP.replace('_',' ')} UTC</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;
(async()=>{
  const b=await chromium.launch(); const p=await b.newPage();
  const guides=[];
  for(const f of files){
    const {stamp,body}=split(fs.readFileSync(path.join(DIR,f),'utf8'));
    const title=(body.match(/^# (.+)$/m)||[0,f])[1];
    const block=`<div class="stamp">${stamp.replace(/&/g,'&amp;').replace(/</g,'&lt;')}\nPDF GENERATED : ${STAMP} UTC</div>`;
    const inner=block+marked.parse(body).replace(/<thead>\s*<tr>\s*(?:<th[^>]*>\s*<\/th>\s*)+<\/tr>\s*<\/thead>/g,'');
    guides.push({f,title,inner});
    await p.setContent(html(inner,title),{waitUntil:'load'});
    const out=path.join(OUT,f.replace(/\.md$/,'.pdf'));
    await p.pdf({path:out,format:'Letter',printBackground:true,displayHeaderFooter:true,headerTemplate:hdr(title.replace(/&/g,'&amp;')),footerTemplate:ftr,margin:{top:'0.75in',bottom:'0.8in',left:'0.7in',right:'0.7in'}});
    console.log('ok',path.basename(out));
  }
  const cover=`<div class="cover"><div class="brand">Integrated Efficiency Business Consultants</div><h1>IEBC Academy<br>Teacher Manual</h1><p>Teaching Playbook and lesson plans for all ${guides.length-1} classes</p><p style="margin-top:40px;font-size:9pt;color:#7A8AA0">Internal · Generated ${STAMP} UTC · Guide version 2026-10-01_1649</p></div>`;
  const toc=`<div class="toc"><h1>Contents</h1><ol>${guides.map(g=>`<li>${g.title}</li>`).join('')}</ol></div>`;
  const all=cover+toc+guides.map((g,i)=>`<div class="${i?'guide':''}">${g.inner}</div>`).join('');
  await p.setContent(html(all,'IEBC Academy Teacher Manual'),{waitUntil:'load'});
  const comb=path.join(OUT,`IEBC_Academy_Teacher_Manual_COMPLETE_${STAMP}.pdf`);
  await p.pdf({path:comb,format:'Letter',printBackground:true,displayHeaderFooter:true,headerTemplate:hdr('Teacher Manual'),footerTemplate:ftr,margin:{top:'0.75in',bottom:'0.8in',left:'0.7in',right:'0.7in'}});
  console.log('ok',path.basename(comb)); await b.close();
})();
