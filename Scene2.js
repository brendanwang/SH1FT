class Scene2 extends Phaser.Scene{
    constructor() {
        super("menuScreen");
    }

    create() {
        this.cameras.main.fadeIn(500,0,0,0)
        this.background = this.add.image(0,0,"background");
        
        // set the background to start at the origin
        this.background.setOrigin(0,0);
        
        //starting dimensions before tween:  x   y
        this.title = this.add.image(390, 0, "title");
        this.play = this.add.image(config.width/2, 600, "play");
        this.settings = this.add.image(config.width/2, 600, "settings");
        this.credits = this.add.image(config.width/2, 600, "credits");

        this.arrow = this.add.image(0, 290, "arrow");

        this.tweens.add({
            targets: this.title,
            x: 390,
            y: 100,
            ease: 'Linear',
            duration: 500,
        });

        this.tweens.add({
            targets: this.play,
            x: config.width/2,
            y: 300, // y location of 'PLAY'
            ease: 'Linear',
            duration: 500,
        });

        this.tweens.add({
            targets: this.settings,
            x: config.width/2,
            y: 400, // y location of 'SETTINGS'
            ease: 'Linear',
            duration: 500,
        });

        this.tweens.add({
            targets: this.credits,
            x: config.width/2,
            y: 500, // y location of 'CREDITS'
            ease: 'Linear',
            duration: 500,
        });

        this.tweens.add({
            targets: this.arrow,
            x: 170,
            y: 290, // y location of 'ARROW'
            ease: 'Linear',
            duration: 500,
        });

        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(500,0,0,0)
        })

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start("playScreen");
        })

    }

}