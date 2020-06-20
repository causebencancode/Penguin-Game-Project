/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var collectable;

var canyon;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    
    collectable = {
        x_pos: 550,
        y_pos: floorPos_y-10,
        scale: 1,
        isFound: false
    }
    
     canyon = {
        x_pos: 200,
        y_pos: floorPos_y,
        width: 100
    }
}

function draw()
{

	///////////DRAWING CODE//////////

	background(230,230,250); //fill the sky 
    noStroke();
	fill(174,194,220);
	rect(0, floorPos_y, width, height - floorPos_y); //draw the ground  
    stroke(87,105,128);
    strokeWeight(2);
    line(0, 432, 1024, 432); //horizontal line
    noStroke();
    fill(255,228,225, 45); // ambient "light"
    ellipse(740, 50, 1000, 750);
    noFill();


	

    //draw the canyon, 2d perspective
    fill(129,153,183);
    quad(canyon.x_pos , floorPos_y, canyon.x_pos+canyon.width-70, height, canyon.x_pos+canyon.width-30, height, canyon.x_pos+canyon.width, floorPos_y); //outer shape
    fill(176,224,230);
    quad(canyon.x_pos+23, height+canyon.width-130, canyon.x_pos+canyon.width-70,height, canyon.x_pos+canyon.width-30, height, canyon.x_pos+canyon.width-23, height-30);
    fill(119, 136, 153);
    triangle(canyon.x_pos , floorPos_y, canyon.x_pos+canyon.width-90, height, canyon.x_pos+canyon.width-70, height);
    triangle(canyon.x_pos+canyon.width, floorPos_y, canyon.x_pos+canyon.width-30,height, canyon.x_pos+canyon.width-33,height);
    stroke(100);
    strokeWeight(1);
    line(canyon.x_pos+canyon.width-30, height, canyon.x_pos+canyon.width, floorPos_y);
    noStroke();
    
    
//    fill(129,153,183);
//	quad(canyon.x_pos , 616, canyon.x_pos+60, 431.5, canyon.x_pos+210, 431.5, canyon.x_pos+260, 576); //outer shape
//	stroke(0);
//    strokeWeight(1.5);
//	fill(41,76,122);
//	quad(canyon.x_pos+65, 616, canyon.x_pos+105, 432, canyon.x_pos+165, 432, canyon.x_pos+185, 576); //inner shape
//    fill(100,149,237);
//	quad(canyon.x_pos+85, 616, canyon.x_pos+125, 432, canyon.x_pos+145, 432, canyon.x_pos+165, 576); //most inner shape

    //draw the collectable
    if(!collectable.isFound){
        //collectable item, a diamant ring
        fill(255, 215, 0);
        ellipse(collectable.x_pos, collectable.y_pos, 25*collectable.scale, 25*collectable.scale);
        fill(230,230,250);
        ellipse(collectable.x_pos, collectable.y_pos, 20*collectable.scale, 20*collectable.scale);
        fill(0,191,255);
        quad(collectable.x_pos-15*collectable.scale, 
             collectable.y_pos-18*collectable.scale, 
             collectable.x_pos-5*collectable.scale, 
             collectable.y_pos-11*collectable.scale, 
             collectable.x_pos+5*collectable.scale, 
             collectable.y_pos-11*collectable.scale, 
             collectable.x_pos+15*collectable.scale, 
             collectable.y_pos-18*collectable.scale);
        stroke(255, 255, 255, 200);
        strokeWeight(1*collectable.scale);
        line(collectable.x_pos-15*collectable.scale, 
             collectable.y_pos-18*collectable.scale, 
             collectable.x_pos+15*collectable.scale, 
             collectable.y_pos-18*collectable.scale);
        noStroke();
    }
	//the game character
	if(isLeft && isFalling)
	{  // add your jumping-left code
		fill(255, 160, 122);
        arc(gameChar_x+4, gameChar_y+2, 9, 9, PI, 2*PI); // foot2
        fill(0);
        ellipse(gameChar_x, gameChar_y - 38.5, 17, 17); //head
        ellipse(gameChar_x, gameChar_y - 20, 27, 40); // body
        fill(255, 255, 240);
        ellipse(gameChar_x - 4.5, gameChar_y - 41, 5, 4); //eye2
        fill(255);
        ellipse(gameChar_x-7.2, gameChar_y-14.5, 10, 18);//belly1
        fill(0);
        ellipse(gameChar_x - 4.5, gameChar_y - 41, 1, 2); //iris2
        noFill();
        stroke(0);
        strokeWeight(0.5);
        ellipse(gameChar_x, gameChar_y - 20, 27, 40); //belly outline
        fill(255, 160, 122);
        triangle(gameChar_x-6, gameChar_y - 39, gameChar_x-6, gameChar_y-35, gameChar_x-11.5, gameChar_y-37); //mouth
        fill(128);
        noStroke();
        arc(gameChar_x, gameChar_y - 20, 8, 27, 3*PI/2, 0.5*PI/2, ); //wing2
        fill(255, 160, 122);
        stroke(0);
        strokeWeight(0.2);
        arc(gameChar_x-4.5, gameChar_y+0.1, 10, 10, PI, 2*PI); // foot1 


	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        
        fill(255, 160, 122);
        arc(gameChar_x-4, gameChar_y+2, 9, 9, PI, 2*PI); // foot2
        fill(0);
        ellipse(gameChar_x, gameChar_y - 38.5, 17, 17); //head

        ellipse(gameChar_x, gameChar_y - 20, 27, 40); // body
        fill(255, 255, 240);
        ellipse(gameChar_x + 4.5, gameChar_y - 41, 5, 4); //eye2
        fill(255);
        ellipse(gameChar_x+7.2, gameChar_y-14.5, 10, 18);//belly1
        fill(0);
        ellipse(gameChar_x + 4.5, gameChar_y - 41, 1, 2); //iris2
        noFill();
        stroke(0);
        strokeWeight(0.5);
        ellipse(gameChar_x, gameChar_y - 20, 27, 40); //belly outline
        fill(255, 160, 122);
        triangle(gameChar_x+6, gameChar_y - 39, gameChar_x+6, gameChar_y-35, gameChar_x+11.5, gameChar_y-37);
        fill(128);
        noStroke();
        arc(gameChar_x, gameChar_y - 20, 8, 27, 1.5*PI/2, 3*PI/2,); //wing2

        fill(255, 160, 122);
        stroke(0);
        strokeWeight(0.2);

        arc(gameChar_x+4.5, gameChar_y+0.1, 10, 10, PI, 2*PI); // foot1 

	}
	else if(isLeft)
	{
		// add your walking left code
        fill(0);
        ellipse(gameChar_x, gameChar_y - 40, 17, 17); //head
        ellipse(gameChar_x, gameChar_y - 20, 27, 40); // body
        fill(255, 255, 240);
        ellipse(gameChar_x - 4.5, gameChar_y - 41, 5, 4); //eye2
        fill(255);
        ellipse(gameChar_x-7.2, gameChar_y-14.5, 10, 18);//belly1
        fill(0);
        ellipse(gameChar_x - 4.5, gameChar_y - 41, 1, 2); //iris2
        noFill();
        stroke(0);
        strokeWeight(0.5);
        ellipse(gameChar_x, gameChar_y - 20, 27, 40); //belly outline
        fill(255, 160, 122);
        triangle(gameChar_x-6, gameChar_y - 39, gameChar_x-6, gameChar_y-35, gameChar_x-11.5, gameChar_y-37); //mouth
        fill(128);
        noStroke();
        arc(gameChar_x, gameChar_y - 19.5, 8, 23, 3*PI/2, 0.8*PI/2); //wing1
        fill(255, 160, 122);
        stroke(0);
        strokeWeight(0.2);
        arc(gameChar_x, gameChar_y+2, 10, 10, PI, 2*PI); // foot1 

	}
	else if(isRight)
	{
		// add your walking right code
        
        fill(0);
        ellipse(gameChar_x, gameChar_y - 40, 17, 17); //head
        ellipse(gameChar_x, gameChar_y - 20, 27, 40); // body
        fill(255, 255, 240);
        ellipse(gameChar_x + 4.5, gameChar_y - 41, 5, 4); //eye2
        fill(255);
        ellipse(gameChar_x+7.2, gameChar_y-14.5, 10, 18);//belly1
        fill(0);
        ellipse(gameChar_x + 4.5, gameChar_y - 41, 1, 2); //iris2
        noFill();
        stroke(0);
        strokeWeight(0.5);
        ellipse(gameChar_x, gameChar_y - 20, 27, 40); //belly outline
        fill(255, 160, 122);
        triangle(gameChar_x+6, gameChar_y - 39, gameChar_x+6, gameChar_y-35, gameChar_x+11.5, gameChar_y-37);
        fill(128);
        noStroke();
        arc(gameChar_x, gameChar_y - 19.5, 8, 23, 1.2*PI/2, 3*PI/2); //wing1
        fill(255, 160, 122);
        stroke(0);
        strokeWeight(0.2);
        arc(gameChar_x, gameChar_y+2, 10, 10, PI, 2*PI); // foot1 


	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        
        fill(0);
        ellipse(gameChar_x, gameChar_y - 35, 23, 25); //head
        fill(0);
        ellipse(gameChar_x, gameChar_y - 20, 33, 40); // body
        fill(255);
        ellipse(gameChar_x, gameChar_y-14.5, 23.5, 28);//belly1
        ellipse(gameChar_x, gameChar_y-10, 24, 20);//belly2
        fill(255, 255, 240);
        ellipse(gameChar_x - 2.5, gameChar_y - 38, 7, 8); //eye1
        ellipse(gameChar_x + 2.5, gameChar_y - 37.3, 7, 5.5); //eye2
        fill(0);
        ellipse(gameChar_x -2.5, gameChar_y - 38, 1, 2); //iris1
        ellipse(gameChar_x +2.5, gameChar_y - 38, 1,2 ); //iris2
        fill(255, 160, 122);
        stroke(0);
        strokeWeight(0.2);
        arc(gameChar_x-5, gameChar_y+1, 10, 10, PI, 2*PI); // foot1 
        arc(gameChar_x+5, gameChar_y+4, 10, 10, PI, 2*PI);// foot2
        noStroke();
        smooth();
        triangle(gameChar_x-5, gameChar_y - 34, gameChar_x+5, gameChar_y - 34, gameChar_x, gameChar_y - 26 ); //mouth
        fill(128);

        arc(gameChar_x - 14.5, gameChar_y - 17, 5, 21, 1.2*PI/2, 3*PI/2); //wing1

        arc(gameChar_x + 14, gameChar_y - 25, 5, 25, 3*PI/2, 0.5*PI/2,); //wing2

	}
	else
	{
		// add your standing front facing code
        
        noStroke();
        fill(0);
        ellipse(gameChar_x, gameChar_y - 35, 23, 25); //head
        fill(0);
        ellipse(gameChar_x, gameChar_y - 20, 33, 40); // body
        fill(255);
        ellipse(gameChar_x, gameChar_y-14.5, 23.5, 28);//belly1
        noStroke();
        ellipse(gameChar_x, gameChar_y-10, 24, 20);//belly2
        fill(255, 255, 240);
        ellipse(gameChar_x - 2.5, gameChar_y - 38, 7, 8); //eye1
        ellipse(gameChar_x + 2.5, gameChar_y - 37.3, 7, 5.5); //eye2
        fill(0);
        ellipse(gameChar_x -2.5, gameChar_y - 38, 1, 2); //iris1
        ellipse(gameChar_x +2.5, gameChar_y - 38, 1,2 ); //iris2
        fill(255, 160, 122);
        stroke(0);
        strokeWeight(0.2);
        arc(gameChar_x-5, gameChar_y+2, 10, 10, PI, 2*PI); // foot1 
        arc(gameChar_x+5, gameChar_y+2, 10, 10, PI, 2*PI);// foot2
        noStroke()
        smooth();
        triangle(gameChar_x-5, gameChar_y - 34, gameChar_x+5, gameChar_y - 34, gameChar_x, gameChar_y - 26 ); //mouth
        fill(128);
        arc(gameChar_x - 14, gameChar_y - 20, 5, 20, 1.2*PI/2, 3*PI/2); //wing1
        arc(gameChar_x + 14, gameChar_y - 20, 5, 20, 3*PI/2, 0.8*PI/2,); //wing2

	}
    

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if(isLeft){
        gameChar_x -= 2;
    }
    if(isRight){
        gameChar_x += 2;
    }
    
    
    if(gameChar_y < floorPos_y){ // char in the air
        gameChar_y += 1.5;
        isFalling = true;
        
        if(abs(gameChar_y - floorPos_y) <= 10){ // set char back on to the ground if in reach
            isFalling = false;
        }
    }
    
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos)<= 25){ //collect item if in reach (25px)
        collectable.isFound = true;
    }
    
    
    if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos+canyon.width && gameChar_y >= floorPos_y){ //if char is over the canyon and NOT in the air but on the ground or falling below
        isPlummeting = true;
    }
    
    if(isPlummeting){
        gameChar_y += 5; //plummet speed
        gameChar_x = constrain(gameChar_x, canyon.x_pos, canyon.x_pos+canyon.width); //constrain x movement to the canyon width
    } 
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    if(keyCode == 37){
        isLeft = true;
    }
    
    if(keyCode == 39){
        isRight = true;
    }
    
    if(keyCode == 32){
        if(gameChar_y == floorPos_y){
            gameChar_y -= 100;
        }
    }
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    if(keyCode == 37){
        isLeft = false;
    }
    
    if(keyCode == 39){
        isRight = false;
    }
    
    
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
