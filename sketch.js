
function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
    catSitting=loadAnimation("images/cat1.png");
    catRunning=loadAnimation("images/cat2.png","images/cat3.png");
    catHappy=loadAnimation("images/cat4.png");
    sillyMouse=loadAnimation("images/mouse1.png");
    happyMouse=loadAnimation("images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
   mouse=createSprite(50,650,100,100);
   mouse.addAnimation("sitting",sillyMouse);
   mouse.addAnimation("happy",happyMouse);
   mouse.scale=0.2;
   cat=createSprite(700,650,100,100);
cat.addAnimation("sitting",catSitting)
cat.addAnimation("happy",catHappy)
cat.addAnimation("running",catRunning)
cat.scale=0.2;
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.isTouching(mouse)){
    mouse.changeAnimation("happy",happyMouse);
    cat.changeAnimation("happy",catHappy);
}
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.changeAnimation("Running",catRunning);
    cat.velocityX=-4
    
}
  //For moving and changing animation write code here


}
