class Scene4 extends Phaser.Scene{
    constructor() {
        super("pauseScreen");
    }

    create() {
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        this.add.text(100, 100, "Graphics: Low, Med, High\n\nResolution: 800x600", {
            font: "30px Arial", 
            fill: "white"});

        this.input.keyboard.once('keydown-ESC', () => {
            this.scene.start('playScreen')
        })  

        
    }
}