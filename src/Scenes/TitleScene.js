import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.plugin(
      'rexinputtextplugin',
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js',
      true,
    );
  }

  create() {
    this.add.text(140, 20, 'IMD0801 - MECÂNICAS E BALANCEAMENTO DE JOGOS - T01 (2022.2) !', {
      fontSize: '15px',
      // fixedWidth: 150,
      fixedHeight: 100,
      fontStyle: 'bold',
    });

    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 30, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 30, 'blueButton1', 'blueButton2', 'Options', 'Options');

    this.textLabel = this.add.text(
      230,
      config.height / 2 + 250,
      'By: Wesley Gurgel and Daniel Otaviano',
      {
        fontSize: '17px',
        fontStyle: 'bold',
      },
    );

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }


  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2, config.height / 2 - offset * 100,
        config.width, config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      this.gameText,
      gameButton,
    );
  }
}

