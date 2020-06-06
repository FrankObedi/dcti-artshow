


// const searchFriends = () => {



//   for(var i = 0; i < arrayJson.length; i++){
  
//     // console.log( arrayJson[i]['First Name']);
//     const optionBox = document.querySelector('.optionBox');
//     const option = document.createElement('div');
//     const input = document.createElement('input');
//     const label = document.createElement('label');
    
//     if(i == 0) {

//             // setup label for optionBox
//             option.setAttribute('class', 'option');
//             // setup input button for option
//             input.setAttribute('type', 'radio');
//             input.setAttribute('name', 'category');
//             input.setAttribute('class', 'radio');
//             input.setAttribute('id', arrayJson[i]['First Name']);
        
//             // setup label for option
//             label.setAttribute('for', arrayJson[i]['First Name']);
//             label.innerHTML = arrayJson[i]['First Name'] + " " + arrayJson[i]['Last Name'];
        
//             // console.log(input);
        
//             // console.log(label);
//             option.appendChild(input);
//             option.appendChild(label);
//             optionBox.appendChild(option);
//             console.log(optionBox);
        
//     }
    
//     else{


//         if(arrayJson[i]['First Name'] != arrayJson[i-1]['First Name']){
//             // setup label for optionBox
//             option.setAttribute('class', 'option');
//             // setup input button for option
//             input.setAttribute('type', 'radio');
//             input.setAttribute('name', 'category');
//             input.setAttribute('class', 'radio');
//             input.setAttribute('id', arrayJson[i]['First Name']);
        
//             // setup label for option
//             label.setAttribute('for', arrayJson[i]['First Name']);
//             label.innerHTML = arrayJson[i]['First Name'] + " " + arrayJson[i]['Last Name'];
        
//             // console.log(input);
        
//             // console.log(label);
//             option.appendChild(input);
//             option.appendChild(label);
//             optionBox.appendChild(option);
//             // console.log(optionBox);
//             }
//           }


//     }
   



// }





$.getJSON("../../api/submission.json", function(json) {
  console.log(json);

  const arrayFNPrime = [];
  const arrayLNPrime = [];
  
  for (let i = 0; i < json.length; i++) {

  arrayFNPrime[i] = json[i]['First-Name']
  arrayLNPrime[i] = json[i]['Last-Name']
  

}
  console.log(arrayFNPrime.entries);



    //   var card = `
    // <div class="card">
    //   <img class="card-img-top" src="${json[i].URL}" alt="Card image cap">
    //   <div class="card-body">
    //     <p class="card-text">${json[i]['First-Name']} ${json[i]['Last-Name']}</p>
    //     <p class="card-text">${json[i]['Artist-Statement']}</p>
    // </div>`
    
    // $(".card-columns").append(card);

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
           
            if (Link.style.animation){

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
    const after =  document.querySelector('.practiceParagraph::after');
    
    console.log(donation);
    window.addEventListener('scroll', ()=> {

        nav.classList.toggle('navChange', window.scrollY > 0);
        if(direct.className == 'gone' && window.scrollY < 50){direct.classList.remove('gone');}
        else{direct.classList.toggle('gone', window.scrollY > 50);}
        
        form.classList.toggle('up', window.scrollY  > 60 );
        if(form.style.animation) {
            form.style.animation ='';

        } else{
        form.style.animation = 'boxy 1s ease forwards 1s';
        // needs work, also work on smooth scrolling    
        }


        donation.classList.toggle('houdini', window.scrollY > 800);
      

    });
}


    const socialBar = () =>{

        const icons = document.querySelectorAll('.icons li');
        const arrow = document.querySelector('.arrow');
        icons.forEach( (icon) => {
            // console.log('Betty Ghirmay is the most gorgeous woman ever :)');
            icon.style.animation = 'iconAnime 2s ease forwards 2s';


        });

        

    }


    const animatedForm = ()=> {
        const arrowsR = document.querySelectorAll('.fa-arrow-right');
        const arrowsL = document.querySelectorAll('.fa-arrow-left');
        arrowsR.forEach( arrow => {

            arrow.addEventListener( 'click', ()=>{

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

        selected.addEventListener( 'click', () => {

        
            searchBox.value = '';
            filterList('');

            optionBox.classList.toggle('open');
            // back.classList.add('IAMove');
 
            if(optionBox.classList.contains('open')) {

                searchBox.focus();

            }

            // onsecuritypolicyviolation. checkout later

        });

        back.addEventListener( 'click', () => {


            optionBox.classList.remove('open');


        });

        options.forEach( o => {
            o.addEventListener('click', () => {
            
                selectedInner.innerHTML = o.querySelector("label").innerHTML;
                optionBox.classList.remove('open');

            });
      
        });


        searchBox.addEventListener('keyup', function(e) {
            filterList(e.target.value);

        });


        const filterList = searchTerm => {

        searchTerm = searchTerm.toLowerCase();

        options.forEach( option => {
            let label = option.firstElementChild.nextElementSibling.innerHTML.toLowerCase();

            if(label.indexOf(searchTerm) != -1){

                option.style.display = 'block';

            } else {
                option.style.display = 'none';

            }




        });

        }



    }
 
// const scroll = () =>{

//     const trigger = document.querySelector('.arrow');

//     trigger.addEventListener('click', () => {

//         document.getElementById('donation').scrollIntoView({

//             behaviour: 'smooth'
//         });



//     });


// }

const copyCat = () => {

    const options = document.querySelectorAll('.option');
    
    for( var i = 0; i < options.length; i++){
        // console.log(options[i].firstElementChild.nextElementSibling.innerHTML);
        for(var j = 1; j < options.length; j++){

        //     if(options[j].firstElementChild.nextElementSibling.innerHTML == options[i].firstElementChild.nextElementSibling.innerHTML )
        //    { 
        //        options[j].remove();
        
        // }

        }

    }


    



}


searchFriends();
copyCat();
navChange();
navOpen();
socialBar();
animatedForm();
selectMenu();
// scroll();



