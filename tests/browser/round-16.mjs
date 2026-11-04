const task=await taskSpace('arthon-text-typing-20261104');const page=task.page('p1');
await page.cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
await page.goto('http://127.0.0.1:8080/');console.log({spaceId:task.spaceId});
await page.waitForFunction(()=>document.getElementById('hero-heading').dataset.typingState==='typing');
await page.screenshot({path:'C:/Users/artho/Documents/Projetos AI/arthonjunieres.site/docs/evidence/typing-desktop.png'});
console.log(await page.evaluate(()=>({api:window.ArthonTyping.active,state:document.getElementById('hero-heading').dataset.typingState,text:document.getElementById('hero-heading').textContent,highlights:CSS.highlights.size})));
console.log(await page.snapshot());
