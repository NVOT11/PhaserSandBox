
// Title_Scene
export default class Title_Scene extends Phaser.Scene {

    constructor() {
        super('Title_Scene');
    }
    
    create() {
        let widthValue = this.game.config.width;
        let heightValue = this.game.config.height;

        //Game Title
        let title = this.add.text(widthValue / 2, heightValue / 3 * 1, 'GAME TITLE', { font: '40px Arial' }).setOrigin(0.5);

        //Start Button
        let start = this.add.text(widthValue / 2, heightValue / 3 * 2, 'START',
            { font: '20px Arial' }).setInteractive().setOrigin(0.5).setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        start.on('pointerdown', function (pointer) {
            this.scene.start('Sub_Scene');
        }, this);
    }    
}
