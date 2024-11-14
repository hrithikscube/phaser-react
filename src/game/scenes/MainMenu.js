import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.image('guy', 'assets/guy.svg');
        this.load.image('guy-right', 'assets/guy-right.svg');
        this.load.image('guy-left', 'assets/guy-left.svg');
        this.load.image('brick', 'assets/brick.avif');
    }

    create() {
        // Create a static brick platform
        const brick = this.physics.add.staticImage(512, 900, 'brick').setDisplaySize(620, 620);

        // Create the guy sprite and enable physics for it
        const guy = this.physics.add.image(512, 0, 'guy').setDisplaySize(50, 60);
        guy.setName('guy');

        // Configure the physics properties of the guy
        guy.setCollideWorldBounds(true); // Prevents the guy from going out of bounds
        guy.setBounce(0.2); // Adds a slight bounce when hitting the brick

        // Add a collider so the guy stands on top of the brick
        this.physics.add.collider(guy, brick);

        // this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys({
            w: Phaser.Input.Keyboard.KeyCodes.W,
            s: Phaser.Input.Keyboard.KeyCodes.S,
            a: Phaser.Input.Keyboard.KeyCodes.A,
            d: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
        });

        EventBus.emit('current-scene-ready', this);
    }

    update() {
        // Get a reference to the guy sprite (ensure it's named correctly)
        const guy = this.children.getByName('guy');
        if (!guy) {
            console.error('Guy sprite not found!');
            return; // Exit if guy sprite is not found
        }

        guy.setVelocityX(0);

        guy.setVelocityY(guy.body.velocity.y);

        // right
        if (this.keys.d.isDown) {
            guy.setVelocityX(160); // Whatever you want
            guy.setTexture('guy-right')
        }

        // jump
        if (this.keys.space.isDown) {
            guy.setVelocityY(-200); // Jump if on the ground
            guy.setTexture('guy')
        }


        // left
        else if (this.keys.a.isDown) {
            guy.setVelocityX(-160); // Whatever you want
            guy.setTexture('guy-left')
        }

    }
}
