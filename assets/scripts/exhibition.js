$.getJSON("../../api/submission.json", function(json) {
  console.log(json);
  for (let i = 0; i < json.length; i++) {
    var card = `
    <div class="card">
      <img class="card-img-top" src="${json[i].URL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${json[i]['Art-Name']}</h5>  
        <p class="card-title">${json[i]['Name']}</p>
      </div>
    </div>`
    $(".card-columns").append(card);
  }
});

const filter = {
  school: ["Danforth CTI", "Greenwood SS"],
  
  teacher: ["Mr. Andrachuk", "Mr. Bryan", "Ms. Jokinen", "Ms. Neub", "Ms. Rozakis", "Mr. Tsang", "Mr. Wilson", "Another school", "Never taken course", "Staff"],
  
  grade: ["9", "10", "11", "12", "Staff"],
  category: ["Drawing", "Digital Painting", "Painting", "Photography", "Print", "Sculpture", "Other"],
  orientation: ["Horizontal", "Vertical"],
  theme: ["Culture", "Community", "Fiction", "Religous", "Social", "Values"],
  subject: ["Architecture", "Animal", "Landscape", "Narrative", "Nature", "Potrait", "Self-Potrait", "Still Life"],
  
  style: ["Abstract", "Documentary", "Graffiti", "Fauvism", "Figurative Art", "Fine Art", "Folk Art", "Modern Art", "Photography", "Pop Art", "Portraiture Art", "Realism", "Street Art", "Surrealism", "Other"],
  
  medium: ["Acrylic", "Charcoal", "Clay", "Digital", "Digital Photography", "Glass", "Ink", "Metal", "Oil","Pastel", "Pencil", "Watercolor", "Wood", "Other"]
}

