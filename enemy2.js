class Enemy2{

    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(l2enemyimg);
        this.body.scale = 0.15;
        enemy2Group.add(this.body);
    }

     createBullet(){

        if(World.frameCount % startCount === 0){
            var num=Math.round(random(1,12))
    
            if(startCount>=0){
              setInterval(() => {
                startCount=startCount-1;
              }, 3000);
            }
    
            if(num===1){
                 bullet(100);
            }
            else  if(num===2&&enemy2.visible){
                bullet(200);
            }
            else  if(num===3&&enemy3.visible){
                bullet(300);
            }
            else  if(num===4){
                bullet(400);
            }
            else  if(num===5&&enemy5.visible){
                bullet(500);
            }
            else  if(num===6){
                bullet(600);
            }
            else  if(num===7){
                bullet(700);
            }
            else  if(num===8){
                bullet(800);
            }
            else  if(num===9){
                bullet(900);
            }
            else  if(num===10){
                bullet(1000);
            }
            else  if(num===11){
                bullet(1100);
            }
            else  if(num===12){
                bullet(1200);
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
       
    }
}

