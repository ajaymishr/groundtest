var bg,bgimage,ground1,groundimage1,ground2;
var score=0;

function preload(){
    bgimage=loadImage("tower.png");
    groundimage1=loadImage("grounds.png");
}
function setup(){
    createCanvas(1550,700);
    bg=createSprite(775,350,1550,700);
    ground1=createSprite(775,680,0,20);
    ground2=createSprite(775,20,0,20);
    ground1.addImage(groundimage1)
    ground2.addImage(groundimage1)
    bg.addImage(bgimage);
    bg.scale=2.2;
    ground1.scale=1.1;
    ground2.scale=1.1;
}
function draw(){
background("black");
bg.velocityX=-(score/2+1.5);
ground1.x=bg.x;
ground2.x=bg.x;
if(bg.x<650){
    bg.x=900
}
drawSprites();
}