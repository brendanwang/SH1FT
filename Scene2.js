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

        this.rectangle1 = this.add.image(100, 800, "rectangle");
        this.rectangle2 = this.add.image(700, -200, "rectangle");

        this.arrow = this.add.image(0, 290, "arrow");

        // audio
        this.clickSound = this.sound.add("audio_click");
        this.slideogSound = this.sound.add("audio_slideog");

        this.add.text(320, 560, "press space to select", {
            font: "15px Arial", 
            fill: "red",
            x: 320,
            y: 560,
            ease: 'Linear',
            duration: 500,
        });

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

        this.slideogSound.play();

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
            x: 190,
            y: 290, // y location of 'ARROW'
            ease: 'Linear',
            duration: 500,
        });

        this.tweens.add({
            targets: this.rectangle1,
            x: 100,
            y: 500, // y location of 'rectangle1'
            ease: 'Linear',
            duration: 500,
        });

        this.tweens.add({
            targets: this.rectangle2,
            x: 700,
            y: 100, // y location of 'rectangle2'
            ease: 'Linear',
            duration: 500,
        });

        this.input.keyboard.once('keydown-SPACE', () => {
            this.clickSound.play();
            this.cameras.main.fadeOut(500,0,0,0)
        })

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start("playScreen");
        })

    }

    

}