const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world; 
  angleMode(DEGREES);
  angle = 20; 
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);


  cannon = new Cannon(180,110,130,100,angle);
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  
  

  push();
fill ("brown");

  rectMode(CENTER);
  image(this.cannon_image,this.x,this.y,this.width,this.height);

  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop(); 
  image(this.cannon_base,70,20,200,200);
  //holdtocreatecannonbottom
  rect(70,20,20,200,200);
  noFill();

  cannon.display();
}
