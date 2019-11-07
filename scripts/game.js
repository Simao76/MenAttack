class Game {
    constructor ($canvas) {
     this.context = $canvas.getContext('2d');
    
    this.player = new Player(this, 500, 400)
   // this.obstacles = new Obstacles(this, undefined)
    this.obstaclesTimer = 0;
    this.speed = 500;
    this.controls = new Controls(this) 
    this.obstacles = [];
    this.gameover = new Gameover(this)
    this.end = false;
    this.controls.presskeys()
    this.time = new Time (this) 

    }

        startGame() {
        this.controls.presskeys()
        this.obstacles.push(new Obstacles(this)) 
        this.animation()
        console.log(this.time.currentTime)
        
        
        } 
     
  
   drawEverything() {
    this.context.clearRect(0, 0, 1000, 500,)
      this.player.drawPlayer()
    
      
      for (let i = 0; i < this.obstacles.length; i ++) {
            
            this.obstacles[i].draw();
            this.obstacles[i].update();
        
       }
      
     
 for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].update();
      }  
      /* const obstacle = obstacles[]; */
      /* const colided = checkCollision true  */
   

    }

    animation(timestamp) {
      this.time.getSeconds()
      if (this.time.currentTime >= 15) {
        this.speed = 350;
        console.log("aumentou")
        
      }

    if (this.time.currentTime >= 25) {
    this.speed = 300;
    console.log("aumentou")
    
      }

      if (this.time.currentTime >= 45) {
        this.speed = 100;
        console.log("aumentou")
        
          }

        this.drawEverything()
          for (let i = this.obstacles.length - 1; i >= 0; i--) {
        if (this.player.checkCollision(this.player, this.obstacles[i])) {
           console.log("COLLISIONN") 
            this.end = true;
            this.time.stopClick()
            this.gameover.clearAll()
            this.gameover.draw() 
            

    }
    this.time.draw()
        }
       /*  this.obstacles[0].update()  */
       /*  this.updateEverything(timestamp) */
       
        if(this.obstaclesTimer < timestamp - this.speed){
        this.obstacles.push(new Obstacles (this))
        this.obstaclesTimer = timestamp
      }

        /*   if (this.obstacles >= 0) {
          this.obstacles.push(); 
         }  */
        
        // requestAnimationFrame will generate a timestamp that we will use it as a reference
        //  for doing other things, and call the animation() again
     const animation = window.requestAnimationFrame((timestamp) => this.animation(timestamp)); 
     if (this.end) {
        window.cancelAnimationFrame(animation)
     }
      /* this.pokemons.splice(i, 1); */
    
        
    }
    resetGame() {
        // this.player = new Player(this, 500, 400);
         // this.obstacles = new Obstacles(this, undefined)
         this.player = new Player(this, 500, 400)
         this.obstaclesTimer = 0;
          this.speed = 500;
          this.obstacles = [];
          this.gameover = new Gameover (this);
          this.end = false;
          this.time = new Time(this) 
          this.animation()
          
   } 
  
    }

    
 

  
  /*  NEXT STEP clearAll () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    
      resetGame() {
        this.player = new Player(100, 100);
    
      } */
    
  