//gives all variables
var character, ocean, leaf, obstacle, header, trashGroup, trash, obstacle1, obstacle2, treeImg, tree, leafImg, title, characterImg;
var gs = 1;
var sl = 0;
var score = 0;

function preload(){
  //loads all images
  trashImg = loadImage("Trash_11.png");
  
  leafImg = loadImage("LEaf.png");
  
  obstacle1 = loadImage("Obstacle1.png");
  
  obstacle2 = loadImage("Obstacle2.png");
  
  treeImg = loadImage("Tree.png");
  
  titleImg = loadImage("Title.png");
  
  characterImg = loadImage("Creature1.png");
  
}

function setup() {
  //creates canvas
  createCanvas(1600, 900);
  
  //creates character
  character = createSprite(400, 500, 40, 40);
  character.addImage(characterImg);
  character.scale = 0.35;
  //adds groups for trash and obstacles
  trashGroup = new Group();
  
  obstacleGroup = new Group();

}

function draw() {
  //background
  background("#6d9eeb");
  
  //spawns header
  header = createSprite(800, 50, 1600, 100)
  header.shapeColor = "white";

  
  //if gamestate is play
  if(gs === 1){
    //player controls
    if(keyDown("up") && character.y >= 130){
      character.y = character.y - 5;
    }
  
    if(keyDown("down") && character.y <= 870){
      character.y = character.y + 5;
    } 
  
    if(keyDown("left") && character.x >= 100) {
      character.x = character.x - 9;
    }
  
    if(keyDown("right") && character.x <= 500) {
      character.x = character.x + 1;
    }
  
  }

  //if gamestate is end
  if(gs === 2){
    //moves character to center of screen
    if(character.x <= 800) {
      character.x = character.x + 5;
    }
    
    if(character.y <= 650) {
      character.y = character.y + 5;
    }
    
    if(character.y >= 650) {
      character.y = character.y - 5;
    }
    //displays you lose
    if(character.x >= 790){
      stroke("black");
      strokeWeight(15);
      fill("white");
      textSize(150);
      text("You Lost!", 500, 360);
    }
    
  }
  
  if(score >= 5){
    gs = 3;
  }
  
  if(gs === 3){
    //moves character to center of screen
    if(character.x <= 800) {
      character.x = character.x + 5;
    }
    
    if(character.y <= 650) {
      character.y = character.y + 5;
    }
    
    if(character.y >= 650) {
      character.y = character.y - 5;
    }
    //displays you lose
    if(character.x >= 790){
      stroke("black");
      strokeWeight(15);
      fill("white");
      textSize(150);
      text("You Won!", 500, 360);
    }
    
  }
  
  //if trash is touching the character
  if(trashGroup.isTouching(character)){ 
   
    trash.x = trash.x - 30;
    score = score + 1
    trash.addImage(leafImg);
    //trash.x = trash.x - 40
    //gameState = END;
    
  }
  
  //if obstacle is touching the character
  if(obstacleGroup.isTouching(character)){  
    
      obstacleGroup.destroyEach();
      trashGroup.destroyEach();
      gs = 2;
    
    }
  
  //creates title and tree on header
  tree = createSprite(1200, 49, 50, 50);
  tree.addImage(treeImg);
  tree.scale = 0.21;
  
  title = createSprite(500, 49, 50, 50);
  title.addImage(titleImg);
  title.scale = 0.9;
  
  //spawns everything
  spawnTrash();
  
  spawnObstacles();
  
  drawSprites();
  
  //Shows score
  stroke("black");
  strokeWeight(1);
  fill("black");
  textSize(36);
  text("# of Leaves: " + score, 1300, 60);
  
 
}

function spawnTrash(){
  //spawns the obstacles 
  if(gs === 1){
  var ran1 = Math.round(random(888,999));
  var ran2 = Math.round(random(150,850));
  
  if (frameCount % ran1 === 0){
    trash = createSprite(1600 ,ran2, 40, 40);
    trash.addImage(trashImg);
    trash.addAnimation("leaf" , leafImg);

    trash.velocityX = -4;
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    // switch(rand) {
      // case 1: obstacle;
      // case 2: obstacle.addImage(obstacle2);
              // break;
      // case 3: obstacle.addImage(obstacle3);
              // break;
      // case 4: obstacle.addImage(obstacle4);
              // break;
      // case 5: obstacle.addImage(obstacle5);
              // break;
      // case 6: obstacle.addImage(obstacle6);
              // break;
      // default: break;
    // }
   
    //assign scale and lifetime to the obstacle           
    trash.scale = 0.2;
    trash.lifetime = 600;
   
   //add each obstacle to the group
  trashGroup.add(trash);
    
  }
 }
}



function spawnObstacles(){
  //spawns the obstacles 
  if(gs === 1){
  var ran1 = Math.round(random(150,600));
  var ran2 = Math.round(random(150,850));
  
  if (frameCount % ran1 === 0){
    obstacle = createSprite(1600 ,ran2, 40, 40);
    obstacle.addImage(obstacle1);

    obstacle.velocityX = -4;
   
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        obstacle.scale = 0.3;
              // break;
      // case 3: obstacle.addImage(obstacle3);
              // break;
      // case 4: obstacle.addImage(obstacle4);
              // break;
      // case 5: obstacle.addImage(obstacle5);
              // break;
      // case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.4;
    obstacle.lifetime = 600;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
 }
}