var monkey_anim,monkey
var jungle_img,jungle
var stone_img,stone
var banana_img,banana
function preload(){
monkey_anim=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
jungle_img=loadImage("jungle.jpg");
banana_img=loadImage("banana.png");
stone_img=loadImage("stone.png");
}
function setup() {
  createCanvas(800, 400);
  jungle=createSprite(0,0,800,400);
  jungle.addImage("jungle",jungle_img);
  jungle.scale=1.5;
  jungle.velocityX=-4
  
}

function draw() {
  background(220);
  if(jungle.x<0){
    jungle.x=jungle.width/2
  }
  drawSprites();
}