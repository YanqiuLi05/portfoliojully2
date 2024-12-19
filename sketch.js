const sketch = (p) => {
  p.setup = () => {
    const cnv = p.createCanvas(400, 300);
    cnv.parent('p5-canvas-container');
  };

  p.draw = () => {
      p.background(220);
      p.fill("white");
      p.rect(0, 220, 400, 180);
      p.fill('rgba(0,126,255,0.98)');
      p.rect(0, 0, 400, 280);

      // The shadow
      p.push();
      p.strokeWeight(0);
      p.fill(0, 0, 0, 20);
      p.ellipse(200, 360, 270, 120);
      p.pop();

      // The first push marks the entire ring
      p.push();
      p.angleMode(p.DEGREES);
      p.translate(40, 0);
      p.rotate(10);

      // The front of the ring
      p.push();
      p.fill(214, 160, 18);
      p.ellipse(200, 220, 300, 150);

      p.push();
      p.strokeWeight(0);
      p.rect(50, 170, 10, 50);
      p.pop();

      p.push();
      p.strokeWeight(0);
      p.rect(340, 170, 10, 50);
      p.pop();

      // The top of the ring
      p.push();
      p.stroke(10);
      p.fill("gold");
      p.ellipse(200, 170, 300, 150);

      // The hollow part of the ring
      p.push();
      p.blendMode(p.BLEND);
      p.fill(184, 134, 0);
      p.ellipse(200, 170, 250, 120);
      p.pop();

      p.push();
      p.fill("rgba(0,126,255,0.98)");
      p.clip(mask);
      p.ellipse(200, 220, 250, 120);

      function mask() {
          p.ellipse(200, 170, 250, 120);
      }
      p.pop();

      // Text on the ring
      p.push();
      p.blendMode(p.OVERLAY);
      p.fill(113, 90, 0);
      p.textSize(20);
      p.textFont(p.ITALIC);
      p.text('ONE ', 65, 250);
      p.text('RING ', 110, 270);
      p.text('TO ', 165, 280);
      p.text('RULE ', 200, 280);
      p.text('THEM ', 255, 266);
      p.text('ALL ', 300, 245);
      p.pop();

      p.pop();

      // Sparkle on the ring
      p.push();
      p.fill('white');
      p.strokeWeight(0);
      p.triangle(130, 210, 110, 250, 150, 250);
      p.triangle(110, 220, 130, 260, 152, 223);
      p.pop();
  };
};

new p5(sketch);
