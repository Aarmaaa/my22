var score=0

var fakeBullet

var player,playerimg,playerbulletimg;

var playerimg2

var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemyimg

var l2enemy1,l2enemy2,l2enemy3,l2enemy4,l2enemy5,l2enemy6,l2enemy7,l2enemy8,l2enemy9,l2enemyimg

var enemyHealth=2

var gameoverimg

var level2EnemyBullet

var bulletimg;

var bulletGroup;

var playerBulletGroup;

var enemyGroup;

var enemy2Group;

var gameState='play'

var lazersound;

var startCount=50;

var destroyEnemyCount=0

var button,buttonimg

var level=1

var mainenemy,mainenemy2,mainenemyimg

function preload(){

    buttonimg=loadImage("images/level2.png")

    playerimg=loadImage("images/player.png");

    enemyimg=loadImage("images/enemy.png");
    
    bulletimg=loadImage("images/bullet.png");
    
    playerbulletimg=loadImage("images/playerbullet.png")
    
    gameoverimg=loadImage("images/gameover.png")

    lazersound=loadSound("sound/lazersound.mp3")

    l2enemyimg=loadImage("images/enemys.png")

    mainenemyimg=loadImage("images/mainenemy.png")

}

function setup(){
    canvas = createCanvas(displayWidth-175, displayHeight-120);
    
    fakeBullet=createSprite(-100,0,20,20);

    bulletGroup=new Group();
    bulletGroup.add(fakeBullet);

    enemy2Group = new Group()
    /*  setInterval(() => {
          console.log("inCreateBullet")
  }, 300);
  */
  
      playerBulletGroup=new Group()
  
      enemyGroup=new Group()
    // if(gameState=='play'&&level==1){
    player= new Player(displayWidth/2,displayHeight/1.3);

    enemy1 = new Enemy(100,50);
    enemy2 = new Enemy(200,50);
    enemy3 = new Enemy(300,50);
    enemy4 = new Enemy(400,50);
    enemy5 = new Enemy(500,50);
    enemy6 = new Enemy(600,50);
    enemy7 = new Enemy(700,50);
    enemy8 = new Enemy(800,50);
    enemy9 = new Enemy(900,50);
    enemy10 = new Enemy(1000,50);
    enemy11 = new Enemy(1100,50);    
    enemy12 = new Enemy(1200,50);

//  }

}

function draw(){
    background("white");
    
    if(gameState=='play'&&level==1){
        textSize(20)
        fill("black")
        text("score :"+score,30,height-30)
        enemy1.createBullet();
        enemy1.dead();

   player.playerMove();

    if(keyWentDown("space")){        
        playerBullet();
    }
    

   /*  if(bulletGroup.length){
        player.body.destroy();
        bulletGroup.destroyEach();
       // playerBulletGroup.destroyEach()
        gameState='end';
    } */
    //play,lose,win
    console.log("Bullet length: " + bulletGroup.length);
  

    if(destroyEnemyCount==12&&level==1){
        level=2  
        player.visible=false; 
        
    }

    }
    if(gameState=='end'&&level==1){
        var gameover=createSprite(600,350,10,10)
        gameover.addImage(gameoverimg)
        enemyGroup.destroyEach()
    }

    if(level=="next level"){
      

      //  level2Elements();
        levelEnemyBullets();
        
        button.visible=false
        player.visible=true; 
    
        if(keyDown(LEFT_ARROW)){
            changePosition(-10,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(10,0);
        }
        if(keyWentDown("space")){        
            lazersound.play();
            playerBullet()
        }

    }

    if(level==2){
        textSize(50)
        fill("black")
        textStyle(BOLD);
        textFont('georgia')
        text("Total Score   " +score,width/2-250,height/2-100);
        button=createSprite(width/2,height/2+100,40,10)
        button.addImage(buttonimg)
        
        if(mousePressedOver(button)){
          
            level2Elements()
            
        }
       
        
    }
    drawSprites();
}


function level2Elements(){

    level="next level"
    
    mainenemy=createSprite(width/4,120,20,20)
    mainenemy.addImage(mainenemyimg)
    mainenemy.scale=0.45

    mainenemy2=createSprite(width/2+width/4,120,20,20)
    mainenemy2.addImage(mainenemyimg)
    mainenemy2.scale=0.45

        // l2enemy1=createSprite(70,300,20,20)
        // l2enemy1.addImage(l2enemyimg)
        // l2enemy1.scale=0.5

        l2enemy1 = new Enemy2(70,300,20,20);

        // l2enemy2=createSprite(225,300,20,20)
        // l2enemy2.addImage(l2enemyimg)
        // l2enemy2.scale=0.5

        l2enemy2 = new Enemy2(225,300,20,20);

        // l2enemy3=createSprite(375,300,20,20)
        // l2enemy3.addImage(l2enemyimg)
        // l2enemy3.scale=0.5

        l2enemy3 = new Enemy2(375,300,20,20);

        // l2enemy4=createSprite(520,300,20,20)
        // l2enemy4.addImage(l2enemyimg)
        // l2enemy4.scale=0.5

        l2enemy4 = new Enemy2(520,300,20,20);

        // l2enemy5=createSprite(670,300,20,20)
        // l2enemy5.addImage(l2enemyimg)
        // l2enemy5.scale=0.5

        l2enemy5= new Enemy2(670,300,20,20);

        // l2enemy6=createSprite(820,300,20,20)
        // l2enemy6.addImage(l2enemyimg)
        // l2enemy6.scale=0.5

        l2enemy6 = new Enemy2(820,300,20,20);

        // l2enemy7=createSprite(965,300,20,20)
        // l2enemy7.addImage(l2enemyimg)
        // l2enemy7.scale=0.5

        l2enemy7 = new Enemy2(965,300,20,20);

        // l2enemy8=createSprite(1110,300,20,20)
        // l2enemy8.addImage(l2enemyimg)
        // l2enemy8.scale=0.5

        l2enemy8 = new Enemy2(1110,300,20,20);

        // l2enemy9=createSprite(1255,300,20,20)
        // l2enemy9.addImage(l2enemyimg)
        // l2enemy9.scale=0.5

        l2enemy9 = new Enemy2(1255,300,20,20);


}

function changePosition(x,y){
    player.x = player.x + x;
    player.y = player.y + y;
}

// function levelEnemyBullets(){

//     if(World.frameCount % startCount === 0 ){
//         var num=Math.round(random(1,9))

//         if(startCount>=0){
//           setInterval(() => {
//             startCount=startCount-1;
//           }, 3000);
//         }

//         if(num==1&&l2enemy1.visible==true){
//         var level2EnemyBullet=createSprite(70,350,5,20)
//         level2EnemyBullet.velocityY=1
     
//         level2EnemyBullet.addImage(bulletimg)
//         level2EnemyBullet.scale=0.05;
//         }
//         else if(num==2&&l2enemy2.visible==true){
//         var level2EnemyBullet=createSprite(225,350,5,20)
//         level2EnemyBullet.velocityY=1
     
//         level2EnemyBullet.addImage(bulletimg)
//         level2EnemyBullet.scale=0.05
//         }
//         else if(num==3&&l2enemy3.visible==true){
//             var level2EnemyBullet=createSprite(375,350,5,20)
//             level2EnemyBullet.velocityY=1
         
//             level2EnemyBullet.addImage(bulletimg)
//             level2EnemyBullet.scale=0.05
//             }
//             else if(num==4&&l2enemy4.visible==true){
//                 var level2EnemyBullet=createSprite(520,350,5,20)
//                 level2EnemyBullet.velocityY=1
             
//                 level2EnemyBullet.addImage(bulletimg)
//                 level2EnemyBullet.scale=0.05
//                 }
//     }
// }

function playerBullet(){

        var bullet1 = createSprite(player.x,player.y-50,10,20) 

        bullet1.velocityY=-5
        bullet1.addImage(playerbulletimg)
        bullet1.scale=0.05;
        playerBulletGroup.add(bullet1)
}

function bullet(x){
    var bullet = createSprite(x,100,10,20) 
    bullet.velocityY=3
    bullet.addImage(bulletimg)
    bullet.scale=0.05
    bulletGroup.add(bullet)
}