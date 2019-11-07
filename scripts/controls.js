class Controls {
    constructor(game){
    this.game = game;
    }
presskeys() {
    window.addEventListener('keydown', (event) => {
        // Stop the default behavior (moving the screen to the left/up/right/down)
        event.preventDefault();
        // React based on the key pressed
        switch (event.keyCode) {
            case 37:
                this.game.player.moveLeft();
                console.log('left');
                break;
            
            case 39:
                this.game.player.moveRight();
                console.log('right');
                break;
            
        }
    });  
}

}