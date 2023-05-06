class Scene3 extends Phaser.Scene{
    constructor() {
        super("playScreen");
    }

    create() {
        this.cameras.main.fadeIn(500,0,0,0)
        this.background = this.add.image(0,0,"background");
        
        // set the background to start at the origin
        this.background.setOrigin(0,0);
        
        this.add.text(50, 50, "the game does not exist yet\nbut there are a few working features", {
            font: "30px Arial", 
            fill: "white"});

        this.add.text(50, 200, "controls:\nescape: pause\nspace: quit game", {
            font: "30px Arial", 
            fill: "white"});

        this.input.keyboard.once('keydown-ESC', () => {
            this.scene.start('pauseScreen')
            this.clickSound.play();
        })  

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('creditsScreen')
            this.clickSound.play();
        })  

        /* this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('playGame')
        }) */
    }

}