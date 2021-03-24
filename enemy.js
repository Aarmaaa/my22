class Enemy{

    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(enemyimg);
        this.body.scale = 0.15;
        enemyGroup.add(this.body);
    }

     createBullet(){

        if(World.frameCount % startCount === 0){
            var num=Math.round(random(1,12))
    
            if(startCount>=0){
              setInterval(() => {
                startCount=startCount-1;
              }, 3000);
            }
    
            if(num==1){
                 this.bullet = createSprite(100,100,10,20) 
                 this.bullet.velocityY=3
                 this.bullet.addImage(bulletimg)
                 this.bullet.scale=0.05
                bulletGroup.add(this.bullet)
            }
            else  if(num==2&&enemy2.visible==true){
                var bullet = createSprite(200,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==3&&enemy3.visible==true){
                var bullet = createSprite(300,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==4){
                var bullet = createSprite(400,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==5&&enemy5.visible==true){
                var bullet = createSprite(500,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==6){
                var bullet = createSprite(600,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==7){
                var bullet = createSprite(700,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==8){
                var bullet = createSprite(800,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==9){
                var bullet = createSprite(900,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==10){
                var bullet = createSprite(1000,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==11){
                var bullet = createSprite(1100,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            }
            else  if(num==12){
                var bullet = createSprite(1200,100,10,20) 
                bullet.velocityY=3
                bullet.addImage(bulletimg)
                bullet.scale=0.05
                bulletGroup.add(bullet)
            } 
        }
    }

    dead(){

        if(playerBulletGroup.isTouching(this.body)&&this.body.visible){
            this.body.visible=false;
            bulletGroup.destroyEach();
            score=score+50;
            destroyEnemyCount+=1;
        }
        // else if(playerBulletGroup.isTouching(enemy2)&&enemy2.visible){
        //     enemy2.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy3)&&enemy3.visible){
        //     enemy3.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy4)&&enemy4.visible){
        //     enemy4.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy5)&&enemy5.visible){
        //     enemy5.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy6)&&enemy6.visible){
        //     enemy6.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy7)&&enemy7.visible){
        //     enemy7.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy8)&&enemy8.visible){
        //     enemy8.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // }
        // else if(playerBulletGroup.isTouching(enemy9)&&enemy9.visible){
        //     enemy9.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy10)&&enemy10.visible){
        //     enemy10.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy11)&&enemy11.visible){
        //     enemy11.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // } 
        // else if(playerBulletGroup.isTouching(enemy12)&&enemy12.visible){
        //     enemy12.visible=false;
        //     bulletGroup.destroyEach()
        //     score=score+50
        //     destroyEnemyCount+=1
        // }
    }
}