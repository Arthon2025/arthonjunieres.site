const task=await taskSpace(4);const page=task.page('p1');
await page.goto('http://127.0.0.1:8080/');
console.log(await page.snapshot());
console.log(await page.evaluate(()=>({active:window.ArthonSwarm.active,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,css:!!document.querySelector('link[href="assets/css/site.css"]')})));
