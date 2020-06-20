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
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


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
        gameChar_x -= 1; //moving left
    }
    if(isRight){
        gameChar_x += 1; //moving right
    }
    
    if(gameChar_y < floorPos_y){ //if character is above ground
        gameChar_y += 2; //falling speed
        isFalling = true; //falling character
        
        if(abs(gameChar_y - floorPos_y)<= 10){
            isFalling = false;
        }
    }
    else{
        isFalling = false;
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
