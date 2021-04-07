
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var line1,line2,line3;
var ball;

function preload()
{
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,570,width,20);

	//line1=new Dustbin(800,520,20,100);
	//line2=new Dustbin(1000,520,20,100);
    dustbin=new Dustbin(900,550,200,20); 

	paper=new Paper(200,350,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();
line1.display();
line2.display();
line3.display();
ball.display();

keyPressed();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}



