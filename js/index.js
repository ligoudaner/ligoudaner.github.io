// SETTINGS
const ANIMATION_TIME = 1500; // TIME BETWEEN CHANGES (MILISECONDS)

const COLORS = ["255, 105, 54", // "150, 166, 55"
              "244, 52, 107", // "111, 124, 21"
              "48, 222, 138", // "238, 248, 166"
              "135, 243, 52",
              "221, 221, 221"]; // "221, 221, 221"

// PROPERTIES
const squares = document.getElementsByClassName("square");

var ww = window.innerWidth; // WINDOW WIDTH
var wh = window.innerHeight; // WINDOW HEIGHT

var size = 0; // CURRENT SQUARE SIZE
var sizeLimit = 80; // SQUARE SIZE LIMIT

function generateSquare(square) {

  var x = 0,
      y = 0,
      c = 0,
      color = "",
      opacity = "";

  size = Math.round((Math.random() * size) + 10);
    
  x = Math.round((Math.random() * ww) + 0) - size;
  y = Math.round((Math.random() * wh) + 0) - size;
    
  c = Math.round((Math.random() * (COLORS.length - 1)) + 0);
  color = COLORS[c];
  opacity = Math.round((Math.random() * 10) + 1) / 10;

  squares[square].style.border = "15px solid rgba(" + color + ", " + opacity + ")";
    
  squares[square].style.borderRadius = Math.round(size / 3) + "px";
    
  squares[square].style.width = size + "px";
  squares[square].style.height = size + "px";

  squares[square].style.top = y + "px";
  squares[square].style.left = x + "px";
 
}

function init() {
  for(i = 0; i < squares.length; i++) {
    generateSquare(i);
  }
  
  setInterval(function() {
    var l = squares.length - 1;
    var nr = Math.round((Math.random() * l - 1) + 1);
    for(i = 0; i < nr; i++) {
      var a = Math.round((Math.random() * l - 1) + 1);
      generateSquare(a);
    }
  }, ANIMATION_TIME);
}

init();
