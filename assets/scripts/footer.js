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
  $("#name-select").append(item);
});

let messages = ["Awesome!", "Clever concept.", "Good Job!", "I love the choice of colours.", "Message of the piece is clearly communicated.", "Professional calibre work.", "Strong attention to details.", "This is really interesting and creative.", "This is beautiful.", "Woah, I'm amazed!", "Very humorous.", "Very inspiring.", "Your piece really made me think."];

let item='';
for (let mes of messages) {
  item += `
  <option value="${mes}">${mes}</option>` 
};
$("#message-select").append(item);

