
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightside = new Ground (1100,600,20,120);

	//Create the Bodies Here.
    ball_options = {
		isStatic : false,
		restitution :0.3,
		friction : 0,
		density : 1.2
	}
     ball = Bodies.Circle(400,300,30,ball_options),
   World.add(world,ball);
   rectMode(CENTER);
	ellipseMode(RADIUS);
}
function draw() {
  background(0);
  Engine.run(engine);
  ground.show();
  left.show();
  right.show();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5},UP_ARROW);
	}
}



