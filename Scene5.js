class Scene5 extends Phaser.Scene{
    constructor() {
        super("creditsScreen");
    }

    create() {
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        this.add.text(300, 50, "Credits", {
            font: "30px Arial", 
            fill: "white"});

        this.add.text(10, 150, "Developer: Brendan Wang\n\nDesigner: Brendan Wang\n\nEverything is my own work except for the default fonts\n\nThe Blackwater Interactive logo was drawn\nby me in the app, 'Goodnotes'\n\nThe title 'SH1FT' was created by me in 'Aseprite'", {
            font: "30px Arial", 
            fill: "white"});

        this.add.text(230, 550, "Press 'SPACE' to quit to desktop", {
            font: "20px Arial", 
            fill: "red"});

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('desktopScreen')
        }) 
    }
}