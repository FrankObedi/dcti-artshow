$.getJSON("../../api/csvjson.json", function(json) {
  let count = {};
  let name = new Set();
  for (let i = 0; i < json.length; i++) {
    if (json[i]['name'] in count) {
      count[json[i]['name']]++;
    } 
    else {
      count[json[i]['name']]=1;
    }
  }
  
  for (let i = 0; i < json.length; i++) {

    if (!name.has(json[i]['name'])) {
      name.add(json[i]['name']);
      let card = `
      <div id="${i}" class="card text-center">
        <h5 class="card-header">${json[i]['name']}</h5>
        <div class="card-body">
          <p class="card-text">${json[i]['school'].replace('CTI', ' CTI').replace('SS', ' SS')}</p>`
    
      if (json[i]['grade'] == 'Staff') {
        card += `
            <p class="card-text">Submissions: ${count[json[i]['name']]}</p>
          </div>
        </div>`
        $(".staff").append(card);
      }
      else {
        card += `
            <p class="card-text">Grade: ${json[i]['grade']}</p>
            <p class="card-text">Submissions: ${count[json[i]['name']]}</p>
          </div>
        </div>`
        $(".student").append(card);
      }
    }
  }
});

window.onload = function () {
  let bricklayerStaff = new Bricklayer(document.querySelector('.staff'));
  let bricklayerStu = new Bricklayer(document.querySelector('.student'));
  let bricklayerDev = new Bricklayer(document.querySelector('.dev'));
}