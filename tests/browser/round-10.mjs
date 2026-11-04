const task=await taskSpace('arthon-swarm-diagnosis-20261104');const page=task.page('p1');
await page.goto('http://127.0.0.1:8080/?swarm=1');
console.log({spaceId:task.spaceId});
console.log(await page.evaluate(()=>({url:location.href,loaded:!!window.ArthonSwarm,active:window.ArthonSwarm?.active,reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches,coarse:matchMedia('(pointer: coarse)').matches})));
console.log(await page.snapshot());
