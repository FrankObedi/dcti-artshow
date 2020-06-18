$.getJSON("/api/csvjson.json", function(json) {  
    var name = new Set();
    for (let entry of json) {
      name.add(entry.name.trim());
    }
    let item = "";
    for (let entry2 of name) {
      item += `
        <option value="${entry2}">${entry2}</option>`
    }
    item += `
      </select>`
    $("#name-select").append(item);
});

let messages = ["Awesome!", "Good, but there's room for improvement", "I'd like to buy your art"];

