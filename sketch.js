const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var lWall, rWall, tWall, bWall;
var ball;
var up, right;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  lWall = new Ground(10,200,20,400);
  rWall= new Ground(390,200,20,400);
  tWall = new Ground(200,10,400,20);
  bWall = new Ground(200,390,400,20);

  var ball_options = {
    restitution: 0.7
  }
  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);

  up = createImg("up.png");
  up.position(345,340);
  up.size(30,30);
  up.mouseClicked(v);

  right = createImg("right.png");
  right.position(40,40);
  right.size(30,30);
  right.mouseClicked(h);
}

function draw() 
{
  background("grey");
  Engine.update(engine);
  lWall.display();
  rWall.display();
  tWall.display();
  bWall.display();
  ellipse(ball.position.x,ball.position.y,30);
}

function h() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
}

function v() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1});
}