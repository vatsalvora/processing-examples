let list = ["Nand","Yashoda","Balram","Krishna"];
let colors = ["Orange","Purple","Green","Blue"];
function setup() {
  createCanvas(700, 700);
}

function draw() {
	background(255);
	let space = 0;
	textSize(50);
	for (x in list){
		let c = color(colors[x]);
		fill(c);
		text(list[x],40,50+space);
		space += 50;
	}
}