
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left, base, right;
var ball;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,20);
	base = new Collector(650,620,150,20);
	left = new Collector(575,590,20,80);
	right = new Collector(725,590,20,80);
	ball = new Ball(100,430,20);
  
}


function draw() {
  
  background(0);
  
   // text(mouseX + ";" + mouseY,200,20);
	Engine.update(engine);
	
	
	
	ground.display();
	base.display();
	left.display();
	right.display();
  ball.display();
  
  
  
 
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{ x : 65, y : - 65});
	
	
}}