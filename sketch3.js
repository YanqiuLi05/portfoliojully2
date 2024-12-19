//The apple will slowly turn brown every 15 seconds and then start from a fresh new apple again 
function setup() {
    let cnv = createCanvas(600, 600);
    cnv.parent('p5-project3-canvas-container');
  }
  
  function draw() {
    background(198, 230, 214);
    let secondsIntoCycle = millis() / 1000 % 15; 
    let brownFactor = map(secondsIntoCycle, 0, 15, 0, 1);
  
    if (secondsIntoCycle > 15) {
      brownFactor = 0;
    }
  
    
  //apple turns back to fresh every 15 seconds
     push();  
    fill(	0, 154, 90)
    strokeWeight(0)
    translate(340, 120);  
    rotate(radians(20));  
    ellipse(0, 0, 80, 110);  
    pop();  //apple leaf 🍃 
    
    push();
    fill(101, 67, 33);
    strokeWeight(0);
    triangle(270, 65, 325, 220, 290, 60);
    pop();//branch of the apple
    
   
    
  push()
  strokeWeight(0)
  fill(255, 77, 77)
    push();  
    translate(220, 300);  
    rotate(radians(-10));  
    ellipse(0, 0, 320, 400);  
  pop(); //the left outside layer of the apple 
    
  push();  
    translate(380, 300);  
    rotate(radians(10));  
    ellipse(0, 0, 320, 400);  
    pop();  //the right outside layer of the apple
  pop()
  
  
    
  push();
    fill(255,255,197)
    push(); 
  strokeWeight(0);
    push();  
    translate(220, 300);  
    rotate(radians(-10));  
    ellipse(0, 0, 300, 380);  
    pop(); //the left side of the apple 
    
    push();  
    translate(380, 300);  
    rotate(radians(10));  
    ellipse(0, 0, 300, 380);  
    pop();  //the right side of the apple
  pop();
    
    pop();
    
    push();
    fill(lerpColor(color(255,255,197), color(150, 100, 50), brownFactor));
  strokeWeight(0);
    push();  
    translate(220, 300);  
    rotate(radians(-10));  
    ellipse(0, 0, 300, 380);  
    pop(); //the left side of the apple(colored)
    
    push();  
    translate(380, 300);  
    rotate(radians(10));  
    ellipse(0, 0, 300, 380);  
    pop();  //the right side of the apple(colored)
  
    
     push();
     strokeWeight(0);
    clip(mask);
    fill(101, 67, 33);
    ellipse(340,300,40,60);
    ellipse(280,300,40,60);
    function mask() {
    ellipse(330,300,40,60);
    ellipse(270,300,40,60); 
    }
   pop();//apple seeds 
  
   
  
  }