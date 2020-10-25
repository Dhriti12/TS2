const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

/*function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}*/

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  // platform = new Ground(330, 305, 30, 10);

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    box9 = new Box(390,155,30,40);

    box10 = new Box(730,134,30,40);
    box11 = new Box(760,134,30,40);
    box12 = new Box(790,134,30,40);
    box13 = new Box(820,134,30,40);
    box14 = new Box(850,134,30,40);
    box15 = new Box(760,155,30,40);
    box16 = new Box(790,155,30,40);
    box17 = new Box(820,155,30,40);
    box18 = new Box(790,165,30,40);
   
    pig1 = new Pig(810, 350);
    log1 = new Ground(400,260,350, PI/2);

    
   // pig3 = new Pig(810, 220);

    log3 =  new Ground(800,180,300, PI/2);

   
  
   // log4 = new Ground(760,120,150, PI/7);
   // log5 = new Ground(870,120,150, -PI/7);
    bird = new Polygon(50,150);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:50, y:150});
}

function draw(){
    background("orange");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
  //  pig1.display();
    log1.display();

    box3.display();
    box4.display();
  //  pig3.display();
    //log3.display();

    box5.display();
    //log4.display();
   // log5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
    bird.display();
 /*   box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();*/
    

 //platform.display();
    //log6.display();
    slingshot.display();    

   textSize(16);
    fill ("green")
    text ("PRESS SPACE MORE CHANCES",10,15)
    textSize(35);


}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(bird.body);
  }
}