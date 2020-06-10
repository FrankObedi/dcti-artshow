$.getJSON("../../api/submission.json", function(json) {
  console.log(json);
  for (let i = 0; i < json.length; i++) {
    var card = `
    <div class="card">
      <img class="card-img-top" src="${json[i].URL}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${json[i]['Art-Name']}</h5>  
      <p class="card-title">${json[i]['First-Name']} ${json[i]['Last-Name']}</p>
    </div>`
    
    $(".card-columns").append(card);
  }
});


