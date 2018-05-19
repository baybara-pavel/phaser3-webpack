import logoImage from 'Assets/images/logo.png';

export default class Main extends Phaser.Scene {
  constructor() {
    super({
      key: 'Main'
    });
  }

  preload() {
    this.load.image('logo', logoImage);
  }

  create() {
    let logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });
  }
}
