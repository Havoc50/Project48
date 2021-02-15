var character, ocean, leaf, obstacle, header, trashGroup, trash, obstacle1, obstacle2, treeImg, tree;
var gs = 1;
var score = 0;

function preload(){
  
  trashImg = loadImage("Trash_1.png");
  leafImg = loadAnimation("LEaf.png");
  obstacle1 = loadImage("Obstacle1.png");
  obstacle2 = loadImage("Obstacle2.png");
  treeImg = loadImage("Tree.png");
  
}

function setup() {
  
  createCanvas(1600, 900);
  
  character = createSprite(400, 500, 40, 40);
  
  trashGroup = new Group();
  
  obstacleGroup = new Group();
  

}

function draw() {
  
  background("#6d9eeb");
  

  
  header = createSprite(800, 50, 1600, 100)

  
  
  if(gs === 1){
  
  if(keyDown("up") && character.y >= 130){
    character.y = character.y - 5;
  }
  
  if(keyDown("down") && character.y <= 870){
    character.y = character.y + 5;
  } 
  
  if(keyDown("left") && character.x >= 100) {
    character.x = character.x - 5;
  }
  
  if(keyDown("right") && character.x <= 500) {
    character.x = character.x + 5;
  }
  
  }
  
  if(gs === 2){
    
    if(character.x <= 800) {
    character.x = character.x + 5;
    }
    
    if(character.y <= 650) {
    character.y = character.y + 5;
    }
    
    if(character.y >= 650) {
    character.y = character.y - 5;
    }
    
  }
  if(trashGroup.isTouching(character)){
        
       trash.changeAnimation("leaf", leafImg);
      trash.scale = 0.02;
    score = score + 1
      //trash.x = trash.x - 20
        //gameState = END;
    }
  
  if(obstacleGroup.isTouching(character)){
        
    
      obstacleGroup.destroyEach();
      trashGroup.destroyEach();
      gs = 2;
    
    
    }
  
  
  tree = createSprite(1200, 49, 50, 50);
  tree.addImage(treeImg);
  tree.scale = 0.22;
  
  spawnTrash();
  
  spawnObstacles();
  
  drawSprites();
  
    
  fill("lime");
  textSize(90);
  text("The Creature", 200, 80);
  
  fill("lime");
  textSize(36);
  text("# of Leaves: " + score, 1300, 60);
 
}

function spawnTrash(){
  //spawns the obstacles 
  if(gs === 1){
  var ran1 = Math.round(random(30,120));
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