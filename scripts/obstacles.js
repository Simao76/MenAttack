class Obstacles {
    constructor (game, position) {
        this.game = game;
      this.positionX = Math.floor(Math.random() * 1000);
      /* this.vy = 90 */
      this.context = game.context;
      this.positionY = 0;
      this.obsheight = 50;
      /* this.objectwidth = Math.floor(Math.random() *50); */
      this.objectwidth = 70;
      this.image = new Image();
      this.image.src = "/images/IMGBIN_fishing-net-material-png_2gSCtuvm.png"
    }
    
   update() {
        this.positionX = this.positionX + 1; 
       this.positionY = this.positionY + 2;
      
   } 

     setRandomSizeObs () {
        obswidth = Math.floor(Math.random() *50);
        obsheight = Math.floor(Math.random() *50);
        
      }  
  
  /*   setRandomPosition () {
      const x = Math.floor(Math.random() * 300);
      const y = Math.floor(Math.random() * 400); 
  
      this.position = [ x, y ]; 
  
    
    } */
  
    draw () {
      /* const context = this.context;
      const position = this.position; */
      

       /* IMG this.game.context.drawImage(this.image.src,this.positionX, this.positionY, this.objectwidth, 30) */
      
       this.context.drawImage(this.image, this.positionX, this.positionY, this.objectwidth, 30)

        /*  const GRID_SIZE = 100;
  
      this.game.context.fillStyle = 'black';
  
      this.game.context.fillRect(this.positionX, this.positionY, this.objectwidth, 30)    */
    }

    /* update(); */

  }  
  
  
  /* const obstacle = new Obstacles (0) */
  
  /* createObstacles() */
  