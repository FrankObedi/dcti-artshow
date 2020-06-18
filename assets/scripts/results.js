$( document ).ready(function() {
  // window.scrollTo(0, 800);
  window.location.hash="1"; 
});

const searchContianer = document.querySelector('.search-box');
var searchBar = document.querySelector('.search-field');
var newMessage = document.querySelector('.instruct');

var itemsFound; // variable keeps track of number of image results from search

// Change he navbar background when we scroll
const heroText2 = document.querySelector(".page-header");

observeTwoOptions = {
  rootMargin: "-180px 0px 0px 0px"
};

const observerTwo = new IntersectionObserver(function (
  entries,
  observeTwoOptions
) {
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      mainNav.classList.add("onscroll-menu");
    } else{
      mainNav.classList.remove('onscroll-menu');
    }
  })
}, 
observeTwoOptions);

if(document.querySelector(".page-header")){
  observerTwo.observe(heroText2);
}


var searchTerm = [];

$.getJSON("../../api/submission.json", function(json) {
  for (let i = 0; i < json.length; i++) {
    var thumbnail = `
    <div class="gallery-item all art ${json[i]["Grade"]} ${json[i]["Name"].toLowerCase()} ${json[i]["Teacher"].toLowerCase()} ${json[i]["School"].toLowerCase()} ${json[i]["Art-Name"].toLowerCase()} ${json[i]["Category"].toLowerCase()} ${json[i]["Style"].toLowerCase()} ${json[i]["Theme"].toLowerCase()} ${json[i]["Subject"].toLowerCase()} ">
      <a href="#${i}" class="button">
        <img src="${json[i].URL}">
      </a>
    </div>`

    // Check the person who submitted the art whether its a teacher or student
    //if teacher add "Staff" to the lightbox image description
    //if a student write the grades number with the word "grade" in front of it.
    var personType;
    if(json[i]["Grade"] == "Staff" || json[i]["Grade"] == "staff"){
      personType = "Staff";
    }
    else{
      personType = "Grade " + json[i]["Grade"];
    }

    var model = `
    <div id="${i}" class="gallery-lightbox">
      <div class="gallery-lightbox-content">
          <a href="#/" class="close"></a>
          <p class="scrollTip">Scroll to see full image</p>
          <label>
            <input type="checkbox" id="zoomCheck">
            <img class="lightbox-img" src="${json[i].URL}">
          </label>
          <div class="text-box">
            <div class="box-1">
              <h3 class="gallery-lightbox-art-name">${json[i]["Art-Name"]}</h3>
              <p class="gallery-lightbox-artist">${json[i]["First-Name"] + " " + json[i]["Last-Name"]}</p>
            </div>
            <div class="box-2">
              <p class="person-type">${personType}</p>
              <p class="school">${json[i]["School"]}</p>
            </div>            
          </div>
      </div>
    </div>`
    
    $(".gallery-lightboxes").append(model);
    
    $(".results-gallery").append(thumbnail);
  }  


  //Get all the images
  var imageCard = $(".gallery-item");
  var links = [];
  window.searchImages = function(){
    itemsFound = 0;
    var foundImageIndex = [];
    var lightboxImages = document.querySelectorAll(".lightbox-img");
    var lightboxImageContainer = document.querySelectorAll(".gallery-lightbox");
    var lightboxImageContent = document.querySelectorAll(".gallery-lightbox-content");
    

    

    for(i = 0; i < imageCard.length; i++){    

      for(var x = 0; x < searchTerm.length; x++){ 

        // There is one image that is really huge so this statement reduces its size
        if(lightboxImages[i].src == "https://drive.google.com/u/1/uc?usp=forms_web&id=1MjgeO2WGfo6ugztcHGywMVJ72RYoGvsj"){
          imageCard[i].children[0].children[0].classList.add("small");
          lightboxImageContent[i].style.marginTop = "135rem";
          lightboxImages[i].style.display = "block";
          lightboxImageContainer[i].style.margin = "0 auto";
        }

        // clear previously loaded images searches
        if(imageCard[i].style.display = "flex"){
          imageCard[i].style.display = "none";
        }        

        //Get all the class of each item and store them in a variable
        var classes = imageCard[i].classList
        
        // check if any of the classes match the search term the user enter
        var result = classes.contains(this.searchTerm[0] && this.searchTerm[searchTerm.length-1]);        

        // if match is found add the index of item to array for images to be displayed
        if(result) {
          foundImageIndex.push(i);
        } 
              
        // Display image not found if no results from search
        else{
          newMessage.style.display = "block";
          newMessage.style.backgroundColor = "#C5283D";
          newMessage.innerHTML = "No images found, try again";
        }
      }
    } 

    

    //Remove duplicates in the array that holds the index of images found in the search
    // store the new items withs no dubplicates in a new array
    // count the number of items in the array to determine the actual number of images found
    var noDuplicates = [new Set(foundImageIndex)]
    for(var n = 0; n < noDuplicates.length; n++){
      itemsFound += 1; 
    }
    
    //Check if we found any items from our search amnd display them
    for(var x = 0; x < foundImageIndex.length; x++){
      // if 2 or less items are found reduce the size if the thumbnails for the sound images
      if(itemsFound <= 2){
        imageCard[foundImageIndex[x]].style.maxWidth = "250px";
        imageCard[foundImageIndex[x]].style.display = "flex";
        newMessage.style.display = "block";
        newMessage.style.backgroundColor = "#0A0903";
        newMessage.innerHTML = "Click image to learn more";
      } 

      else if(itemsFound > 2 && itemsFound <= 4){
        imageCard[foundImageIndex[x]].style.maxWidth = "70%";
        imageCard[foundImageIndex[x]].style.display = "flex";
        newMessage.style.display = "block";
        newMessage.style.backgroundColor = "#0A0903";
        newMessage.innerHTML = "Click image to learn more";
      }     

      // if more than 4 are  found just display the thumbnail with regular size
      else if(itemsFound > 4){
        imageCard[foundImageIndex[x]].style.display = "flex";
        newMessage.style.display = "block";
        newMessage.style.backgroundColor = "#0A0903";
        newMessage.innerHTML = "Click image to learn more";
      }

      else{
        console.log("Error occurred finding images")
      }
    }
    
  }

  window.getData = function(newTerm){
    // Clear previous searches
    searchTerm.splice(0, searchTerm.length);

    var setTerm = newTerm.toLowerCase();
        
    // Scroll down to the content
    window.scrollTo(0, 740);
    switch(setTerm){
  
      // is your just put a grade number in the search it will work but if
      // you put "grade" before  the number it wont work, so these statements 
      // account for that
      case "grade 9":
        searchTerm.push("9");
        break;  
  
      case "grade 10":
        searchTerm.push("10");
        break;    
  
      case "grade 11":
        searchTerm.push("11");
        break;
  
      case "grade 12":
        searchTerm.push("12");
        break;
  
      //Switch statements for teacher names
      //people might put mr./ms. or might just put the teachers name so two cases are need
      //for each teachers name 
  
      case "tsang":      
        searchTerm.push("mr.tsang")
        break;
  
      case "andrachuk":     
        searchTerm.push("mr.andrachuk");
        break;
  
      case "jokinen":     
        searchTerm.push("ms.jokinen");
        break;
  
      case "neub":     
        searchTerm.push("ms.neub");
        break;
  
      case "wilson":      
        searchTerm.push("mr.wilson");
        break;
  
      case "bryan":     
        searchTerm.push("mr.bryan");
        break;
  
      case "rozakis":      
        searchTerm.push("ms.rozakis");
        break;      
        
      default:
        // This detects whether the search enter was a teachers name and if so, it corrects the name of the teacher
        // to match the way we want.
        if(setTerm.includes('.')){
          var splitTerm = setTerm.split(". "); 
          var joinString = splitTerm.join("."); 
          this.console.log(joinString);
          this.searchTerm.push(joinString);
        }
        // Defualt case is to just search for whatever user enters in the search field
        else{
          this.searchTerm = newTerm.split(" ");
        }
        break;
    }
    searchImages();
  }

  // This is really important. It uses sessionStorage to temporary stores the search term in the browser's storage
  // from the other search bars. That is how we are able to determine what they searched for from the other pages.
  // The data is kepts until the browsers is closed.
  // So first check if there is a search term stored in the browser 
  if (sessionStorage.length > 0){
    //if so get the value of that term
    var returnSearch = sessionStorage.getItem('newTerm');
    // convert it into a string
    extSearch = returnSearch.toString();
    // pass it as a parameter for the getData function. In other words search for that item
    getData(extSearch);
  }  

});


// Just a button that jumps back to the top of the page
if(document.querySelector('.backToTop')){
  window.onscroll = function()
  {
      if(window.pageYOffset >= 1000)
      {
          document.querySelector('.backToTop').style.visibility="visible"
      }else
      {
          document.querySelector('.backToTop').style.visibility="hidden";
      }
  };
}


// var trigger = document.querySelectorAll(".gallery-lightboxes");
// var image = document.querySelectorAll(".gallery-lightbox");
// var btn = document.querySelectorAll(".close");
