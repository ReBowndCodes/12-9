var bte1, bte2, bte3, bte4;
var ibte1, ibte2, ibte3, ibte4;

var rte1, rte2, rte3, rte4;
var irte1, irte2, irte3, irte4;

var Angle;
var bg;

function preload(){
  bg=loadImage("Background.jpg");
  ibte1=loadImage("bte1.png");
  ibte2=loadImage("bte2.png");
  ibte3=loadImage("bte3.png");
  ibte4=loadImage("bte4.png");

  irte1=loadImage("rte1.png");
  irte2=loadImage("rte2.png");
  irte3=loadImage("rte3.png");
  irte4=loadImage("rte4.png");
  
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  bte1 = createSprite(200, 200);
  bte1.addImage(ibte1);

  bte2 = createSprite(200, 400);
  bte2.addImage(ibte2);

  bte3 = createSprite(200,600);
  bte3.addImage(ibte3);

  bte4 = createSprite(200, 800);
  bte4.addImage(ibte4);
  

  rte1 = createSprite(1200, 200);
  rte1.addImage(irte1);

  rte2 = createSprite(1200, 400);
  rte2.addImage(irte2);

  rte3 = createSprite(1300, 925);
  rte3.addImage(irte3);
  
  rte4 = createSprite(1200, 800);
  rte4.addImage(irte4);

 
  
}

function draw() {
  background(bg); 
 // Angle = rte1.angle;

  //rte1.angle.rotate=mouseX

  drawSprites();
}