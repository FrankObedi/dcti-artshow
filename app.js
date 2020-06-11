const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
})

app.get("/exhibition", function (req, res) {
    res.sendFile(`${__dirname}/exhibition.html`);

})

app.listen(3000, function () {
    console.log("Example app listening on port 3000");
})

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







