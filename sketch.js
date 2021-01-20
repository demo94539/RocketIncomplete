const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var background_img;

var rocket,rocket_img;

var obstacles,obstacles_img;

var petrol,petrol_img;

var petrolLevel = 1000;

function preload(){
    background_img = loadImage("images/SpaceImage.png");
    rocket_img = loadImage("images/RocketImage.png");
    obstacles_img = loadImage("images/ObstaclesImage.png");
    petrol_img = loadImage("images/PetrolCanImage.png")
}

function setup(){
    createCanvas(1365,655);

    rocket = createSprite(40,327.5,20,20);
    rocket.addImage('rocket',rocket_img);
    rocket.scale = 0.0475;
    
}

function draw(){
    

    background(background_img);

    drawSprites();

    /*background = createSprite(0,0,1368,655);
    background.addImage('background',background_img);*/


    if(keyDown(UP_ARROW)){
       rocket.y = rocket.y - 10;
    }
    if(keyDown(DOWN_ARROW)){
       rocket.y = rocket.y + 10;
    }
    if(keyDown(RIGHT_ARROW)){
        rocket.x = rocket.x + 2;
     }
    fill(0)
    textSize(24)
    text(250,600,"Petrol Level :",petrolLevel);
   
    background_img.velocityX = -1;

    if(background_img.x < 0){
        background_img.x = background_img.width/2;
    }

 if(frameCount % 100 === 0){
    var rand = random(0,655);

    obstacles = createSprite(1368,rand,20,20);
    obstacles.addImage('obstacles',obstacles_img);
    obstacles.velocityX = -5;
    obstacles.scale = 0.1;
 }
 if(frameCount % 275 === 0){
    var rand = random(0,655);

    petrol = createSprite(1368,rand,20,20);
    petrol.addImage('petrol',petrol_img);
    petrol.velocityX = -5;
    petrol.scale = 0.05;
 }
 if(rocket.isTouching(obstacles)) {
    petrolLevel = petrolLevel - 250;
 }

/*function isTouching(rocket,obstacles){
    if(rocket >= obstacles) {
        return true
        }
        else {
          return false;
        }
    }*/
}
