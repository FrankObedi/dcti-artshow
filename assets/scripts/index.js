window.onload=function(){
  setTimeout(menu1, 1000);
}



// CODE FOR THE PAGE FADE-IN ANIMATE
function menu1(){
  var links = document.querySelectorAll(".nav-list, .logo, .search-btn, .search-box, .content-textbox, .hero-content, .cta-btn, .hamburger-nav");
  for(var i=0; i < links.length; i++){
      links[i].style.opacity = '1';
      links[i].style.transform = 'translate(0)';
  }

}
// END OF FADE-IN ANIMATE CODE

// CODE FOR MENU TOGGLE
const mainNav = document.querySelector('.main-nav');
const menu = document.querySelector('.hamburger-nav');

menu.addEventListener('click', function(){
  mainNav.classList.toggle('open');
})


//CODE FOR SEARCH TOGGLE
const searchBtn = document.querySelector('.fa-search');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', function(){
  searchBtn.classList.toggle("fa-times");
  searchBox.classList.toggle('showSearch');
  mainNav.classList.toggle('invert-menu');
})
// // END OF SEARCH TOGGLE



// CODE FOR THE SLIDE SHOW
var slideIndex = 0;
showSlides();
var timer;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 8000);
}


function currentSlide(n){
  clearInterval(timer);
  delete(timer);
  showSlides(slideIndex = n);
}









