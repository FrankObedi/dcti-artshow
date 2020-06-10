// var firstName = new Set(), lastName = new Set();
var First = []; 
var Last = [];
$.getJSON("../../api/submission.json", function(json) {


  for(let i = 0; i < json.length; i++){
    First[i] = json[i]['First-Name'];
    Last[i] = json[i]['Last-Name'];
    // firstName[i] = json[i]['First-Name'];
  }

// console.log(First);

// console.log(Last);






    for(let i = 0; i < First.length; i++){
      
      for(let j = i+1; j < First.length; j++){
   
        if(First[j] == 1){
          First[j] = '1';
// break;
        }  else if(First[j] === First[i]){
           
            First.splice(j, 1, '1');
            Last.splice(j, 1, '1');
            // break;
          }

        }

     }

    //  console.log(First);
    //  console.log(Last);
     // for(let i = 0; i < First.length; i++){

    //   if(First[i] == '1'){
    //     First.splice(i,1);
    //     Last.splice(i,1);


    //   }

    // }

    var firstFilter = First.filter( FirstName => FirstName != 1 );
    var lastFilter = Last.filter( LastName => LastName  != 1);

  // console.log(firstFilter);
  // console.log(lastFilter);
 
  for(let i = 0; i < firstFilter.length; i++){
    const optionBox = document.querySelector('.optionBox');
    const option = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

// option attributes
    option.setAttribute('class', 'option');

// input attributes
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'category');
    input.setAttribute('class', 'radio');
    input.setAttribute('id', First[i]);
//  label attributes
    label.setAttribute('for', firstFilter[i]);
    label.innerHTML = firstFilter[i] + " " + lastFilter[i];
    // console.log(label);


    option.appendChild(input);
    option.appendChild(label);
    optionBox.appendChild(option);

  } 


    selectMenu();


  });



const navOpen = () => {
  const burger = document.querySelector('.burger');
  const list = document.querySelector('.nav-list');
  const links = document.querySelectorAll('.nav-list li');
  const stay = document.querySelector('.text h1');
  // const icons                      
  burger.addEventListener('click', () => {

    list.classList.toggle('nav-Open');


    stay.classList.toggle('remove');





    links.forEach((Link, index) => {

      if (Link.style.animation) {

        Link.style.animation = '';


      } else {

        Link.style.animation = 'navAnime 1s ease forwards 0.5s';

      }
    });



    burger.classList.toggle('toggle');




  });


}

const navChange = () => {

  const nav = document.querySelector('.nav-bar');
  const direct = document.querySelector('.direct');
  const form = document.querySelector('.contactForm');
  const donation = document.querySelector('.practice');
  const before = document.querySelector('.practiceParagraph::before');
  const after = document.querySelector('.practiceParagraph::after');
  const user = document.querySelector('.fa-user');
  const envelope = document.querySelector('.fa-envelope');

  console.log(donation);
  window.addEventListener('scroll', () => {

    nav.classList.toggle('navChange', window.scrollY > 0);
    if (direct.className == 'gone' && window.scrollY < 50) {
      direct.classList.remove('gone');
    } else {
      direct.classList.toggle('gone', window.scrollY > 50);
    }

    form.classList.toggle('up', window.scrollY > 60);
    if (form.style.animation) {
      form.style.animation = '';
    

    } else {
      form.style.animation = 'boxy 1s ease forwards 1s';
     

      // needs work, also work on smooth scrolling    
    }
 
    // user.classList.toggle('crow');
    // envelope.classList.toggle('crow');
 
   
    donation.classList.toggle('houdini', window.scrollY > 800);


  });
}


const socialBar = () => {

  const icons = document.querySelectorAll('.icons li');
  const arrow = document.querySelector('.arrow');
  icons.forEach((icon) => {
    // console.log('Betty Ghirmay is the most gorgeous woman ever :)');
    icon.style.animation = 'iconAnime 2s ease forwards 2s';


  });



}


const animatedForm = () => {
  const arrowsR = document.querySelectorAll('.fa-arrow-right');
  const arrowsL = document.querySelectorAll('.fa-arrow-left');
  arrowsR.forEach(arrow => {

    arrow.addEventListener('click', () => {

      const parent = arrow.parentElement;
      const nextElement = parent.nextElementSibling;
      // console.log(nextElement);
      parent.classList.add('inactive');
      parent.classList.remove('active');
      nextElement.classList.add('active');


    });

  });


  arrowsL.forEach(arrow => {

    arrow.addEventListener('click', () => {

      const parent = arrow.parentElement;
      const previousElement = parent.previousElementSibling;

      parent.classList.add('inactive');
      parent.classList.remove('active');
      previousElement.classList.add('active');


    });


  });



}

const selectMenu = () => {

  const selected = document.querySelector('.selected');
  const selectedInner = document.querySelector('.selected h2');
  const optionBox = document.querySelector('.optionBox');
  const options = document.querySelectorAll('.option');
  const searchBox = document.querySelector('.searchBox input');
  const back = document.querySelector('.fa-chevron-left');

  selected.addEventListener('click', () => {


    searchBox.value = '';
    filterList('');

    optionBox.classList.toggle('open');
    // back.classList.add('IAMove');

    if (optionBox.classList.contains('open')) {

      searchBox.focus();

    }

    // onsecuritypolicyviolation. checkout later

  });

  back.addEventListener('click', () => {


    optionBox.classList.remove('open');


  });

  options.forEach(o => {
    o.addEventListener('click', () => {

      selectedInner.innerHTML = o.querySelector("label").innerHTML;
      optionBox.classList.remove('open');

    });

  });


  searchBox.addEventListener('keyup', function (e) {
    filterList(e.target.value);

  });


  const filterList = searchTerm => {

    searchTerm = searchTerm.toLowerCase();

    options.forEach(option => {
      let label = option.firstElementChild.nextElementSibling.innerHTML.toLowerCase();

      if (label.indexOf(searchTerm) != -1) {

        option.style.display = 'block';

      } else {
        option.style.display = 'none';

      }


    });

  }

}


const linkAnimate = () => {
  const linkFamilies= document.querySelectorAll('.linkFamily');
    
    linkFamilies.forEach( link => {
      link.addEventListener(  'click' , () => {

        link.classList.toggle('initiated');
        // link.parentElement.style.animate = 'skewAnimate 1s ease forwards 1s';
      }); 

      
  });
    

}


const linkHeader = () => {

    const header = document.querySelectorAll('.linkFamily');
    // console.log(header[0].parentElement);
 
    // console.log(header[0].parentElement.parentElement);
    
  header.forEach(heading => {

      heading.addEventListener('click', () => {

        if(heading.parentElement.classList.contains('meow')){
        
          heading.parentElement.classList.remove('meow');

        } else{

          heading.parentElement.classList.toggle('meow');

        }


        if(heading.parentElement.parentElement.classList.contains('linkGroupAltered')){
         
          if(heading  == header[0]){
         
            heading.parentElement.nextElementSibling.classList.remove('ouch');         
         
          } else { 

            heading.parentElement.nextElementSibling.classList.remove('ouch');         
            heading.parentElement.nextElementSibling.style.opacity  = '0';         
            
          }
         
         
          heading.parentElement.parentElement.classList.remove('linkGroupAltered');

        } else {
         
          heading.parentElement.parentElement.classList.toggle('linkGroupAltered');
    
            if(heading == header[0]){ 
              
              heading.parentElement.nextElementSibling.classList.toggle('ouch');
              
            } else{ 

              heading.parentElement.nextElementSibling.classList.toggle('ouch');
              heading.parentElement.nextElementSibling.style.opacity = '0.4';
              

            }
        
        

        }
        
        




      });

    });

}


  const readMore = () => {

    const readmore = document.querySelectorAll('.linkReadMore');
    // const linkCard = document.querySelector('.linkCard');
    // const back = document.querySelector('.linkCardBack');
    // console.log(readmore[0].nextElementSibling);

    // console.log();

    readmore.forEach( rm => {
      rm.addEventListener('click', () => {
        rm.nextElementSibling.classList.toggle('read');     
        // readmore.lastChild.classList.toggle('read');
        rm.nextElementSibling.lastElementChild.style.animation = 'back 1s ease forwards';
       
       
        rm.nextElementSibling.lastElementChild.addEventListener('click',() => {

          if(rm.nextElementSibling.lastElementChild.style.animation)   {
            rm.nextElementSibling.lastElementChild.style.animation = ' ';
          }

          rm.nextElementSibling.classList.remove('read');
    
        });


      });

    });

// add forEach when you add the nextLink card
    // back.addEventListener('click',() => {


    //   if(back.style.animation)   {
    //     back.style.animation = ' ';
    //   }
    //   linkCard.classList.remove('read');

    // });


  }







// Called Functions
linkHeader();
navChange();
navOpen();
socialBar();
animatedForm();
readMore();
linkAnimate();