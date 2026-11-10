const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reduceMotion.matches && 'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});
 document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('ready');observer.observe(el);});
 reduceMotion.addEventListener('change',e=>{if(e.matches){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));observer.disconnect();}});
}
const progress=document.querySelector('.progress');let ticking=false;
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,window.scrollY/max)):0})`;ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateProgress);ticking=true;}},{passive:true});window.addEventListener('resize',updateProgress);updateProgress();
