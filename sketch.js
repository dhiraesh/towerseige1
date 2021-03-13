const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var slingshot;
var ground, log;
var ball;
var stricker, stricker_img;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;

function preload(){
stricker_img = loadImage('sprites/polygon.png');

}

function setup(){
canvas = createCanvas(1600,500);
engine = Engine.create();
world = engine.world;

 ground = new Ground(400,500,2000,50);
 block1 = new Block(825,350,40,40);
 block2 = new Block(875,350,40,40);
 block3 = new Block(925,350,40,40);
 block4 = new Block(975,350,40,40);
 block5 = new Block(885,300,40,40);
 block6 = new Block(910,300,40,40);
 block7 = new Block(965,300,40,40);
 block8 = new Block(885,250,40,40);
 block9 = new Block(925,250,40,40);
 block10 = new Block(935,250,40,40);
 log = new Ground(1000,400,400,25);
 ball = Bodies.circle(500,250,20);
 World.add(world, ball);
 //slingshot = new SlingShot(this.ball, {x : 100, y : 200});

}

function draw(){
background("black");
Engine.update(engine);





ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
log.display();

imageMode(CENTER);
image(stricker_img, ball.position.x, ball.position.y, 40, 40);

//console.log(mouseX);
//console.log(mouseY);


//slingshot.display();
drawSprites();
}

function mouseDragged() {
Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}

function mouseReleased() {
slingshot.fly();
}