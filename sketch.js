var backgroundImage;
var page1;
var startImage, startB;
var playAgain, playAgainImage;

var asteroids;
var asteroidLeftGroup;
var asteroidRightGroup;

var shooter, shooterImage, stone, stoneImage;

var asteroid1, asteroid2, asteroid3, asteroid4, asteroid5;

var invisibleGround;

//var firstSound; 
//spaceSound, crashSound, gameOverSound;

var gameState = "start";

function preload()
{
	backgroundImage = loadImage("4.jpg");
    page1 = loadImage("page1.jpg");
	asteroid1 = loadImage("asteroid1.png");
	asteroid2 = loadImage("asteroid2.png");
	asteroid3 = loadImage("asteroid3.png");
	asteroid4 = loadImage("asteroid4.png");
	asteroid5 = loadImage("asteroid5.png");
	shooterImage = loadImage("shooter.png");
	stoneImage = loadImage("stone.png");
	//firstSound= loadSound("startSound.mp3");
	//spaceSound = loadSound("spaceSound.mp3");
	//crashSound = loadSound("crash.mp3");
	//gameOverSound = loadSound("gameOver.wav");
	startImage = loadImage("start.png");
    playAgainImage = loadImage("playAgain.png");
}

function setup() {

	createCanvas(displayWidth, 650);
	//firstSound.play();
	startB = createSprite(displayWidth-100, 600);
	startB.addImage("play", startImage);
	startB.scale = 0.5;
	
	shooter = createSprite(displayWidth/2,500);
	shooter.addImage(shooterImage);
	shooter.scale = 1.5;

	asteroidLeftGroup = new Group();
	asteroidRightGroup = new Group();


	
}


function draw() {
  rectMode(CENTER);
  background(page1);

  if(gameState === "start"){
  //startSound.play();
  shooter.visible = false;
  startB.visible = true;
  //playAgain.visible = false;

  textFont("Matura MT Script Capitals");
  fill(255);
  textSize(30);
  text("The Earth is,", 600, 40);
  text("what we all have in common !!!", 490, 75);

  textFont("Imprint MT Shadow");
  text("Defend the earth, from asteroids and save it !!!", 380, 200);

  
  text("Your target: shoot all the asteroids and defend the Earth for 3 minutes....", 30, 600);

  if(mousePressedOver(startB) && gameState === "start"){
	  gameState = "play";
    }
  }
  
else if(gameState === "play"){
	  background(backgroundImage);
	  shooter.visible = true;
	  //startSound.stop();
	  //spaceSound.loop();
	 //playAgain.visible = false;
	

	if(keyDown(LEFT_ARROW)){
		shooter.x = shooter.x-12;
  }

	  if(keyDown(RIGHT_ARROW)){
		 shooter.x = shooter.x+12;
	  }

	

	

	

	if(keyDown(UP_ARROW)){
		stone = createSprite(displayWidth/2,500, 10, 10);
		stone.x = shooter.x;
	    stone.y = shooter.y;
		shooter.depth = stone.depth;
	    shooter.depth = stone.depth + 1;
		stone.addImage(stoneImage);
		stone.scale = 0.08;
        
		stone.velocityY = -20;
	}

	invisibleGround = createSprite(680,400,displayWidth,10);
	invisibleGround.visible = false;

	startB.visible = false;

	  if (frameCount % 100 === 0) {
		asteroids = createSprite(random(0, 400), 0, 100, 100);
		asteroids.velocityY = 3;
		asteroids.velocityX = 3;
		var rand = Math.round(random(1,3));
		switch(rand){
			case 1: asteroids.addImage(asteroid1);
			asteroids.scale = 0.6;
			break;
			case 2: asteroids.addImage(asteroid2);
			asteroids.scale = 0.3;
			break;
			case 3: asteroids.addImage(asteroid4);
			asteroids.scale = 0.3;
			break;
		}

		asteroidLeftGroup.add(asteroids);			
   }

   if (frameCount % 100 === 0) {
	asteroids = createSprite(random(800, 1000), 0, 100, 100);
	asteroids.velocityY = 3;
	asteroids.velocityX = -3;
	var rand = Math.round(random(1,2));
	switch(rand){
		case 1: asteroids.addImage(asteroid3);
		asteroids.scale = 0.6;
		break;
		case 2: asteroids.addImage(asteroid5);
		asteroids.scale = 0.8;
		break;
	}

	asteroidLeftGroup.add(asteroids);			
}
   		

		 //


		 //if(asteroidGroup.isTouching(invisibleGround)){
			//crashSound.play();
			//stone.destroy();
			//arteroids.destroy();
			//gameOverSound.play();
			//playAgain = createSprite(displayWidth/2, 500);
			//playAgain.addImage(playAgainImage);
			//playAgain.scale = 0.6;

			//gameState = "end";
		 //}
		 
		 
}

	//else if(gameState = end){

		//shooter.destroy();
		//stone.destroy();
		//asteroidLeftGroup.destroyEach();
		//asteroidRightGroup.destroyEach();

		//if(mousePressedOver(restart)) {
			//reset();
		 // }
	//}

drawSprites();
}

//function reset(){
	//gameState = "play";
	//playAgain.destroy();
//}