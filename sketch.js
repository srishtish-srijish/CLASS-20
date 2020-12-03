var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
fixedrect= createSprite(400, 200, 50, 50);
fixedrect.shapeColor=("yellow")

movingrect=createSprite(300,100,80,80)
movingrect.shapeColor=("yellow")

movingrect.debug=true;
fixedrect.debug=true;

}

function draw() {
  background("lightpink");  
 movingrect.x=World.mouseX;
 movingrect.y=World.mouseY;
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && 
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
  movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2 &&
  fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2){
  
  fixedrect.shapeColor=("red");
  movingrect.shapeColor=("red");
}
else{
  fixedrect.shapeColor=("green");
  movingrect.shapeColor=("green");
}
 drawSprites();
}