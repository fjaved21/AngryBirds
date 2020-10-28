
class Box {
  constructor(x, y, w, h) {
    const options = {
      restitution: 0.5
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.image=loadImage("images/coconut.png");
    this.w = w;
    this.h = h;
  }

  show() {
    var pos = this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("pink");
    imageMode(CENTER);
    image(this.image,0,0, this.w*2, this.h*2);
    pop();
  }
}
