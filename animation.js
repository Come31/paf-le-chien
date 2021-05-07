var chien1;
var chien2;
var chien3;
var chien4;
var hasard;
var anim;

function preload() {

  chien1 = loadAnimation(
  'chien1/frame0000.png', 
  'chien1/frame0015.png');
  
  chien2 = loadAnimation( 
  'chien2/frame0000.png',
  'chien2/frame0015.png');
  
  chien3 = loadAnimation( 
  'chien3/frame0000.png',
  'chien3/frame0012.png');
  
  chien4 = loadAnimation( 
  'chien4/frame0000.png',
  'chien4/frame0015.png');
}

function setup() {

 //chien1.looping = false;
 chien2.looping = false;
 chien3.looping = false;
 chien4.looping = false;

  createCanvas(innerWidth,innerHeight);
 
  chien1.frameDelay = 8;
  chien2.frameDelay = 12;
  chien3.frameDelay = 10;
  chien4.frameDelay = 12;
  
  
   background(0);
   anim=1;
  
}

function draw() {
	
	   background(255,255,255);
	
	if (anim == 1){
	 animation(chien1,innerWidth/2, innerHeight/2);
	 chien1.changeFrame(0);
	 }
	 
	 else if (anim == 2) {
	animation(chien2,innerWidth/2, innerHeight/2);
	chien2.changeFrame(0);
	}
	
	 else if (anim == 3) {
	animation(chien3,innerWidth/2, innerHeight/2);
	chien3.changeFrame(0);
	}
	
	 else if (anim == 4) {
	animation(chien4,innerWidth/2, innerHeight/2);
	chien4.changeFrame(0);
	
	}

	 }
	
	function mouseReleased() {
 
		
		var hasard = (Math.floor(Math.random()*3) +1);
	

		switch (hasard) {
		case 1: anim = 3; break;
		case 2: anim = 2; break;
		case 3: anim = 3; break;
		case 4: anim = 4; break;
	}
}