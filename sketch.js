const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var background_img,scene,scene_img;

var rocket,rocket_img;

var obstacles,obstacles_img;

var petrol,petrol_img;

var petrolLevel = 1000;

function preload(){
    scene_img = loadImage("images/SpaceImage.png");
    rocket_img = loadImage("images/RocketImage.png");
    obstacles_img = loadImage("images/ObstaclesImage.png");
    petrol_img = loadImage("images/PetrolCanImage.png")
}

function setup(){
    createCanvas(1365,655);

    scene = createSprite(0,400,1368,655);
    scene.addImage('scene',scene_img);
    scene.scale = 1.00;
    scene.x = scene.width/2;

    rocket = createSprite(40,327.5,20,20);
    rocket.addImage('rocket',rocket_img);
    rocket.scale = 0.0475;
}

function draw(){
    

    background("black");

    drawSprites();

    /*background = createSprite(0,0,1368,655);
    background.addImage('background',background_img);*/
    
    scene.velocityX = -2;

    if(scene.x < 0){
        scene.x = scene.width/2;
    }


    if(keyDown(UP_ARROW)){
       rocket.y = rocket.y - 10;
    }
    if(keyDown(DOWN_ARROW)){
       rocket.y = rocket.y + 10;
    }
    if(keyDown(RIGHT_ARROW)){
        rocket.x = rocket.x + 10;
     }
    
    if(keyDown(Left_ARROW)){
        rocket.x = rocket.x -10;
     }
    fill(0)
    textSize(24)
    text("Petrol Level :"+petrolLevel,250,600);
   
    
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
 if(isTouching(rocket,obstacles)){
      petrolLevel = petrolLevel - 350; 
   }
   else{
      petrolLevel = petrolLevel;
   }

}
    function isTouching(object1,object2){ 
       if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
         object2.x - object1.x < object2.width/2 + object1.width/2 &&
         object1.y - object2.y < object2.height/2 + object1.height/2 && 
         object2.y - object2.y < object2.height/2 + object1.height/2){
            return true;
            } 
            else { 
               return false; 
         } 
      }
