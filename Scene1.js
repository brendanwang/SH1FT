class Scene1 extends Phaser.Scene{
    constructor() {
        super("bootGame");
    }

    preload() {

        // load images
        // this.load.image("background", "assets/images/background.png");
        this.load.image("ship", "assets/images/ship.png");
        this.load.image("ship2", "assets/images/ship2.png");
        this.load.image("ship3", "assets/images/ship3.png");
        this.load.image("background", "assets/images/background.png");
        this.load.image("play", "assets/images/play.png");
        this.load.image("settings", "assets/images/settings.png");
        this.load.image("credits", "assets/images/credits.png");
        this.load.image("logo", "assets/images/logo.png");
        this.load.image("title", "assets/images/title.png");
        this.load.image("rectangle", "assets/images/rectangle.png");
        this.load.image("arrow", "assets/images/arrow.png");
    }

    create() {
        //            x   y
        //this.add.text(20, 20, "Loading game...");

        // fade into scene
        this.cameras.main.fadeIn(500,0,0,0)

        // logo image
        this.logo = this.add.image(config.width/2, 280, "logo");

        // game studio text
        this.add.text(270, 350, "BLACKWATER INTERACTIVE", {
            font: "20px Arial", 
            fill: "black"});

        // instructions to move to next scene
        this.add.text(250, 550, "press SPACE to move to the next scene", {
            font: "18px Arial", 
            fill: "black"});

        //this.add.text(centerX, game.config.height, 'S for next Scene').setOrigin(0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(500,0,0,0)
        })

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('menuScreen')
        })
        // this.scene.start("playGame")
    }
}