
// Load
export default class Load_Scene extends Phaser.Scene {

    constructor() {
        super('Load_Scene');
    }
    
    preload() {
        this.load.image('back', 'assets/back.png');
        this.load.spritesheet('witch', 'assets/witch.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.createAnims();    
        this.scene.start('Title_Scene');    
    }
    
    createAnims()
    {
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('witch', { start: 9, end: 11 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('witch', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('witch', { start: 6, end: 8 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('witch', { start: 3, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
    }
    
}
