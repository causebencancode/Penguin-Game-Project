/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;
    
	// Initialise arrays of scenery objects.
    
    trees_x = [550, 700, 800, 1550, 1650, 2000, 2050];
    
    clouds = [{
        x_pos: 100,
        y_pos: 100,
        scale: 1.5}, 
        {
        x_pos: 350,
        y_pos: 80,
        scale: 1}, 
        {
        x_pos: 700,
        y_pos: 145,
        scale: 1.2},
        {
        x_pos: 1300,
        y_pos: 90,
        scale: 1.4},
        {
        x_pos: 1600,
        y_pos: 110,
        scale: 1.1},
        {
        x_pos: 2000,
        y_pos: 150,
        scale: 1.2
        }];
        
    
    canyons = [{
        x_pos: 300,
        y_pos: floorPos_y,
        width: 100},
        {
        x_pos: 650,
        y_pos: floorPos_y,
        width: 80}, 
        {
        x_pos: 1200,
        y_pos: floorPos_y,
        width: 100},
        {
        x_pos: 1700,
        y_pos: floorPos_y,
        width: 85},
        {
        x_pos: 2400,
        y_pos: floorPos_y,
        width: 90}
        ];
    
    mountains = [{
        x_pos: 500,
        y_pos: floorPos_y,
        scale: 1.5},
        {
        x_pos: 1000,
        y_pos: floorPos_y,
        scale: 1.5},
        {
        x_pos: 1250,
        y_pos: floorPos_y,
        scale: 1.2},
        {
        x_pos: 2000,
        y_pos: floorPos_y,
        scale: 1.4}
        ];
    
    collectables = [{
        x_pos: 400,
        y_pos: floorPos_y-12,
        scale: 1,
        isFound: false},
        {
        x_pos: 1500,
        y_pos: floorPos_y-12,
        scale: 1,
        isFound: false},
        {
        x_pos: 2340,
        y_pos: floorPos_y-12,
        scale: 1,
        isFound: false}];
}

function draw()
{

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
    push();
    
    translate(scrollPos,0);
    
	// Draw clouds[i]s.
    
    for(var i = 0; i < clouds.length; i++){
        noStroke();
        fill(255, 250, 250);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, 80*clouds[i].scale, 80*clouds[i].scale); // inner circle
        ellipse(clouds[i].x_pos-30*clouds[i].scale, clouds[i].y_pos+2*clouds[i].scale, 65*clouds[i].scale, 65*clouds[i].scale); //left circle
        ellipse(clouds[i].x_pos+30*clouds[i].scale, clouds[i].y_pos+5*clouds[i].scale, 65*clouds[i].scale, 65*clouds[i].scale); //right circle
    }

	// Draw mountains.
    for(var i = 0; i < mountains.length; i++){
        fill(62, 75, 92);
        triangle(mountains[i].x_pos+130*mountains[i].scale, mountains[i].y_pos, mountains[i].x_pos+180*mountains[i].scale, mountains[i].y_pos-75*mountains[i].scale, mountains[i].x_pos+230*mountains[i].scale, mountains[i].y_pos); //small mountains[i]
        triangle(mountains[i].x_pos+164*mountains[i].scale, mountains[i].y_pos-52*mountains[i].scale, mountains[i].x_pos+180*mountains[i].scale, mountains[i].y_pos-75*mountains[i].scale, mountains[i].x_pos+195*mountains[i].scale, mountains[i].y_pos-52*mountains[i].scale);//snow small
        fill(87,105,128);
        triangle(mountains[i].x_pos, mountains[i].y_pos, mountains[i].x_pos+100*mountains[i].scale, mountains[i].y_pos-149*mountains[i].scale, mountains[i].x_pos+200*mountains[i].scale, mountains[i].y_pos);//big mountains[i]
        fill(255);
        triangle(mountains[i].x_pos+60*mountains[i].scale, mountains[i].y_pos-89*mountains[i].scale ,mountains[i].x_pos+100*mountains[i].scale, mountains[i].y_pos-149*mountains[i].scale, mountains[i].x_pos+140*mountains[i].scale, mountains[i].y_pos-89*mountains[i].scale); //snow big
        noStroke();
        fill(0);
        triangle(mountains[i].x_pos, mountains[i].y_pos, mountains[i].x_pos-20*mountains[i].scale, mountains[i].y_pos, mountains[i].x_pos+100*mountains[i].scale, mountains[i].y_pos-149*mountains[i].scale);//shadow for big mountains[i]
    }

	// Draw trees.
    for(var i = 0; i < trees_x.length; i++){
        //tree 
        fill(62, 75, 92);  //trunk
        triangle(trees_x[i]-15, floorPos_y, trees_x[i], floorPos_y-160, trees_x[i]+15, floorPos_y);
        //tree top, several ellipses
        fill(112, 123, 159,250);
        ellipse(trees_x[i]+5, floorPos_y-160, 100, 90);
        fill(112, 123, 159, 200);
        ellipse(trees_x[i]-15, floorPos_y-150, 70, 70);
        fill(112, 123, 159, 170);
        ellipse(trees_x[i]-10, floorPos_y-180, 70, 70);
        fill(112, 123, 159, 180);
        ellipse(trees_x[i]+20, floorPos_y-170, 75, 80);
        ellipse(trees_x[i]+25, floorPos_y-150, 70, 70);
    }

	// Draw canyons
    
    for(var i = 0; i < canyons.length; i++){
        fill(129,153,183);
        quad(canyons[i].x_pos , floorPos_y, canyons[i].x_pos+canyons[i].width-70, height, canyons[i].x_pos+canyons[i].width-30, height, canyons[i].x_pos+canyons[i].width, floorPos_y); //outer shape
        fill(176,224,230);
        quad(canyons[i].x_pos+23, height+canyons[i].width-130, canyons[i].x_pos+canyons[i].width-70,height, canyons[i].x_pos+canyons[i].width-30, height, canyons[i].x_pos+canyons[i].width-23, height-30);
        fill(119, 136, 153);
        triangle(canyons[i].x_pos , floorPos_y, canyons[i].x_pos+canyons[i].width-90, height, canyons[i].x_pos+canyons[i].width-70, height);
        triangle(canyons[i].x_pos+canyons[i].width, floorPos_y, canyons[i].x_pos+canyons[i].width-30,height, canyons[i].x_pos+canyons[i].width-33,height);
        stroke(100);
        strokeWeight(1);
        line(canyons[i].x_pos+canyons[i].width-30, height, canyons[i].x_pos+canyons[i].width, floorPos_y);
        noStroke();
    }

	// Draw collectable items
    for(var i=0; i < collectables.length; i++){
        if(!collectables[i].isFound){
        //collectable item, a diamant ring
        noFill();
        stroke(255, 215, 0);
        strokeWeight(3);
        ellipse(collectables[i].x_pos, collectables[i].y_pos, 25*collectables[i].scale, 25*collectables[i].scale);
        noStroke();
        fill(0,191,255);
        quad(collectables[i].x_pos-15*collectables[i].scale, 
             collectables[i].y_pos-18*collectables[i].scale, 
             collectables[i].x_pos-5*collectables[i].scale, 
             collectables[i].y_pos-11*collectables[i].scale, 
             collectables[i].x_pos+5*collectables[i].scale, 
             collectables[i].y_pos-11*collectables[i].scale, 
             collectables[i].x_pos+15*collectables[i].scale, 
             collectables[i].y_pos-18*collectables[i].scale);
        stroke(255, 255, 255, 200);
        strokeWeight(1*collectables[i].scale);
        line(collectables[i].x_pos-15*collectables[i].scale, 
             collectables[i].y_pos-18*collectables[i].scale, 
             collectables[i].x_pos+15*collectables[i].scale, 
             collectables[i].y_pos-18*collectables[i].scale);
        noStroke();
        }
    }
    
    pop();

	// Draw the game character - this must be last
    
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

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
