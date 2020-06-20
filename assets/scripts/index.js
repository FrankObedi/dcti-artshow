
document.cookie = "SameSite=None";


// CODE FOR MENU TOGGLE
var mainNav;
var menu;
if(document.querySelector('.main-nav')){
  mainNav = document.querySelector('.main-nav');
  if(document.querySelector('.hamburger-nav')){
    menu = document.querySelector('.hamburger-nav');
    menu.addEventListener('click', function(){
      mainNav.classList.toggle('open');
    })    
  }
}


// Change he navbar background when we scroll
const heroText = document.querySelector(".hero-textbox");

observeOneOptions = {
  rootMargin: "-330px 0px 0px 0px"
};

const observerOne = new IntersectionObserver(function (
  entries,
  observeOneOptions
) {
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      mainNav.classList.add("onscroll-menu");
    } else{
      mainNav.classList.remove('onscroll-menu');
    }
  })
}, 
observeOneOptions);

if(document.querySelector(".hero-textbox")){
  observerOne.observe(heroText);
}

var results = [];
var searchBar = document.querySelector('.search-field');

// Change the place holder in the input when you click on it
function active(){
  if(searchBar.value == 'Search for art...'){
    searchBar.value = '';
    searchBar.placeholder = 'Search for art...';
  }
}

function inactive(){
  if(searchBar.value == ''){
    searchBar.value = 'Search for art...';
    searchBar.placeholder = '';
  }
}


// Clear search bar value after search query
const resetSearchBar = () =>{
  function reset(){
    searchBar.value = "Search for art...";
  }
  reset();
}


// Check when someone hits the Enter Key while searching
document.querySelector('.search-field').onkeypress = function(e) {
  var event = e || window.event;
  var charCode = event.which || event.keyCode;

  if ( charCode == '13' ) {  
    
    sessionStorage.setItem('newTerm', searchBar.value);
    var returnSearch = sessionStorage.getItem('newTerm');
    console.log(returnSearch);

    getData(searchBar.value);
    resetSearchBar();
    return false;
  }
}

const storeSearchData = function(){
  sessionStorage.setItem('newTerm', searchBar.value);
  window.location = "results.html";
}

//This applies to external pages that come to this page
if(document.querySelector('.field_1')){

  document.querySelector('.field_1').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;
  
    if ( charCode == '13' ) {  
      
      storeSearchData();
  
      getData(searchBar.value);
      return false;
    }
  }

}

// This is all the images cards on the home page
var card;

$.getJSON("../../api/csvjson.json", function(json) {

  //Array of name of artworks to use for slideshow
  let slideArtworks = ["Afar",  "Madonna of the Book", "nEmerald Carrot", "Smokes against the world"];
  //Array to store URLs of the slideshow images
  let slideURLs = [];
  //Array to store Name of the art
  let slideArtist = [];
  //Array to store art names in new order
  let slideArtworks2 = [];
  //This function get image URLs in the jason file based on the name of the artwork
  
  const getImages = (imageArr, urlArr, artistArr, finalImageArr) =>{
    for(let i = 0; i < json.length; i++){
      let index = json[i]["artName"];
      for(let j = 0; j < imageArr.length; j++){
        if(index == imageArr[j]){
          urlArr.push(json[i].URL);
          artistArr.push(json[i]["name"]);
          finalImageArr.push(json[i]["artName"]);
        }
      }      
    }
  }

  getImages(slideArtworks,slideURLs,slideArtist,slideArtworks2);

  for (let i = 0; i < slideArtworks2.length; i++) {

    var slide = `
    <div class="slides slide-in">      
      <img class="slide-img" src="${slideURLs[i]}" alt="IMAGE NOT FOUND"> 
      <div class="slide-body">
        <h4 class="slide-name">${slideArtworks2[i]}</h4>
        <p class="slide-text">${slideArtist[i]}</p>
      </div>
    </div>`

    $(".artwork-container").append(slide);
  
  }


  //Array of name of artworks to use for slideshow
  let cardArtworks = ["Lia", "Nipsey Hussle Memorial", "Tear", "Cactus", "Krishna", "The Bard of Avon", "The End of Summer", "Moonlight", "face", "Vidal Sassoon", "Solène, Slayer of Evil", "A Ravens Call"];
  
  //Array to store URLs of the slideshow images
  let cardURLs = [];
  //Array to store Name of the art
  let cardArtist = [];
  //Array to store art names in new order
  let cardArtworks2 = [];
  //This function get image URLs in the jason file based on the name of the artwork
  getImages(cardArtworks,cardURLs,cardArtist,cardArtworks2);

  for (let i = 0; i < cardArtworks.length; i++){   
    card = `
      <br>       
      <div class="card">        
        <img class="card-img" src="${cardURLs[i]}" alt="IMAGE NOT FOUND"> 
        <div class="card-body">
          <h4 class="card-text1">${cardArtworks2[i]}</h4>
          <p class="card-text2 artistName">${cardArtist[i]}</p>
        </div>   
      </div> `       
      
    $(".gallery").append(card);
  } 

  // CODE FOR THE SLIDE SHOW
  var slideIndex = 0;
  var slides, dots;
  
  if(document.querySelector(".dot-container")){
    slides = document.getElementsByClassName("slides");
    dots = document.getElementsByClassName("dot");    
    showSlides();
  }

  // Slideshow controls
  var timer;
  function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
    timer = setTimeout(showSlides, 8000);
  }

  window.currentSlide = function(n){
    clearInterval(timer);
    delete(timer);
    showSlides(slideIndex = n);
  } 
});





















