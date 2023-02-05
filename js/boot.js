import Load_Scene from './load.js';
import Title_Scene from './title.js';
import Main_Scene from './main.js';
import Sub_Scene from './sub.js';

window.onload = function () {
    new Phaser.Game(config);
}

const config = {
    type: Phaser.AUTO,
    parent: 'canvas',
    width: 400,
    height: 400,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            }
        }
    },
    scene: [Load_Scene, Title_Scene, Main_Scene, Sub_Scene]
};