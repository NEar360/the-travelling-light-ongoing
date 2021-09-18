const Engine =Matter.Engine;
const World= Matter.World;
const Bodies=  Matter.Bodies;
const Constraint = Matter.Constraint;

var player,playerEnergy,ground,colorcheck,playerPosX,playerHeight,playerWidth,playerPosY;
var obstacleTesting,lighttesting1,lighttesting2,energytesting1;

var engine,world;
colorcheck = '#39FF14';
playerEnergy = 10;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  player = new Player(200,200,50,50);
  playerWidth = player.body.width;
  playerHeight = player.body.height;
  ground = new Ground(400,400,800,100);
  lighttesting1 = new Lights(100,200,20,20);
  lighttesting2 = new Lights(300,200,20,20);
  energytesting1 = new Energy(400,200,20,20);
  //testing obstacleTesting= new Obstacle(500,200,100,100);
  
}

function draw() {
  background(255,255,255); //change bg to black a the end 
  Engine.update(engine);
  
  player.display();
  playerPosX = player.body.position.x;
  playerPosY = player.body.position.y;
  ground.display();
  lighttesting1.display();
  lighttesting2.display();
  energytesting1.display();
  //obstacleTesting.display();

  movePlayer();
  drawSprites();

}

function movePlayer(){
  if(keyDown(LEFT_ARROW)){
    writePosition(-2,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(2,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-2);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,+2);
  }
}

function changelevel(){

}

function lights(){

}

/*function energy() {
  for (let i = 0; i < lightsCount; i+100) {
    const element = ;
    
  }
}*/
function writePosition(playerX,playerY) {
  player.body.position.x = player.body.position.x + playerX;
  player.body.position.y = player.body.position.y + playerY;

}