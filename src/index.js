import 'phaser';
import Main from './scenes/Main';

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  scene: [Main]
};

let game = new Phaser.Game(config);
