// NACCF Main JavaScript

// Back to Top
const backTop = document.querySelector(".back-top");

if(backTop){
  backTop.addEventListener("click",()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  });
}

// Scroll Reveal Animation
const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll(){
  revealItems.forEach(item=>{
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(itemTop < windowHeight - 80){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Number Counter
const counters = document.querySelectorAll(".counter");

function runCounters(){
  counters.forEach(counter=>{
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 80;

    function update(){
      count += speed;
      if(count < target){
        counter.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(update);
      }else{
        counter.innerText = target.toLocaleString();
      }
    }

    update();
  });
}

let counterStarted = false;

window.addEventListener("scroll",()=>{
  const impact = document.querySelector(".impact-section");
  if(!impact || counterStarted) return;

  const position = impact.getBoundingClientRect().top;
  if(position < window.innerHeight - 100){
    runCounters();
    counterStarted = true;
  }
});
