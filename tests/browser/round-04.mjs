const task = await taskSpace(1);
const page = task.page('p1');
const base = 'file:///C:/Users/artho/Documents/Projetos%20AI/arthonjunieres.site/index.html';
const root = 'C:/Users/artho/Documents/Projetos AI/arthonjunieres.site/docs/evidence';
const fs = await import('node:fs/promises');
await page.cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
const results=[];
for(const [width,height] of [[1440,900],[390,844]]) {
 await page.cdp('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
 await page.goto(base);
 await page.evaluate(()=>document.fonts.ready);
 const measure=()=>({active:window.ArthonSwarm.active,width:document.documentElement.scrollWidth,rects:[...document.querySelectorAll('.hero h1,.visual-frame,.project')].map(e=>{const r=e.getBoundingClientRect();return [r.x,r.y,r.width,r.height]})});
 const before=await page.evaluate(measure);
 await page.screenshot({path:`${root}/baseline-${width}.png`});
 await page.goto(base+'?swarm=1');
 await page.evaluate(()=>document.fonts.ready);
 await page.waitForFunction(()=>window.ArthonSwarm?.active);
 const after=await page.evaluate(measure);
 await page.screenshot({path:`${root}/active-${width}.png`});
 await page.keyboard.press('Escape');
 const stopped=await page.evaluate(()=>!window.ArthonSwarm.active);
 results.push({viewport:`${width}x${height}`,before,after,stopped});
}
await fs.writeFile(`${root}/browser-results.json`,JSON.stringify(results,null,2));
console.log(JSON.stringify(results));
console.log(await page.snapshot());
