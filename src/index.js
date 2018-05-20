import Phaser from 'phaser';
import Main from 'Scenes/Main';

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  scene: [Main],
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
