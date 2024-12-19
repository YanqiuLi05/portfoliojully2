//move your mouse around to feed it

function setup() {
    const cnv = createCanvas(400, 600);
    cnv.parent("p5-project4-canvas-container");
  }
  
  function draw() {
    background("#FF9800");
   
    
  strokeWeight(0)
    push()
    blendMode(HARD_LIGHT)
    drawEllipse(140,350,-55)
    drawEllipse(260,350,55)
    drawButterflyBody()
     // drawBirdHead()
    drawRobotbody()
   pop()
    let x = map(mouseX, 0, width, 20, 80, true);
    let y = map(mouseY, 0, height, 30, 80, true);
    drawFriedChicken(x,y);//control the size of the fried chicken by moving mouse
   push()
     blendMode(HARD_LIGHT)
    drawBirdHead()
    drawButterflyLeg()
    pop()//each part of the birdman
  
    /*push()
    clip(mask);
    ellipse(180,370,90,200)
    function mask() {
    ellipse(220,370,90,200)
  }
    pop()*/
   
  
  }
  function drawEllipse(a,b,angle){
     push()
    fill("blue")
    push()
    //translate(140,350);
    translate(a,b);
    //rotate(radians(-55)); 
    rotate(radians(angle));  
    ellipse(0,0,300,150,200);
    pop()
    /*push()
    translate(260,350);
    rotate(radians(55));  
    ellipse(0,0,300,150,200);
    pop()*/
    pop()
  }//the wings of the lower body
  
  function drawButterflyBody(){
    push()
    fill(137, 0, 21)
    clip(mask);
    ellipse(180,370,90,200)
    function mask() {
    ellipse(220,370,90,200)
  }
    pop()
    
  }//lower body
  
  function drawRobotbody(){
    push()
    fill(137, 0, 21)
    quad(100,200,300,200,280,350,120,350);
    pop()
    }//upper body
  
  function drawBirdHead(){
    push()
    fill("blue")
    circle(200,150,130);
    pop()
    push()
    fill("orange")
    triangle(100, 170, 150, 170, 150, 140);
    pop()
    push()
    fill("white")
    circle(190,140,30)
    pop()
    push()
    fill("red")
    circle(190,140,25)
    pop()
  }//the head of the birdman
  
  function drawButterflyLeg(){
    push()
    strokeWeight(2)
    line(180,400,150,450);
    line(150,450,185,550);
    line(220,400,250,450);
    line(250,450,215,550);
    pop()
  }//legs of the lower body
  
  function drawFriedChicken(x,y){
    
    rect(100,140,10,40)
    circle(100,180,10)
    circle(110,180,10)
     push()
    fill("#FF4B00")
    ellipse(105,130,x,y) 
    pop()
  
  }//fried chicken 