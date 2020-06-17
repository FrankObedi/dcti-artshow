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











// Begin button code

const beginWork = () => {

  const begin = document.querySelector('.donationHomeBeginButton');
  const donationbody = document.querySelector('.donationBody');
  const header = document.querySelector('.donationHomeCardHeader');
  const prompt = document.querySelector('.donationHomeCardPrompt');
  const backButton = document.querySelector('.donationBodyBack');
  const donationBoxes = document.querySelectorAll('.donationBodyBox');
  const contentheader = document.querySelectorAll('.contentHeader');
  
  // console.log(header.style.animation == false);
  // if(header.style.animate == false){
    // console.log("Betiel Ghirmay is the most gorgeous woman ever :))))");

    // prompt.classList.toggle('promptOpen');
    // begin.classList.toggle('beginOpen');
  header.addEventListener('animationend', () => {
    // console.log("Betiel Ghirmay is the most gorgeous woman ever :))))");


    prompt.classList.toggle('promptOpen');
    begin.classList.toggle('beginOpen');

  });

  // }
  header.addEventListener('animationstart', () => {
  
    // if(prompt.classList.contains('promptOpen') && begin.classList.contains('beginOpen')){


    prompt.classList.remove('promptOpen');
    begin.classList.remove('beginOpen');

  // }

    });
  begin.addEventListener('click', () => {


    donationbody.classList.toggle('donationBodyOpen');


    donationBoxes.forEach(box => {


      box.style.animation = 'donationBodyBoxEntrance 0.8s ease forwards 1s';
      // console.log("Betty Ghirmay is the most gorgeous woman ever :)))))))");
      // box.firstElementChild.firstElementChild.style.animation = 'clipRevealHeader 1s ease forwards';
      

    });





  });

  backButton.addEventListener( 'click', () => {


    donationbody.classList.remove('donationBodyOpen');
 

    // stopped animations

contentheader.forEach(heading => {



heading.parentElement.nextElementSibling.nextElementSibling.style.animation = '';
// heading.nextElementSibling.style.animation = '';
heading.nextElementSibling.style.animation = '';

heading.nextElementSibling.nextElementSibling.style.animation = '';
heading.classList.remove('headingOpen');







});







  });




}


const headerMove  = () => {


  const header = document.querySelectorAll('.contentHeader');
  const icons = document.querySelectorAll('.contentHeader i');
  const contentFace = document.querySelectorAll('.contentFace');
  const linkBack = document.querySelectorAll('.linkBack'); 

  header.forEach(heading => {
  console.log(heading)
    heading.addEventListener('click', () => {

      // console.log("Betty Ghirmay is the most gorgeous woman ever :)))");

      heading.classList.toggle('headingOpen');

      // heading.parentElement.nextElementSibling.nextElementSibling.classList.toggle('contentFaceOpen');
      console.log(heading.parentElement.nextElementSibling.classList);
      if(heading.parentElement.nextElementSibling.nextElementSibling.style.animation){
        heading.parentElement.nextElementSibling.nextElementSibling.style.animation = '';
        // heading.nextElementSibling.style.animation = '';
        heading.nextElementSibling.style.animation = '';

        heading.nextElementSibling.nextElementSibling.style.animation = '';

        // heading.nextElementSibling.nextElementSibling.style.animation = 'contentReadMoreAppear 1s ease reverse 1s';

      } else{
        heading.parentElement.nextElementSibling.nextElementSibling.style.animation = 'contentFaceOpen 1s ease forwards 0.5s';
        heading.nextElementSibling.style.animation = 'contentPromptAppear 1s ease forwards 1s';
        heading.nextElementSibling.nextElementSibling.style.animation = 'contentReadMoreAppear 1s ease forwards 1.5s';
      }
      // TroubleShooting
      console.log( heading.parentElement.nextElementSibling.nextElementSibling);


    });


      heading.nextElementSibling.nextElementSibling.addEventListener( 'click' , () => {
          console.log("Betiel Ghirmay is the most gorgeous woman ever and the greatest ever at Danforth :)))");
          heading.parentElement.nextElementSibling.classList.toggle('cardLinksActivated');


    });

    linkBack.forEach(link => {

      link.addEventListener('click', () => {


        heading.parentElement.nextElementSibling.classList.remove('cardLinksActivated');
        




      });






    });

  });

  




  // }




}


//   const linkHeader = () => {

//     const header = document.querySelectorAll('.linkFamily');
//     // console.log(header[0].parentElement);

//     // console.log(header[0].parentElement.parentElement);
  
//   header.forEach(heading => {

//       heading.addEventListener('click', () => {

//         if(heading.parentElement.classList.contains('meow')){
      
//           heading.parentElement.classList.remove('meow');

//         } else{

//           heading.parentElement.classList.toggle('meow');

//         }


//         if(heading.parentElement.parentElement.classList.contains('linkGroupAltered')){
       
//           if(heading  == header[0]){
       
//             heading.parentElement.nextElementSibling.classList.remove('ouch');         
       
//           } else { 

//             heading.parentElement.nextElementSibling.classList.remove('ouch');         
//             heading.parentElement.nextElementSibling.style.opacity  = '0';         
          
//           }
       
       
//           heading.parentElement.parentElement.classList.remove('linkGroupAltered');

//         } else {
       
//           heading.parentElement.parentElement.classList.toggle('linkGroupAltered');
  
//             if(heading == header[0]){ 
            
//               heading.parentElement.nextElementSibling.classList.toggle('ouch');
            
//             } else{ 

//               heading.parentElement.nextElementSibling.classList.toggle('ouch');
//               heading.parentElement.nextElementSibling.style.opacity = '0.4';
            

//             }
      
      

//         }
      
      




//       });

//     });

// }




// declarations

beginWork();
headerMove();
