
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var leftSide
var rightSide
function setup() {
	createCanvas(800, 700);
	var ball_options = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	} 

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120);

	ball = Bodies.circle(200,100,20)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  groundObj.display();
  background(0);
  
  drawSprites();
 
}
function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	hForce()
	vForce()
	}
}


