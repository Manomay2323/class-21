var fixedrect,movingrect;
var ob1,ob2,ob3;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 80);
  fixedrect=createSprite(600,200,50,50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  ob1=createSprite(400,100,50,50);
  ob2=createSprite(400,180,50,50);
  ob3=createSprite(400,260,50,50);
}

function draw() {
  background(0); 
  
 movingrect.y=mouseY;
 movingrect.x=mouseX;
if(isTouching(movingrect,ob3)){
  movingrect.shapeColor="red";
  ob3.shapeColor="red";
}
else{
  movingrect.shapeColor="green";
  ob3.shapeColor="green";
}
 
  drawSprites();
}

