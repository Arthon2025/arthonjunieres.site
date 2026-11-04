const task=await taskSpace(1); const page=task.page('p1');
console.log(await page.evaluate(()=>({width:innerWidth,active:window.ArthonSwarm.active,menu:document.getElementById('menu-button').getBoundingClientRect().width})));
await page.cdp('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
console.log(await page.snapshot());
