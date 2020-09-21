let list = ["Nand","Yashoda","Balram","Krishna"];
let colors = ["Orange","Purple","Green","Blue"];
let gameInfo = {"image":"assets/ground.jpg",
"music":"assets/music.wav"};
let img;
let song;
let SPACEKEY = 32;

function preload(){
	img = loadImage(gameInfo["image"]);
	song = loadSound(gameInfo["music"]);
}

function setup() {
  	createCanvas(700, 700);
  	image(img, 0, 0);
}

function keyPressed(){
	if(keyCode == SPACEKEY && !song.isLooping()){
		song.loop();
	}
	else if(keyCode == SPACEKEY && song.isLooping()){
		song.stop();
	}
}

function draw() {
	let space = 0;
	textSize(50);
	for (x in list){
		let c = color(colors[x]);
		fill(c);
		text(list[x],40,50+space);
		space += 50;
	}
}

