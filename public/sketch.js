let gameInfo = {"image":"assets/ground.jpg",
"music":"assets/music.wav"};
let img;
let song;
let SPACEKEY = 32;

let krishna;
let makhan;
let direction=90;
let speed=0;
let score=0;
let mX = 0;
let mY = 0;

function preload(){
	img = loadImage(gameInfo["image"]);
	song = loadSound(gameInfo["music"]);
}

function setup() {
  	createCanvas(700, 700);
  	image(img, 0, 0);

  	krishna = createSprite(400,200);
  	krishna.addAnimation('chasing','assets/krishna.png')

	mX = random(0,width);
	mY = random(0,height);
  	makhan = createSprite(mX,mY);
  	makhan.addAnimation('running','assets/container.png')
}

function keyPressed(){
	if(keyCode == SPACEKEY && !song.isLooping()){
		song.loop();
	}
	else if(keyCode == SPACEKEY && song.isLooping()){
		song.stop();
	}

	if (keyIsDown(UP_ARROW)){
		if(direction == 270){
			speed += 1;
		}else{
			direction=270;
			speed = 5;
		}
	}
	if (keyIsDown(DOWN_ARROW)){
		if(direction == 90){
			speed += 1;
		}else{
			direction=90;
			speed = 5;
		}
	}
	if (keyIsDown(RIGHT_ARROW)){
		if(direction == 0){
			speed += 1;
		}else{
			direction=0;
			speed = 5;
		}
	}
	if (keyIsDown(LEFT_ARROW)){
		if(direction == 180){
			speed += 1;
		}else{
			direction=180;
			speed = 5;
		}
	}
}

function checkBounds(sprite){
	if(sprite.position.x > width){
		direction = 180;
	}
	if(sprite.position.x < 0){
		direction = 0;
	}
	if(sprite.position.y > height){
		direction = 270;
	}
	if(sprite.position.y < 0){
		direction = 90;
	}
}
function draw() {
	image(img, 0, 0);

	textSize(50);
	let c = color("Blue");
	fill(c);
	text(score,40,50);

	krishna.setSpeed(speed,direction);
	if(krishna.collide(makhan)){
		score += 1
		mX = random(0,width);
		mY = random(0,height);
		makhan.position.x = mX;
		makhan.position.y = mY;
	}

	
	checkBounds(krishna);
    
	drawSprites();
}