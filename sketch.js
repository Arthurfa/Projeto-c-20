
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;


function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var plane_options = {
		isStatic:true
	}
	
	var block1_options={
		restituition:0.5,
		friction:0.02,
		frictionAir:0
	}
	
	var block2_options={
		restituition:0.7,
		friction:0.02,
		frictionAir:0.1
	}
	
	var block3_options={
		restituition:0.01,
		friction:1,
		frictionAir:0.3
	}

	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(400,50,10,10,block3_options);
	World.add(world,block3);

	plane = Bodies.rectangle(400,690,800,20,plane_options);
	World.add(world,plane);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("lightgreen");
  
  ellipse(block1.position.x,block1.position.y,50);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,100,50);
  
  drawSprites();
 
}



