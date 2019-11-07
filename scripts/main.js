const $canvas = document.querySelector('canvas');

const width = $canvas.width;
const height = $canvas.height;
const game = new Game ($canvas);
this.gameover = new Gameover (this)
this.context = game.context
this.time = game.time



/* const minDec = document.getElementById('timer').innerText = this.time.currentTime; */

    document.getElementById("start-button").onclick = function() {
       
        game.startGame()
        /* game.resetGame(); */
        game.time.startClick()
        

        console.log("hello")
    };

    document.getElementById("restart-game").onclick = function() {
        
        game.resetGame();
        game.time.startClick()
        /* game.time.stopClick() */
          
    };



/* let animation = undefined; */

/* clearAll () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  resetGame() {
    this.game = new Game ($canvas);

  } */