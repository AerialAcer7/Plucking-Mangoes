
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = "slingshot";
var treeImg;

function preload(){
 treeImg = loadImage("Plucking mangoes/tree.png");
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	 
   stone = new Stone(150,590,50,50);

   ground = new Ground(400,695,width,10);

   chain = new Chain(stone.body,{x:100,y:550});

   boy = new Boy(150,600,50,50);

   mango1 = new Mango(600,250,60,60);
   mango2 = new Mango(690,290,60,60);
   mango3 = new Mango(610,340,60,60);
   mango4 = new Mango(500,350,60,60);
   mango5 = new Mango(730,370,60,60);

	
  
}

function draw() {
  background(255);
  Engine.update(engine);

  //Create display for objects
   
  boy.display();
  image(treeImg,600,450,550,550);

   ground.display();

   chain.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   stone.display();

isTouching(stone,mango1);
isTouching(stone,mango2);
isTouching(stone,mango3);
isTouching(stone,mango4);
isTouching(stone,mango5);

}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  chain.fly();
 // gameState = "launched";
  
}
function keyPressed(){
  if(keyCode == 32){
    chain.attach(stone.body);
  }
}

function isTouching(stone,mango){
  var stonePos = stone.body.position;
  var mangoPos = mango.body.position;
 if(stonePos.x-mangoPos.x<stone.width/2+mango.width/2 && 
  mangoPos.x-stonePos.x<stone.width/2+mango.width/2 && 
  stonePos.y-mangoPos.y<stone.height/2+mango.height/2 &&
  mangoPos.y-stonePos.y<stone.height/2+mango.height/2){
 Matter.Body.setStatic(mango.body,false);
  
 }
}


