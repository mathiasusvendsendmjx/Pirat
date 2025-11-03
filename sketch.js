import p5 from "p5";

export function startSketch() {
  new p5((sketch) => {
    sketch.setup = () => {
      const canvas = sketch.createCanvas(400, 400);
      canvas.parent("game1");
    };

    sketch.draw = () => {
      sketch.background(200);
      sketch.ellipse(200, 200, 50, 50);
    };
  });
}

