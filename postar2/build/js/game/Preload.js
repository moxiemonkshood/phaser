var InfiniteScroller = InfiniteScroller || {};

//loading the game assets
InfiniteScroller.Preload = function(){};

InfiniteScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.spritesheet('hunter', 'assets/images/astronaut.sprite.png', 50,50);
    this.load.spritesheet('playerScratch', 'assets/images/dog_scratch.png', 116, 100, 2);
    this.load.spritesheet('playerDig', 'assets/images/dog_dig.png', 129, 100, 2);
    this.load.spritesheet('buttons', 	'assets/images/buttons.png', 32, 32);
    this.load.spritesheet('hop', 'assets/images/hop.png', 32, 32, 6);
    this.load.image('bullet', 'assets/images/bullet.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('grass', 'assets/images/grass.png');
    this.load.audio('whine', ['assets/audio/whine.ogg', 'assets/audio/whine.mp3']);
    this.load.audio('bark', ['assets/audio/bark.ogg', 'assets/audio/bark.mp3']);
    
    this.load.image('mound', 'assets/images/rock.png');
    
    this.load.image('alien', 'assets/images/alien.png');
    this.load.image('bone', 'assets/images/toys/bone.png');
    this.load.image('ball', 'assets/images/toys/tennisball.png');
  },
  create: function() {
    this.state.start('Game');
  }
};