/*====================================================
        LOUZINHA CARVALHO
        PMO PORTFOLIO
        script.js
=====================================================*/


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});


// Close menu when clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});




// ==========================================
// STICKY NAVBAR
// ==========================================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});




// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});




// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});




// ==========================================
// FADE ANIMATION
// ==========================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});


document.querySelectorAll(

".metric-card,.deliver-card,.skill-card,.project-card,.cert-card,.tool-card,.gallery-card,.knowledge-card,.timeline-item,.contact-card"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});




// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters=document.querySelectorAll(".metric-card h2");

const speed=80;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const text=counter.innerText;

const number=parseInt(text);

if(!isNaN(number)){

let count=0;

const update=()=>{

count+=Math.ceil(number/40);

if(count<number){

counter.innerText=count+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=text;

}

};

update();

}

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});




// ==========================================
// HERO IMAGE FLOAT
// ==========================================

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-10px)"},

{transform:"translateY(0px)"}

],{

duration:4000,

iterations:1

});

},4000);

}




// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topBtn=document.createElement("div");

topBtn.className="back-to-top";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);


window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});




// ==========================================
// CARD HOVER EFFECT
// ==========================================

document.querySelectorAll(

".project-card,.deliver-card,.skill-card,.tool-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});




// ==========================================
// IMAGE LAZY FADE
// ==========================================

document.querySelectorAll("img").forEach(img=>{

img.style.opacity="0";

img.onload=()=>{

img.style.transition="opacity .8s";

img.style.opacity="1";

};

});




// ==========================================
// PAGE LOADER
// ==========================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});




// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

}




// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log("%cPMO Portfolio Loaded Successfully","color:#D4AF37;font-size:18px;font-weight:bold;");
