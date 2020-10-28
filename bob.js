
class Bob{
  constructor(x, y, r) {
    const options = {
      restitution: 0.4
    };
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.World.add(world, this.body);
    Matter.Body.setMass(this.body.mass *5);
    this.image=loadImage("images/disc.png");
    this.r = r;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    imageMode(RADIUS);
    image(this.image, pos.x, pos.y, this.r*2 , this.r*2 );
   
  }
}
