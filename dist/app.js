const brief=document.querySelector('#brief-dialog'), serviceDialog=document.querySelector('#service-dialog');
const services=[{title:'Market entry & Growth strategy',description:'Build the right foundation for your growth in Vietnam.',items:['Market, audience and competitor research','Positioning, messaging and go-to-market planning','Campaign roadmaps, channel planning and measurement frameworks']},{title:'Media & Content',description:'Tell your story in a way your community understands and cares about.',items:['Content strategy and editorial planning for Vietnam','Localization, social content and educational storytelling','PR, media and content distribution planning']},{title:'Community & Social growth',description:'Nurture connections from the first interaction to lasting participation.',items:['Community and social channel growth strategy','Content calendars, engagement activities and AMAs','Community feedback, engagement and health monitoring']},{title:'KOLs & Campaigns',description:'Reach the right audience through relevant, trusted voices.',items:['Creator and KOL selection based on goals and audience fit','Campaign briefs and content execution coordination','Performance reporting and campaign optimization recommendations']}];
function openBrief(index){if(Number.isInteger(index))document.querySelector('select[name=service]').selectedIndex=index;brief.showModal()}
document.querySelectorAll('[data-brief]').forEach(b=>b.onclick=()=>openBrief());
document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
document.querySelectorAll('[data-service]').forEach(b=>b.onclick=()=>{let i=Number(b.dataset.service),s=services[i];document.querySelector('#service-title').textContent=s.title;document.querySelector('#service-description').textContent=s.description;document.querySelector('#service-items').replaceChildren(...s.items.map(t=>{let li=document.createElement('li');li.textContent=t;return li}));document.querySelector('#service-cta').onclick=()=>{serviceDialog.close();openBrief(i)};serviceDialog.showModal()});
const menu=document.querySelector('.menu');menu.onclick=()=>{const open=document.querySelector('nav').classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close menu':'Open menu')};document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{document.querySelector('nav').classList.remove('open');menu.setAttribute('aria-expanded','false')});
document.querySelector('#brief-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const content=`BLOCKBOND — PROJECT BRIEF\n\nName: ${f.get('name')}\nEmail: ${f.get('email')}\nProject: ${f.get('project')}\nService: ${f.get('service')}\n\nGoals:\n${f.get('goal')}\n`;const url=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='BlockBond-project-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#form-status').textContent='Your brief is ready to download. Share the file with the BlockBond team when you are ready. Your details have not been submitted online.'};
document.querySelector('#year').textContent=new Date().getFullYear();

// Reveal each content block once and honor the visitor's motion preference.
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !motionPreference.matches){
 const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}});
 },{threshold:0.1});
 document.querySelectorAll('.about-grid,.principles>div,.section-top,.service-card,.approach-intro,.steps>div,.team-card,.contact').forEach(element=>{
  revealObserver.observe(element);
  element.classList.add('reveal-ready');
  if(element.matches('.service-card,.principles>div,.team-card'))element.style.setProperty('--reveal-delay',`${Array.from(element.parentElement.children).indexOf(element)*65}ms`);
 });
 motionPreference.addEventListener('change',event=>{if(event.matches){revealObserver.disconnect();document.querySelectorAll('.reveal-ready').forEach(element=>element.classList.add('is-visible'))}});
}

// Follow real mouse movement; reduced-motion visitors get immediate positioning.
document.querySelectorAll('.hero,.team').forEach(region=>{
 let frame=0,active=false,x=0,y=0,targetX=0,targetY=0;
 function position(){
  region.style.setProperty('--section-glow-x',`${x}px`);
  region.style.setProperty('--section-glow-y',`${y}px`);
 }
 function paint(){
  frame=0;
  x+=(targetX-x)*.18;y+=(targetY-y)*.18;position();
  if(active && (Math.abs(targetX-x)>.2 || Math.abs(targetY-y)>.2))frame=requestAnimationFrame(paint);
 }
 function reset(){
  active=false;region.classList.remove('has-pointer-glow');
  if(frame)cancelAnimationFrame(frame);
  frame=0;
 }
 function follow(event){
  if(event.pointerType==='touch' || event.sourceCapabilities?.firesTouchEvents)return;
  const bounds=region.getBoundingClientRect();
  targetX=event.clientX-bounds.left;targetY=event.clientY-bounds.top;
  if(!active || motionPreference.matches){
   x=targetX;y=targetY;position();
   if(frame)cancelAnimationFrame(frame);
   frame=0;
  }
  active=true;region.classList.add('has-pointer-glow');
  if(!motionPreference.matches && !frame)frame=requestAnimationFrame(paint);
 }
 region.addEventListener('pointermove',follow,{passive:true});
 region.addEventListener('mousemove',follow,{passive:true});
 region.addEventListener('pointerleave',reset);
 region.addEventListener('mouseleave',reset);
 region.addEventListener('pointercancel',reset);
 window.addEventListener('blur',reset);
 window.addEventListener('scroll',reset,{passive:true});
 motionPreference.addEventListener('change',reset);
});

// Count impact totals from zero when the section enters the viewport.
(()=>{
 const section=document.querySelector('.impact');
 if(!section)return;
 const counters=Array.from(section.querySelectorAll('.impact-odometer')).map(counter=>{
  const value=document.createElement('span');value.className='impact-count-value';value.textContent='0';
  counter.classList.add('is-counting');counter.replaceChildren(value);
  return {value,target:Number(counter.dataset.value)};
 });
 let started=false,frame=0,startTime=null;
 const duration=2600;
 function tick(now){
  if(startTime===null)startTime=now;
  const progress=Math.min((now-startTime)/duration,1);
  const eased=1-Math.pow(1-progress,2);
  counters.forEach(({value,target})=>{value.textContent=String(progress===1?target:Math.floor(target*eased))});
  frame=progress<1?requestAnimationFrame(tick):0;
 }
 function start(){
  if(started)return;
  started=true;section.classList.add('is-impact-visible');frame=requestAnimationFrame(tick);
 }
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
   if(entries.some(entry=>entry.isIntersecting)){start();observer.disconnect()}
  },{threshold:.15});observer.observe(section);
 }else{start()}
 // Finish cleanly if the page is backgrounded during the count.
 document.addEventListener('visibilitychange',()=>{
  if(document.hidden && started && frame){
   cancelAnimationFrame(frame);frame=0;
   counters.forEach(({value,target})=>{value.textContent=String(target)});
  }
 });
})();
