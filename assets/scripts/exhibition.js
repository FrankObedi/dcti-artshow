//Create Image cards when JSON data arrives and add appropriate classes to them

$.getJSON("../../api/csvjson.json", function(json) {
  console.log(json);
  let multAttr = ["theme", "style", "medium", "subject"];
  for (let i = 0; i < 40; i++) {
    let card = `
    <div id="${i}" class="card isotope-item ${json[i]['name']} ${json[i]['school']} ${json[i]['grade']} ${json[i]['teacher']} ${json[i]['artName']} ${json[i]['category']} ${json[i]['orientation']}">
      <img class="card-img-top" src="${json[i].URL}" title="${json[i]['artName']}" artist="${json[i]['name']}" statement="${json[i]['statement']}" alt="Image not found">
      <div class="card-body">
        <h5 class="card-title">${json[i]['artName']}</h5>  
        <p class="card-title">${json[i]['name']}</p>
      </div>
    </div>`
    $(".portfolio").append(card);
    for (let j = 0; j < 4; j++) {
      let classes= json[i][multAttr[j]].split(';');
      for (let k = 0; k < classes.length; k++){
        $(`#${i}`).addClass(classes[k]);
      }
    }    
  }
});

const filter = {
  category: ["Drawing", "Digital Painting", "Painting", "Photography", "Print", "Sculpture", "Other"],
  grade: ["9", "10", "11", "12", "Staff"],
  orientation: ["Horizontal", "Vertical"],
  school: ["Danforth CTI", "Greenwood SS"],
  teacher: ["Mr. Andrachuk", "Mr. Bryan", "Ms. Jokinen", "Ms. Neub", "Ms. Rozakis", "Mr. Tsang", "Mr. Wilson", "Another school", "Never taken course", "Staff"],
  
  medium: ["Acrylic", "Charcoal", "Clay", "Digital", "Digital Photography", "Glass", "Ink", "Metal", "Oil","Pastel", "Pencil", "Watercolor", "Wood", "Other"],
  style: ["Abstract", "Documentary", "Graffiti", "Fauvism", "Figurative Art", "Fine Art", "Folk Art", "Modern Art", "Photography", "Pop Art", "Portraiture Art", "Realism", "Street Art", "Surrealism", "Other"],
  subject: ["Architecture", "Animal", "Landscape", "Narrative", "Nature", "Potrait", "Self Potrait", "Still Life"],
  theme: ["Culture", "Community", "Fiction", "Religous", "Social", "Values"]
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const selectItems = ["school", "teacher", "grade", "category", "orientation"];
const checkboxItems = ["theme", "style", "medium", "subject"];

//Add filter dynamically
for (let prop in filter) {
  if (selectItems.includes(prop)) {
    let item = `
    <div class="form-group">
      <label for="${prop}">${capitalizeFirstLetter(prop)}</label>
      <select class="custom-select filter-select" id="${prop}">
        <option value="" selected>All</option>`;
    for (let val of filter[prop]) {
      item += `
        <option value=".${val.replace(/ /g,'').replace("Mr.", "").replace("Ms.", "")}">${val}</option>`
    }
    item += `
      </select>
    </div>`
    $(".filter").append(item);
  }
  else {
    let item = `
    <div class="card filter-item">
      <h5 class="card-header">${capitalizeFirstLetter(prop)}</h5>
      <div class="card-body">`
    for (let val of filter[prop]) {
      item += `
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" name="${prop}" id="${prop}-${val}" value=".${val.replace(/ /g,'')}">
          <label class="custom-control-label" for="${prop}-${val}">${val}</label>
        </div>`
    }
    item += `
      </div>
    </div>`
    $(".filter").append(item);
  }
}

//Isotope Disabling Layout
Isotope.Item.prototype._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };
  this.sortData = {};
};

Isotope.Item.prototype.layoutPosition = function() {
  this.emitEvent( 'layout', [ this ] );
};

Isotope.prototype.arrange = function( opts ) {
  // set any options pass
  this.option( opts );
  this._getIsInstant();
  // just filter
  this.filteredItems = this._filter( this.items );
  // flag for initalized
  this._isLayoutInited = true;
};

// layout mode that does not position items
Isotope.LayoutMode.create('none');


// init Isotope

window.onload = function () {
  var $grid = $('.portfolio').isotope({
    itemSelector: '.isotope-item',
    //layoutMode: 'none',
    transitionDuration: 0
  });
  
  var $selects = $('.filter-select');
  var $checkboxes = $('input');

  $selects.add( $checkboxes ).change( function() {
    // map input values to an array
    var exclusives = [];
    var inclusives = [];
    // exclusive filters from selects
    $selects.each( function( i, elem ) {
      if ( elem.value ) {
        exclusives.push( elem.value );
      }
    });
    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
      // if checkbox, use value if checked
      if ( elem.checked ) {
        inclusives.push( elem.value );
      }
    });
  
    // combine exclusive and inclusive filters
  
    // first combine exclusives
    exclusives = exclusives.join('');
  
    var filterValue;
    if ( inclusives.length ) {
      // map inclusives with exclusives for
      filterValue = $.map( inclusives, function( value ) {
        return value + exclusives;
      });
      filterValue = filterValue.join(', ');
    } else {
      filterValue = exclusives;
    }3
    
    console.log(filterValue );
    $grid.isotope({ filter: filterValue })
    $(".portfolio").removeAttr("style");

  });


  //Magnific Popup code  
  $('.portfolio').magnificPopup({
    delegate: ':not(div[style="display: none;"]) img', 
    type: 'image', 
    closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery:{
      enabled:true
    },
    image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; '+ item.el.attr("artist") + `<small>${item.el.attr('statement')}</small>`;
			}
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out', // don't foget to change the duration also in CSS
    },
    callbacks: {
      elementParse: function(item) { 
        item.src = item.el.attr('src'); 
      }
    }
  });
} 

