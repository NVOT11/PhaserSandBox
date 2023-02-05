
export default class Main_Scene extends Phaser.Scene {

    constructor() {
        super('Main_Scene');
    }

    create() {
        this.player = this.physics.add.sprite(50, 170, 'player');
        this.player.body.gravity.y = 200;

        this.pipes = this.physics.add.group();

        this.timer = this.time.addEvent({
            delay: 2500,
            callback: this.addRowOfPipes,
            callbackScope: this,
            loop: true
        })
    }

    addRowOfPipes() {
        console.log('Add row of pipes')
        const hole = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < 8; i++) {
            if (i != hole && i != hole + 1) {
                this.addOnePipe(400, i * 60 + 10);
            }
        }
    }

    addOnePipe(x, y) {
        const pipe = this.add.sprite(x, y, 'player');
        this.pipes.add(pipe);
        this.physics.world.enable(pipe);
        pipe.body.velocity.x = -80;
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    }

    update() {
        if (this.input.mousePointer.leftButtonDown()) {
            this.player.setVelocityY(-100);
        } else {
        }
    }
}