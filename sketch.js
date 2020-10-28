const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var box1;
var mConstraint;

var bg;
var beach_sound;

function preload() {
  bg=loadImage("images/beach.jpg");
  beach_sound=loadSound("waves.wav");
}


function setup() {
  canvas = createCanvas(900, 600);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(450,590,900,20)
  box1= new Box(700,100,50,50);
  box2= new Box(750,100,50,50);
  box3= new Box(800,100,50,50);
  box4= new Box(725,50,50,50);
  box5= new Box(775,50,50,50);
  box6= new Box(750,20,50,50);
  
  bob = new Bob(100,100,20);


  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  slingshot = new SlingShot( bob.body,{x:150, y:300});
  
}

function draw() {
  background(bg);
  Matter.Engine.update(engine);
  box1.show();
  ground.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  box6.show();
  bob.show();
 slingshot.show();
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode=== RIGHT_ARROW){
    World.remove(world,bob.body);
    bob= new Bob (150,300,20);
    slingshot.attach(bob.body);
  }
  if(keyCode=== 32){
    beach_sound.play();
  }
}

