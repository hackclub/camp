var WIDTH = 320;
var HEIGHT = 480;
var BLACK_TILE_WIDTH = WIDTH / 4;
var BLACK_TILE_HEIGHT = HEIGHT / 4;
var BLACK_TILE_SPEED = 3;

var game;
var blackTile;

var preload = function () {
    game.stage.backgroundColor = '#ffffff';
    game.time.advancedTiming = true; // turn on fps
}

var create = function () {
    var blackTileBmd = game.add.bitmapData(BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);

    blackTileBmd.ctx.beginPath();
    blackTileBmd.ctx.rect(0, 0, BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);
    blackTileBmd.ctx.fillStyle = '#000000';
    blackTileBmd.ctx.fill();

    blackTile = game.add.sprite(0, 0, blackTileBmd);
}

var update = function () {
    blackTile.y = blackTile.y + BLACK_TILE_SPEED;

    if (blackTile.y > HEIGHT) {
        blackTile.y = -BLACK_TILE_HEIGHT;
    }
}

var render = function () {
    game.debug.text(game.time.fps || '--', 2, 14, '#00ff00');
}

var mainState = { preload: preload, create: create, render: render, update: update };
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');
game.state.add('main', mainState);
game.state.start('main');
