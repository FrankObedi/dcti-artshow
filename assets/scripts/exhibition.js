$.getJSON("../../api/submission.json", function(json) {
  console.log(json);
  for (let i = 0; i < json.length; i++) {
    var card = `
    <div class="card">
      <img class="card-img-top" src="${json[i].URL}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${json[i]['First-Name']} ${json[i]['Last-Name']}</p>
        <p class="card-text">${json[i]['Artist-Statement']}</p>
    </div>`
    
    $(".card-columns").append(card);
  }
});


// git is shit
var a = 25;



// Hi Souradeep

//This is the final change for shafees connection