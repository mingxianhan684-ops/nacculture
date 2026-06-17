// NACCF Hero Slider

document.addEventListener("DOMContentLoaded", function(){

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");

  if(slides.length === 0) return;

  let currentSlide = 0;

  function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");

    if(dots[index]){
      dots[index].classList.add("active");
    }

    currentSlide = index;
  }

  function nextSlide(){
    currentSlide = currentSlide + 1;

    if(currentSlide >= slides.length){
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  dots.forEach((dot,index)=>{
    dot.addEventListener("click", function(){
      showSlide(index);
    });
  });

  setInterval(nextSlide, 4000);

});
