const task=await taskSpace(1);const page=task.page('p1');
await page.cdp('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
console.log(await page.evaluate(()=>({scrollY,active:window.ArthonSwarm.active,name:document.getElementById('contact-name').getBoundingClientRect().toJSON(),menu:document.getElementById('menu-button').getAttribute('aria-expanded')})));
console.log(await page.snapshot());
