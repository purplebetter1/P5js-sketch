var r,g,b,diam,x,y;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150);
	

}

function draw() {
r = random(255);
g = random(255);
b = random(255);
diam = random(20);
x = random(windowWidth);
y = random(windowHeight);
fill(r,g,b);
ellipse(x,y,diam,diam);
	}
