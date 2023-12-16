var box;

function setup() {
  createCanvas(400,400);
  backround(51);
  box = createSprite(200,200,30,30);

}

function draw()
{
  

  if(keyIsDown(RIGHT_ARROW))
  {
    backround("red");
  }

    if(keyIsDown(LEFT_ARROW))
    {
    backround("blue");
    
    }
 
    if(keyIsDown(UP_ARROW)) 
    {
    backround("yellow");
   
    }

  if (keyIsDown(DOWN_ARROW))
  {
   backround("green")
  }

  drawSprites();
}




