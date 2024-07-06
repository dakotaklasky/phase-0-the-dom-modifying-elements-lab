// Write your code here!

//remove main id

//newHeader variable that points to an <h1> node
//with id of victory
//and text Dakota is the champion

const m = document.getElementById("main");
m.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "DAKOTA KLASKY is the champion";
document.body.append(newHeader);


