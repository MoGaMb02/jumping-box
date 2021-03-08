var canvas;
var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  movingSprite=createSprite(random(10,750),300,20,20);
movingSprite.shapeColour="white";
movingSprite.velocityX=3;
movingSprite.velocityY=3;

fixSprite1=createSprite(100,590,180,20);
fixSprite1.shapeColour="red";

fixSprite2=createSprite(300,590,180,20);
fixSprite2.shapeColour="green";

fixSprite3=createSprite(500,590,180,20);
fixSprite3.shapeColour="blue";

fixSprite4=createSprite(700,590,180,20);
fixSprite4.shapeColour="yellow";

}

function draw() {
    background(rgb(10,10,10));

    if(movingSprite.x>0){
    music.stop()
    movingSprite.velocityX=3
    }else if(movingSprite.x>800){ 
        music.stop() 
        movingSprite.velocityX=-3
    }

    if(isTouching(movingSprite,fixSprite4)){
        music.play()
        movingSprite.shapeColour="yellow";
        bounceoff(movingSprite,fixSprite4)

    }

    else if(isTouching(movingSprite,fixSprite2)){
        music.stop()
        movingSprite.shapeColour="green";
        bounceoff(movingSprite,fixSprite2)
        movingSprite.velocityX=0;
        movingSprite.velocityY=0;

    }
   
    else if(isTouching(movingSprite,fixSprite1)){
        music.stop()
        movingSprite.shapeColour="red";
        bounceoff(movingSprite.fixSprite1)

    }

if(movingSprite.y<0){
    music.stop()
    movingSprite.velocityY=3

}

drawSprites()

}
