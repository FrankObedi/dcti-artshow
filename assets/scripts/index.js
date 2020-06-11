window.onload=function(){
  setTimeout(menu1, 1000);
}



// CODE FOR THE PAGE FADE-IN ANIMATE
function menu1(){
  var links = document.querySelectorAll(".nav-list, .logo, .search-btn, .search-box, .content-textbox, .hero-content, .hamburger-nav, .hero-img, .hero-textbox");
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



// Change he navbar background when we scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".main-nav");
    var $scrollArrow = $(".cta-slide_contianer");
    $nav.toggleClass('onscroll-menu', $(this).scrollTop() > $nav.height());
    $scrollArrow.toggleClass('hide-arrow', $(this).scrollTop() > $nav.height());
  });
});
  



//CODE FOR SEARCH TOGGLE
const searchslide_contianer = document.querySelector('.fa-search');
const searchBox = document.querySelector('.search-box');
searchslide_contianer.addEventListener('click', function(){
  searchslide_contianer.classList.toggle("fa-times");
  searchBox.classList.toggle('showSearch');
  mainNav.classList.toggle('invert-menu');
})
// // END OF SEARCH TOGGLE











$.getJSON("../../api/submission.json", function(json) {

  //Array of name of artworks to use for slideshow
  let slideArtworks = ["Art Room", "Yearbook Graduate Section Divider", "Harmony on a wire.", "Soaring Above the City"];
  //Array to store URLs of the slideshow images
  let slideURLs = [];
  //Array to store Name of the art
  let slideArtist = [];
  //Array to store art names in new order
  let slideArtworks2 = [];
  //This function get image URLs in the jason file based on the name of the artwork
  
  const getImages = (imageArr, urlArr, artistArr, finalImageArr) =>{
    for(let i = 0; i < json.length; i++){
      let index = json[i]["Art-Name"];
      for(let j = 0; j < imageArr.length; j++){
        if(index == imageArr[j]){
          urlArr.push(json[i].URL);
          artistArr.push(json[i]["First-Name"] + " " + json[i]["Last-Name"]);
          finalImageArr.push(json[i]["Art-Name"]);
        }
      }      
    }
  }

  getImages(slideArtworks,slideURLs,slideArtist,slideArtworks2);

  for (let i = 0; i < slideArtworks2.length; i++) {

    var slide = `
    <div class="slides">
      <img class="slide-img" src="${slideURLs[i]}" alt="IMAGE NOT FOUND">
      <div class="slide-body">
        <h4 class="slide-name">${slideArtworks2[i]}</h4>
        <p class="slide-text">${slideArtist[i]}</p>
      </div>
    </div>`

    $(".artwork-container").append(slide);
   
  }


  //Array of name of artworks to use for slideshow
  let cardArtworks = ["Nipsey Hussle Memorial", "Afar", "Woman with the Animal Hat", "Madonna of the Book", "nEmerald Carrot", "The End of Summer", "Smokes against the world", "Solène, Slayer of Evil", "A Ravens Call"];
  json.reverse();
  //Array to store URLs of the slideshow images
  let cardURLs = [];
  //Array to store Name of the art
  let cardArtist = [];
  //Array to store art names in new order
  let cardArtworks2 = [];
  //This function get image URLs in the jason file based on the name of the artwork
  getImages(cardArtworks,cardURLs,cardArtist,cardArtworks2);
  

  for (let i = 0; i < 9; i++){

    var card = `
    
    <div class="img">
      <img class="card-img-top" src="${cardURLs[i]}" alt="IMAGE NOT FOUND">      
      <h4 class="slide-text1">${cardArtist[i]}</h4>
      <p class="slide-text2 artistName">${cardArtworks2[i]}</p>
    </div>`
    
    $(".gallery").append(card);    

  }


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

    window.currentSlide = function(n){
      clearInterval(timer);
      delete(timer);
      showSlides(slideIndex = n);
    }    
 
});

















