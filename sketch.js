var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -5;
  
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.velocityX = 5;
}

function draw() {
  background(0,0,1); 
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  bounceOff(movingRect ,fixedRect);
  if (isTouching(movingRect ,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   }

  drawSprites();
}
