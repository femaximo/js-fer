function setup() {
    createCanvas(400, 400);
    background("blue")
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    
    if (mouseIsPressed) {
      triangle(mouseX, mouseY, mouseX+58, mouseY+20, mouseX+86,mouseY+75);
    }
  }
  