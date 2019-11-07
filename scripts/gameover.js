class Gameover {
    constructor (game) {
      this.game = game;
      this.context = game.context;
      this.image = new Image();
      this.image.src = "/starter_code/Images/manattack.png"
    }

    draw() {
        this.context.drawImage(this.image, 0, 0, 1000, 500)
        console.log("gameover")
    }

      clearAll () {
        this.context.fillRect(0, 0, 1000, 500);
        console.log("limpez")
       }   
       
    
      /* resetGame() {
        this.game = new Game ($canvas); 
};*/
        
    }