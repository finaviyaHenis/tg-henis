var Start = 0;
var Play = 1;
var End = 2;
var Won = 3;
var gameState = Start;

var candyCollected = 0;
var candyScore = 0;
var lifetime = 3;
var hbg1, hbg1Img;
var play, playImg;
var hText, hTextImg;
var hbg2, hbg2Img;
var htable, htableImg;
var h1, h2, h3, h4;
var hSound;
var h1Img, h2Img, h3Img, h4Img;
var candy1, candy2, candy3, candy4, candy5, candy6, candy7;
var candy1Img, candy2Img, candy3Img, candy4Img, candy5Img, candy6Img, candy7Img;
var candy1Grp, candy2Grp, candy3Grp, candy4Grp, candy5Grp, candy6Grp, candy7Grp;
var cdeath1, cdeath1Img, cdeath1Grp;
var cdeath2, cdeath2Img, cdeath2Grp;
var bucket, bucketImg;
var gameover, gameoverImg;
var youWon, youWonImg;
var restart, restartImg;
var life1, life1Img, life2, life2Img, life3, life3Img;
var candyCollected1, candyCollected1Img;
var candyScore1, candyScore1Img;

function preload()
{
  hbg1Img = loadImage("h_bg1.jpg");
  playImg = loadImage("play.png");
  hTextImg = loadImage("hText.png");
  hbg2Img = loadImage("h_bg2.jpg");
  htableImg = loadImage("htable.png");
  h1Img = loadImage("h1.png");
  h2Img = loadImage("h2.png");
  h3Img = loadImage("h3.png");
  h4Img = loadImage("h4.png");
  hSound = loadSound("halloween.mp3");
  candy1Img = loadImage("candy1.png");
  candy2Img = loadImage("candy2.png");
  candy3Img = loadImage("candy3.png");
  candy4Img = loadImage("candy4.png");
  candy5Img = loadImage("candy5.png");
  candy6Img = loadImage("candy6.png");
  candy7Img = loadImage("candy7.png");
  cdeath1Img = loadImage("cdeath1.png");
  cdeath2Img = loadImage("cdeath2.png");
  bucketImg = loadImage("bucket.png");
  candyCollected1Img = loadImage("candyCollected.png");
  candyScore1Img = loadImage("candyScore.png");
  gameoverImg = loadImage("gameover.png");
  youWonImg = loadImage("youWon.png");
  restartImg = loadImage("restart.png");
  life1Img = loadImage("life1.png");
  life2Img = loadImage("life2.png");
  life3Img = loadImage("life3.png");
}

function setup()
{
  createCanvas(600,600);
  
  hbg1 = createSprite(300,300);
  hbg1.addImage(hbg1Img);
  hbg1.scale = 0.9;
  
  play = createSprite(160,380);
  play.addImage(playImg);
  play.scale = 0.08;
  
  hText = createSprite(360,300);
  hText.addImage(hTextImg);
  hText.scale = 0.1;
  
  hbg2 = createSprite(300,300);
  hbg2.addImage(hbg2Img);
  hbg2.scale = 1;
  hbg2.visible = false;
  
  htable = createSprite(300,330);
  htable.addImage(htableImg);
  htable.scale = 1;
  htable.visible = false;
  
  h1 = createSprite(120,310);
  h1.addImage(h1Img);
  h1.scale = 0.7
  h1.visible = false;
  
  h2 = createSprite(244,310);
  h2.addImage(h2Img);
  h2.scale = 0.7
  h2.visible = false;
  
  h3 = createSprite(356,324);
  h3.addImage(h3Img);
  h3.scale = 0.7
  h3.visible = false;
  
  h4 = createSprite(480,330);
  h4.addImage(h4Img);
  h4.scale = 0.7
  h4.visible = false;
  
  hSound.loop = true;
  hSound.play();
  
  bucket = createSprite(300,520);
  bucket.addImage(bucketImg);
  bucket.scale = 0.14;
  bucket.visible = false;
  
  line1 = createSprite(1,300,5,600);
  line1.visible = false;
  
  line2 = createSprite(599,300,5,600);
  line2.visible = false;
  
  line3 = createSprite(300,510,40,8);
  line3.visible = false;
  
  candy1Grp = new Group();
  candy2Grp = new Group();
  candy3Grp = new Group();
  candy4Grp = new Group();
  candy5Grp = new Group();
  candy6Grp = new Group();
  candy7Grp = new Group();
  cdeath1Grp = new Group();
  cdeath2Grp = new Group();
  
  gameover = createSprite(300,300);
  gameover.addImage(gameoverImg);
  gameover.scale = 0.188;
  gameover.visible = false;
  
  youWon = createSprite(300,300);
  youWon.addImage(youWonImg);
  youWon.scale = 0.188;
  youWon.visible = false;
  
  restart = createSprite(300,360);
  restart.addImage(restartImg);
  restart.scale = 0.08;
  restart.visible = false;
  
  life1 = createSprite(156,50);
  life1.addImage(life1Img);
  life1.scale = 0.3;
  life1.visible = false;
  
  life2 = createSprite(148,50);
  life2.addImage(life2Img);
  life2.scale = 0.3;
  life2.visible = false;
  
  life3 = createSprite(146,60);
  life3.addImage(life3Img);
  life3.scale = 0.3;
  life3.visible = false;
  
  candyCollected1 = createSprite(436,34);
  candyCollected1.addImage(candyCollected1Img);
  candyCollected1.scale = 0.1;
  candyCollected1.visible = false;
  
  candyScore1 = createSprite(434,70);
  candyScore1.addImage(candyScore1Img);
  candyScore1.scale = 0.1;
  candyScore1.visible = false;
}

function draw()
{
  drawSprites();
  
  if(gameState===Start)
  {
    if(mousePressedOver(play))
    {
      gameState=Play;
    }
  }
  
  if(gameState===Play)
  {
    hbg2.visible = true;
    htable.visible = true;
    h1.visible = true;
    h2.visible = true;
    h3.visible = true;
    h4.visible = true;
    gameover.visible = false;
    restart.visible = false;
    bucket.visible = true;
    candyCollected1.visible = true;
    candyScore1.visible = true;
    life1.visible = true;
    bucket.bounceOff(line1);
    bucket.bounceOff(line2);
    line3.x = bucket.x
    
    if(keyDown("left_Arrow"))
    {
      bucket.x = bucket.x - 5;
    }
    if(keyDown("right_Arrow"))
    {
      bucket.x = bucket.x + 5;
    }
      
    var select_candy = Math.round(random(1,7));
    if (World.frameCount % 60 === 0)
    {
    if (select_candy == 1)
     {
      hcandy1();
     } else if (select_candy == 2) 
     {
      hcandy2();
     } else if (select_candy == 3) 
     {
      hcandy3();
     } else if (select_candy == 4) 
     {
      hcandy4();
     } else if (select_candy == 5)
     {
      hcandy5();
     } else if (select_candy == 6)
     {
      hcandy6();
     } else
     {
      hcandy7();
     }
    }
    
    var select_cdeath = Math.round(random(1,2));
    if (World.frameCount % 60 === 0)
    {
    if (select_cdeath == 1)
     {
      hcdeath1();
     } else
     {
      hcdeath2();
     }
    }
    
    if(candy1Grp.isTouching(line3))
    {
      candy1Grp.destroyEach();
      candyCollected = candyCollected + 1;
      candyScore = candyScore + 1;
    }
    if(candy2Grp.isTouching(line3))
    {
      candy2Grp.destroyEach();
      candyCollected = candyCollected + 1;
      candyScore = candyScore + 2;
    }
    if(candy3Grp.isTouching(line3))
    {
      candy3Grp.destroyEach();
      candyCollected = candyCollected + 1;
      candyScore = candyScore + 3;
    }
    if(candy4Grp.isTouching(line3))
    {
      candy4Grp.destroyEach();
      candyCollected = candyCollected + 1;
      candyScore = candyScore + 2;
    }
    if(candy5Grp.isTouching(line3))
    {
      candy5Grp.destroyEach();
      candyCollected = candyCollected + 1;
      candyScore = candyScore + 1;
    }
    if(candy6Grp.isTouching(line3))
    {
      candy6Grp.destroyEach();
      candyCollected = candyCollected + 1;
      candyScore = candyScore + 2;
    }
    if(candy7Grp.isTouching(line3))
    {
      candy7Grp.destroyEach();
      candyCollected = candyCollected + 1;
      candyScore = candyScore + 3;
    }
    if(cdeath1Grp.isTouching(line3) || cdeath2Grp.isTouching(line3))
    {
      lifetime = lifetime - 1;
      cdeath1Grp.destroyEach();
      cdeath2Grp.destroyEach();
    }
    
    if(lifetime === 3)
    {
      life1 = createSprite(156,50);
      life1.addImage(life1Img);
      life1.scale = 0.3;
    }
    
    if(lifetime === 2)
    {
      life1 = createSprite(148,50);
      life1.addImage(life2Img);
      life1.scale = 0.3;
    }
    
    if(lifetime === 1)
    {
      life1 = createSprite(146,60);
      life1.addImage(life3Img);
      life1.scale = 0.3;
    }
    
    if(lifetime === 0)
    {
      gameState = End;
    }
    
    if(candyCollected >= 30 && candyScore >= 60)
    {
      gameState = Won;
    }
    
    fill("yellow");
    stroke("orange");
    strokeWeight(5);
    textSize(20);
    text("×" + candyCollected,460,40);
    
    fill("green");
    stroke("violet");
    strokeWeight(5);
    textSize(20);
    text("×" + candyScore,460,78);
    
    fill("white");
    stroke("black");
    strokeWeight(10);
    textSize(30);
    text("×" + lifetime,190,70);
  }
  
  if(gameState===End)
  {
    candy1Grp.destroyEach();
    candy2Grp.destroyEach();
    candy3Grp.destroyEach();
    candy4Grp.destroyEach();
    candy5Grp.destroyEach();
    candy6Grp.destroyEach();
    candy7Grp.destroyEach();
    cdeath1Grp.destroyEach();
    cdeath2Grp.destroyEach();
    gameover.visible = true;
    restart.visible = true;
    
    fill("yellow");
    stroke("orange");
    strokeWeight(5);
    textSize(20);
    text("×" + candyCollected,460,40);
    
    fill("green");
    stroke("violet");
    strokeWeight(5);
    textSize(20);
    text("×" + candyScore,460,78);
    
    fill("white");
    stroke("black");
    strokeWeight(10);
    textSize(30);
    text("×" + lifetime,190,70);
    
    if(gameState === End && mousePressedOver(restart))
    {
      gameState = Play;
      candyCollected = 0;
      candyScore = 0;
      lifetime = 3;
      hbg1.visible = true;
      play.visible = true;
      gameover.visible = false;
      restart.visible = false;
    }
  }
  
  if(gameState===Won)
  {
    candy1Grp.destroyEach();
    candy2Grp.destroyEach();
    candy3Grp.destroyEach();
    candy4Grp.destroyEach();
    candy5Grp.destroyEach();
    candy6Grp.destroyEach();
    candy7Grp.destroyEach();
    cdeath1Grp.destroyEach();
    cdeath2Grp.destroyEach();
    youWon.visible = true;
    restart.visible = true;
    
    fill("yellow");
    stroke("orange");
    strokeWeight(5);
    textSize(20);
    text("×" + candyCollected,460,40);
    
    fill("green");
    stroke("violet");
    strokeWeight(5);
    textSize(20);
    text("×" + candyScore,460,78);
    
    fill("white");
    stroke("black");
    strokeWeight(10);
    textSize(30);
    text("×" + lifetime,190,70);
    
    if(gameState === Won && mousePressedOver(restart))
    {
      gameState = Play;
      candyCollected = 0;
      candyScore = 0;
      lifetime = 3;
      hbg1.visible = true;
      play.visible = true;
      youWon.visible = false;
      restart.visible = false;
    }
  }
}

function hcandy1()
{
  candy1 = createSprite(120,310);
  candy1.addImage(candy1Img);
  candy1.velocityY = 5;
  candy1.scale = 0.6;
  candy1Grp.add(candy1);
}

function hcandy2()
{
  candy2 = createSprite(356,310);
  candy2.addImage(candy3Img);
  candy2.velocityY = 5;
  candy2.scale = 0.6;
  candy2Grp.add(candy2);
}

function hcandy3()
{
  candy3 = createSprite(244,310);
  candy3.addImage(candy3Img);
  candy3.velocityY = 5;
  candy3.scale = 0.6;
  candy3Grp.add(candy3);
}

function hcandy4()
{
  candy4 = createSprite(480,310);
  candy4.addImage(candy4Img);
  candy4.velocityY = 5;
  candy4.scale = 0.6;
  candy4Grp.add(candy4);
}

function hcandy5()
{
  candy5 = createSprite(120,310);
  candy5.addImage(candy5Img);
  candy5.velocityY = 5;
  candy5.scale = 0.6;
  candy5Grp.add(candy5);
}

function hcandy6()
{
  candy6 = createSprite(356,310);
  candy6.addImage(candy6Img);
  candy6.velocityY = 5;
  candy6.scale = 0.6;
  candy6Grp.add(candy6);
}

function hcandy7()
{
  candy7 = createSprite(480,310);
  candy7.addImage(candy7Img);
  candy7.velocityY = 5;
  candy7.scale = 0.6;
  candy7Grp.add(candy7);
}

function hcdeath1()
{
  if(World.frameCount%200===0)
  {
    cdeath1= createSprite(Math.round(random(120,480)),310,10,10);
    cdeath1.addImage(cdeath1Img);
    cdeath1.scale = 0.6;
    cdeath1.velocityY = 5;
    cdeath1Grp.add(cdeath1);
  }
}

function hcdeath2()
{
  if(World.frameCount%200===0)
  {
    cdeath2= createSprite(Math.round(random(120,480)),310,10,10);
    cdeath2.addImage(cdeath2Img);
    cdeath2.scale = 0.6;
    cdeath2.velocityY = 5;
    cdeath2Grp.add(cdeath2);
  }
}