 
btn.addEventListener('click', change);

var pics = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg"
];


function change() {
  var randomize = pics[Math.floor(Math.random() * pics.length)];

document.body.style.backgroundImage  = `url('${randomize}')`;

}


