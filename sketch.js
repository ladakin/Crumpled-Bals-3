const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1,launcherObject

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(1100,495,150,15);
	box2 = new Box(1185,420,15,170);
	box3 = new Box(1015,420,15,170);
	ground1 = new Ground(700,550,1400,30);
	paper1 = new Paper(200,450);
	launcherObject=new Sling(paperObject.body,{x:300,y:300})
	 Engine.run(engine);
  
}


function draw() {
	background("lightblue");
	Engine.update(engine);
	
	ground1.display();

	box3.display();
	box1.display();
	box2.display();
	launcherObject.display();
	image(boximage,1000,330,200,200);
	
	paper1.display();
	
 
}

	function mouseDragged()
	{
		Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY})
	  
	}
	
	function mouseReleased()
	{
		
		launcherObject.fly();
	 
	}


