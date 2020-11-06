var fixedRect, movingRect,object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object3 = createSprite(10,500,40,150)
  object3.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object3.velocityX = 3;
}

function draw() {
  background(0,0,0);  

  Bounce_Off(movingRect,fixedRect);
  
  if(is_touch(movingRect,fixedRect)){
    movingRect.setVelocity(0,0);
  }

  Bounce_Off(object3,movingRect);
  Bounce_Off(object3,fixedRect);

  drawSprites();
}

