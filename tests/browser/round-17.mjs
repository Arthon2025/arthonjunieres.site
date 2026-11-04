const task=await taskSpace(6);const page=task.page('p1');const results=[];
await page.cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
const selectors=['#hero-heading','.hero-lead','#projects-heading','#about-heading','#cap-heading','#journey-heading','#contact-heading','.contact-lead'];
for(const selector of selectors){
 await page.evaluate(s=>{window.scrollTo({top:0,behavior:'instant'});document.querySelector(s).scrollIntoView({behavior:'instant',block:'center'});},selector);
 // leave the viewport first when target is already visible, then re-enter
 await page.evaluate(s=>window.scrollTo({top:s.startsWith('#hero')||s==='.hero-lead'?document.body.scrollHeight:0,behavior:'instant'}),selector);
 await page.waitForFunction(s=>{const r=document.querySelector(s).getBoundingClientRect();return r.bottom<0||r.top>innerHeight},selector);
 await page.evaluate(s=>document.querySelector(s).scrollIntoView({behavior:'instant',block:'center'}),selector);
 await page.waitForFunction(s=>document.querySelector(s).dataset.typingState==='typing',selector);
 const before=await page.evaluate(s=>({text:document.querySelector(s).textContent,height:document.querySelector(s).getBoundingClientRect().height}),selector);
 await page.waitForFunction(s=>document.querySelector(s).dataset.typingState==='complete',selector);
 const after=await page.evaluate(s=>({text:document.querySelector(s).textContent,height:document.querySelector(s).getBoundingClientRect().height}),selector);
 results.push({selector,before,after});
}
console.log(results);
const fs=await import('node:fs/promises');await fs.writeFile('C:/Users/artho/Documents/Projetos AI/arthonjunieres.site/docs/evidence/typing-results.json',JSON.stringify(results,null,2));
console.log(await page.snapshot());
