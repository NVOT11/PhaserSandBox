
// Sub
export default class Sub_Scene extends Phaser.Scene {
    
    constructor() {
        super('Sub_Scene');
    }

    player;

    create() {
        this.add.image(400, 300, 'back');

        let widthValue = this.game.config.width;
        let heightValue = this.game.config.height;
        this.player = this.add.sprite(widthValue/2, heightValue/2, 'witch');
        
        this.player.anims.play('down', true);
    }
    
    update() {
        const UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        if (UP.isDown) {
            this.player.y -= 1;
            this.player.anims.play('up', true);
        }
        
        const DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        if (DOWN.isDown) {
            this.player.y += 1;
            this.player.anims.play('down', true);
        }

        const RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        if (RIGHT.isDown) {
            this.player.x += 1;
            this.player.anims.play('right', true);
        }

        const LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        if (LEFT.isDown) {
            this.player.x -= 1;
            this.player.anims.play('left', true);            
        }    
    }
}