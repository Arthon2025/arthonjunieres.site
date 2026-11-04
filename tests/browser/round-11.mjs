const task=await taskSpace(3);const page=task.page('p1');
await page.cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
await page.reload();
await page.waitForFunction(()=>window.ArthonSwarm?.active);
console.log(await page.evaluate(()=>({active:window.ArthonSwarm.active,reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches})));
await page.screenshot({path:'C:/Users/artho/Documents/Projetos AI/arthonjunieres.site/docs/evidence/local-animation-confirmed.png'});
await task.finish({keep:[]});
