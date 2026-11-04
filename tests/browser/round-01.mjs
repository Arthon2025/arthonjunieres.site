const task = await taskSpace('arthon-swarm-20261104');
const page = task.page('p1');
await page.goto('file:///C:/Users/artho/Documents/Projetos%20AI/arthonjunieres.site/index.html');
console.log({ spaceId: task.spaceId });
console.log(await page.snapshot());
