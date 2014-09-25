var loadState = {
	preload: function () {
		//Add a "loading..." label on the screen
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {font: '30px Arial', fill: '#ffffff'});
		loadingLabel.anchor.setTo(0.5, 0.5);

		//Display the progress bar
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		//LOAD ALL OUR ASSETS---------------------
		
		//load player image
		game.load.image('player', 'assets/player.png');

		//load wall and floor assets
		game.load.image('wallV', 'assets/wallVertical.png');
		game.load.image('wallH', 'assets/wallHorizontal.png');

		//Loads the coin image
		game.load.image('coin', 'assets/coin.png');

		//Loads the enemy image
		game.load.image('enemy', 'assets/enemy.png');

		//Load the bacground image for the menu
		game.load.image('background', 'assets/background.png');

		//COMPLETE LOADING ASSETS--------------------------
	},

	create: function() {
		//Go to the menu state
		game.state.start('menu');
	}
}