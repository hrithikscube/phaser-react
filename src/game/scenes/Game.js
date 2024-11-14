import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image('bg', 'assets/bg.png')
        this.load.image('brick', 'assets/brick.avif')

    }

    create() {
        this.add.image(512, 384, 'bg')

        const brick = this.add.image(0, 384, 'brick')

        brick.setDisplaySize(100, 100)

        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
        this.scene.start('GameOver');
    }
}
