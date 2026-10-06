const menuToggle=document.getElementById('menuToggle');
const mainMenu=document.getElementById('mainMenu');
menuToggle.addEventListener('click',()=>{const open=mainMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false');});
document.querySelectorAll('#mainMenu a').forEach(a=>a.addEventListener('click',()=>{mainMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
const sections=document.querySelectorAll('main section[id]'),links=document.querySelectorAll('.menu a');
window.addEventListener('scroll',()=>{let current='accueil';sections.forEach(s=>{if(scrollY>=s.offsetTop-150)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));});
