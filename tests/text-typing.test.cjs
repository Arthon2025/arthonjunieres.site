'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
function setup({supported=true,search=''}={}) {
 const text={textContent:'Da operação à inovação.'}; const rect={left:20,top:120,right:300,bottom:180,width:280,height:60};
 const target={dataset:{},getBoundingClientRect:()=>rect};
 const nodes=[];const frames=new Map();const events=new Map();let id=0;let observer;
 const highlights=new Map();
 const make=()=>({style:{},children:[],setAttribute(){},append(...n){this.children.push(...n);},remove(){this.removed=true;},attachShadow(){return this;}});
 const doc={hidden:false,head:{append(){}},body:{append(n){nodes.push(n);}},createElement:make,querySelectorAll:()=>[target],createTreeWalker(){let read=false;return {nextNode(){if(read)return null;read=true;return text;}};},createRange(){return {setStart(){},setEnd(){},getBoundingClientRect:()=>rect};},addEventListener(n,fn){events.set(n,fn);},removeEventListener(n){events.delete(n);}};
 class IO {constructor(fn){this.fn=fn;observer=this;}observe(){}disconnect(){this.disconnected=true;}}
 class H {constructor(...ranges){this.ranges=ranges;}}
 const win={location:{search},CSS:supported?{highlights}:{},Highlight:H,IntersectionObserver:IO,requestAnimationFrame(fn){frames.set(++id,fn);return id;},cancelAnimationFrame(i){frames.delete(i);},addEventListener(n,fn){events.set(n,fn);},removeEventListener(n){events.delete(n);}};
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../assets/js/text-typing.js'),'utf8'),{window:win,document:doc,URLSearchParams,NodeFilter:{SHOW_TEXT:4},console},{filename:path.join(__dirname,'../assets/js/text-typing.js')});
 return {win,target,text,nodes,frames,events,highlights,enter(on=true){observer.fn([{target,isIntersecting:on}]);},tick(now){const batch=[...frames.values()];frames.clear();batch.forEach(fn=>fn(now));}};
}
test('anima sem modificar o conteúdo e revela completamente ao terminar',()=>{const s=setup();s.enter();assert.equal(s.target.dataset.typingState,'typing');assert.equal(s.text.textContent,'Da operação à inovação.');assert.ok(s.highlights.size>0);s.tick(0);s.tick(700);assert.ok(s.highlights.size>0);s.tick(5000);assert.equal(s.highlights.size,0);assert.equal(s.target.dataset.typingState,'complete');});
test('reentrada repete digitação, eventos duplicados não reiniciam',()=>{const s=setup();s.enter();s.tick(0);s.enter();s.tick(5000);assert.equal(s.target.dataset.typingState,'complete');s.enter(false);s.enter();assert.equal(s.target.dataset.typingState,'typing');});
test('saída e Escape restauram texto e removem animação',()=>{const s=setup();s.enter();s.events.get('keydown')({key:'Escape'});assert.equal(s.highlights.size,0);assert.equal(s.frames.size,0);assert.equal(s.win.ArthonTyping.active,false);});
test('sem Highlight API ou com swarm=0 conteúdo fica intacto',()=>{for(const options of [{supported:false},{search:'?swarm=0'}]){const s=setup(options);assert.equal(s.nodes.length,0);assert.equal(s.text.textContent,'Da operação à inovação.');}});
test('nove seletores incluem os seis grupos e o parágrafo de trajetória',()=>{const code=fs.readFileSync(path.join(__dirname,'../assets/js/text-typing.js'),'utf8');for(const selector of ['#hero-heading','.hero-lead','#projects-heading','#about-heading','#cap-heading','#journey-heading','.journey-intro > p','#contact-heading','.contact-lead'])assert.ok(code.includes(selector),selector);});
