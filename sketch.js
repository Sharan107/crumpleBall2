
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImg,dustbinObj;

function preload(){
dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(750,1500);

	crumpleBall= new Paper(200,417,50);

	dustbinBase= new Dustbin(700,434,230,15);
	dustbinWall= new Dustbin(580,385,15,100);
	dustbinWall2= new Dustbin(815,385,15,100);

	dustbinObj=createSprite(700,434);
	dustbinObj.addImage(dustbinImg);

	var render = new Render.create ({
	element: document.body,
	engine: engine,
	options: {
	width:1600,
	height:700,
	wireframes: false 
	}
	});
	
	Engine.run(engine);

}


function draw() {
  background("lightgrey");

crumpleBall.display();
ground.display();
dustbinBase.display();
dustbinWall.display();
dustbinWall2.display();

keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	
   if(keyCode===UP_ARROW){
	 Body.applyForce(crumpleBall.body,crumpleBall.body.position,{x:11,y:-10});
   }
}
