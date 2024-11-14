// import { Boot } from './scenes/Boot';
// import { Game } from './scenes/Game';
// import { GameOver } from './scenes/GameOver';
// import { MainMenu } from './scenes/MainMenu';
// import Phaser, { Physics } from 'phaser';
// import { Preloader } from './scenes/Preloader';

// // Find out more information about the Game Config at:
// // https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
// const config = {
//     type: Phaser.AUTO,
//     width: 1024,
//     height: 768,
//     parent: 'game-container',
//     backgroundColor: '#028af8',
//     scene: [
//         Boot,
//         Preloader,
//         MainMenu,
//         Game,
//         GameOver,
//     ]
// };

// const StartGame = (parent) => {

//     return new Phaser.Game({ ...config, parent });

// }

// export default StartGame;


import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import Phaser, { Physics } from 'phaser';
import { Preloader } from './scenes/Preloader';

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver,
    ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, // Adjust gravity as needed
            debug: false // Set to true to show debug outlines for physics bodies
        }
    },
    input: {
        // Enable keyboard input
        keyboard: {
            globalSpeed: 500, // Speed of the keyboard inputs (optional)
            capture: true // This captures the keyboard inputs even if the game is not focused
        },
        // Enable mouse/touch input
        mouse: {
            capture: true // Captures mouse events
        },
        // Enable touch input (this is useful for mobile)
        touch: {
            capture: true // Captures touch events
        }
    }
};

const StartGame = (parent) => {
    return new Phaser.Game({ ...config, parent });
}

export default StartGame;
