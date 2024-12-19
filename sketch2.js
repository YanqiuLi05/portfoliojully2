const sketch = (p) => {
  let x = 0;
  let y = 0;
  let M = 0;
  let N = 0;
  let o = 0;
  let pVal = 0;

  p.setup = () => {
    const cnv = p.createCanvas(400, 300);
    cnv.parent('p5-project2-canvas-container'); 
  };

  p.draw = () => {
      p.background("black");

      p.push();
      p.rectMode(p.CENTER);

      let rect1 = p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2) * 2; // Distance of the mouse from canvas center
      rect1 = p.constrain(rect1, 40, 350);

      if (rect1 > 200) {
          p.fill(255, 200 - p.mouseX + o, 200 - p.mouseY + pVal);
      } else {
          p.fill("white");
      } // Color changes

      p.rect(p.width / 2, p.height / 2, rect1 + x, rect1 + y, 30);

      p.pop(); // The biggest square

      // Eyes and mouth
      p.push();
      p.fill("black");
      p.push();

      p.rectMode(p.CENTER);
      let centerX = p.width / 2;
      let centerY = p.height / 2;
      let distance = p.dist(p.mouseX, p.mouseY, centerX, centerY);

      let W1 = p.constrain(1 + distance, 0, 20);
      let H1 = p.constrain(6 + distance, 0, 120);
      p.rect(130, 180, W1 + x, H1 + y); // Left eye
      p.rect(270, 180, W1 + x, H1 + y); // Right eye

      let W2 = p.constrain(10 + distance, 10, 50);
      let H2 = p.constrain(20 + distance, 10, 100);

      p.push();
      p.translate(200, 300);
      p.rotate(p.radians(180));
      p.arc(0, 0, W2 + x, H2 + y, 0, p.PI, p.CHORD); // Mouth
      p.pop();

      p.pop();
      p.pop();
  };

  p.mouseMoved = () => {
      if (p.mouseX > 200) {
          x = p.random(1, 20);
      }
      if (p.mouseY > 200) {
          y = p.random(1, 20);
      }
  };

  p.mousePressed = () => {
      o = p.random(100, 225);
      pVal = p.random(100, 225);
  };
};

new p5(sketch);
