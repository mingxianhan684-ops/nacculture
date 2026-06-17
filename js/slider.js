// NACCF Homepage Slider

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;

function showSlide(index){
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide(){
  currentSlide++;
  if(currentSlide >= slides.length){
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

dots.forEach((dot,index)=>{
  dot.addEventListener("click",()=>{
    showSlide(index);
  });
});

setInterval(nextSlide,5000);
