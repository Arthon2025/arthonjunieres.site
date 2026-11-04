const task = await taskSpace(1); const page = task.page('p1');
console.log(await page.evaluate(() => ({url:location.href,api:!!window.ArthonSwarm,active:window.ArthonSwarm?.active,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,coarse:matchMedia('(pointer: coarse)').matches,scripts:[...document.scripts].map(s=>s.src)})));
console.log(await page.snapshot());
