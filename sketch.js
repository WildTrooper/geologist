
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, hammer1, stone;
var iron;
var rubber,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,590,1200,20);
	hammer1 = new Hammer(10,100);
	stone = new Stone(700,320,100,100);
	rubber = new Rubber(900,450,70);
	iron = new Iron(300,330);
	sand1 = new Sand(505,450,10);
	sand2 = new Sand(510,450,10);
	sand3 = new Sand(515,450,10);
	sand4 = new Sand(520,450,10);
	sand5 = new Sand(525,450,10);
	sand6 = new Sand(530,445,10);
	sand7 = new Sand(535,445,10);
	sand8 = new Sand(540,445,10);
	sand9 = new Sand(545,445,10);
	sand10 = new Sand(550,445,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  hammer1.display();
  stone.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
 
}

/*RUBBER
restitution:0.3,
			friction:5,
			density:1*/


			/*SAND
restitution:0.3,
			friction:5,
			density:1*
			declare 6 variables*/
			
