class Scene6 extends Phaser.Scene{
    constructor() {
        super("desktopScreen");
    }

    create() {
        this.desktop = this.add.image(0,0,"desktop");
        this.desktop.setOrigin(0,0);
    }
}