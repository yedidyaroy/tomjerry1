var tom,tomoneImage,tomtwoImage,tomthreeImage;
var backGround,backGroundImage;
var jerry,jerryoneImage,jerrytwoImage,jerrythreeImage;
function preload() {
    //load the images here
backGroundImage = loadImage("garden.png")
tomoneImage = loadAnimation("tomOne.png")
jerryoneImage = loadAnimation("jerryOne.png")
tomtwoImage = loadAnimation("tomTwo.png","tomThree.png")
jerrytwoImage = loadAnimation("jerryTwo.png","jerryThree.png")
tomthreeImage = loadAnimation("tomFour.png")
jerrythreeImage = loadAnimation("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backGround=createSprite(200,200,20,20);
    backGround.addImage(backGroundImage);

    tom = createSprite(550,470,20,20);
    tom.addAnimation("standing",tomoneImage);
    tom.addAnimation("moving",tomtwoImage)
    tom.addAnimation("colliding",tomthreeImage)
    tom.scale=0.1;
    tom.setCollider("circle",0,0,550)

    jerry = createSprite(100,450,20,20);
    jerry.addAnimation("standing",jerryoneImage);
    jerry.addAnimation("moving",jerrytwoImage)
    jerry.addAnimation("colliding",jerrythreeImage)
    jerry.scale=0.1;
    jerry.setCollider("circle",0,0,400)
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
    if (tom.isTouching(jerry)){
        tom.collide(jerry);
        tom.changeAnimation("colliding",tomthreeImage)

        jerry.changeAnimation("colliding",jerrythreeImage)
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
   tom.velocityX=-5;
   tom.changeAnimation("moving",tomtwoImage);

   jerry.changeAnimation("moving",jerrytwoImage);
   //tom.changeAnimation("moving")
  }

}
