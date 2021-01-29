const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var carl
var plane
var ene1,ene2,ene3,ene4;
var k,j,i,l

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
k = 200;
j = 50;
carl = new Player(50,300,30,50);
plane = new Ground(400,390,900,100);
ene1 = new Enemies(700,300,30,50);
ene2 = new Enemies(700,300,30,50);
ene3 = new Enemies(700,300,30,50);
ene4 = new Enemies(700,300,30,50);

for (let index = 0;index < 6; index++) {
  ene1 = new Enemies(700+k,random(200,210),random(20,50),random(20,50));
  k= k+100;
  ene2 = new Enemies(700+j,random(200,210),random(20,50),random(20,50));
  j= j+70;
 
}
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  plane.display();
  carl.display();
  ene1.display();
  ene2.display();
  ene3.display();
  ene4.display();
  playerMovement();
  eneMovement();
}
function playerMovement(){
if(keyIsDown(RIGHT_ARROW)){
  carl.body.position.x = carl.body.position.x+0.5;
}
if(keyIsDown(LEFT_ARROW)){
  carl.body.position.x = carl.body.position.x-0.5;
}
if(keyIsDown(UP_ARROW)){
  carl.body.position.y = carl.body.position.y-0.5;
}
if(keyIsDown(DOWN_ARROW)){
  carl.body.position.y = carl.body.position.y+0.5;
}
}
function eneMovement(){
ene1.body.position.x += -0.1;
r = random(200,205)
ene1.body.position.y = r


ene2.body.position.x += -0.1;
t = random(190,195)
ene2.body.position.y = t


ene3.body.position.x += -0.1;
s = random(210,215)
ene3.body.position.y = s

ene4.body.position.x += -0.1;
p = random(220,225)
ene4.body.position.y = p

}
