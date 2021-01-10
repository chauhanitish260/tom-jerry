var tom,tomImg1,tomImg2,tomImg3,tomLastImage,tomRunning;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerrylastRunning,tomRunning;
function preload() {
    //load the images here
  tom=loadImage(tomImg1);
  tom=loadImage(tomImg2);
  tom=loadImage(tomImg3);
  tom=loadImage(tomLastImage);
  tom=loadImage(tomRunning);
  jerry=loadImage(jerryImg1);
  jerry=loadImage(jerryImg2);
  jerry=loadImage(jerryImg3);
  jerry=loadImage(jerrylastRunning);

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
      tom=createSprite(400,300,80,30)
      tom.shapeColor = "green"

      jerry=createSprite(200,200,50,80)
      jerry.shapeColor="green"
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    Text(mouseX + ','+ mousey,10,45);
    if(tom.X - mouse.x < (tom.width - mouse.width)/2
    &&jerry.Y - mouse.y < (jerry.width  - mouse.width)/2)
    {
         //write code here to change animation
         tom.addAnimation("tomLastImage",catImg1);
         tom.changeAnimation("tomLastImage");
         tom.addAnimation("tomrunning",catImg2);
         tom.changeAnimation("tomRunning");
         tom.addAnimation("tomrunning",catImg3);
         tom.changeAnimation("tomRunning");
         jerry.addAnimation("jerryImage",jerryImg1);
         jerry.changeAnimation("jerryImage");
         jerry.addAnimation("jerryrunning",jerryImg2);
         jerry.changeAnimation("jerryRunning");
         jerry.addAnimation("jerrylastrunning",jerryImg3);
         jerry.changeAnimation("jerrylastRunning");  
    }

    if(tom.x-jerry.x< tom.width/2+jerry.width/2
        &&jerry.x-tom.x< tom.width/2+jerry.width/2
        &&tom.y-jerry.y<tom.height/2+jerry.height/2
          &&jerry.y-tom.y<tom.height/2+jerry.height/2)

          tom.shapeColor="yellow"
    jerry.shapeColor="yellow"
  }
  else{
    tom.shapeColor="green"
    jerry.shapeColor="green"

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keycode === LEFT_ARROW){
    tom.addAnimation("tomLastImage",catImg1);
   tom.changeAnimation("tomLastImage");
   tom.addAnimation("tomrunning",catImg2);
   tom.changeAnimation("tomRunning");
   tom.addAnimation("tomrunning",catImg3);
   tom.changeAnimation("tomRunning");
  }
  

  }

}
