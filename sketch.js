
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

	ground= new Ground(800,550);

	crumpleBall= new Paper(300,417,35);

	dustbinObj=createSprite(1200,460);
	dustbinObj.addImage(dustbinImg);
	dustbinObj.scale=0.5;

	dustbinBase= new Dustbin(1200,535,110,15);
	dustbinWall= new Dustbin(1145,455,15,150);
	dustbinWall2= new Dustbin(1255,455,15,150);


	Engine.run(engine);

}


function draw() {
  background("lightgrey");

crumpleBall.display();
ground.display();
dustbinBase.display();
dustbinWall.display();
dustbinWall2.display();

drawSprites();

}

function keyPressed() {
	//write code here
	
   if(keyCode===UP_ARROW){
	 Body.applyForce(crumpleBall.body,crumpleBall.body.position,{x:64,y:-65});
   }
}
