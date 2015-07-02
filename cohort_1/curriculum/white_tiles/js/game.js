var WIDTH = 320;
var HEIGHT = 480;
var BLACK_TILE_WIDTH = WIDTH / 4;
var BLACK_TILE_HEIGHT = HEIGHT / 4;
var BLACK_TILE_SPEED = 3;
var BLACK_TILE_COUNT = 4;
var RANDOM_OFFSET_MAX = 6;

var game;
var blackTiles;
var blackTileBmd;
var tappedBlackTileBmd;

var createBlackTile = function (x, y) {
    var blackTile = game.add.sprite(x, y, blackTileBmd);
    blackTile.tapped = false;

    return blackTile;
}

var resetBlackTile = function (blackTile) {
    blackTile.y = -BLACK_TILE_HEIGHT;
    blackTile.loadTexture(blackTileBmd);
    blackTile.tapped = false;
}

var gameOver = function () {
    alert('Game Over!');
    game.state.restart();
}

var preload = function () {
    game.stage.backgroundColor = '#ffffff';
    game.time.advancedTiming = true; // turn on fps
}

var create = function () {
    blackTileBmd = game.add.bitmapData(BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);
    blackTileBmd.ctx.beginPath();
    blackTileBmd.ctx.rect(0, 0, BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);
    blackTileBmd.ctx.fillStyle = '#000000';
    blackTileBmd.ctx.fill();

    tappedBlackTileBmd = game.add.bitmapData(BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);
    tappedBlackTileBmd.ctx.beginPath();
    tappedBlackTileBmd.ctx.rect(0, 0, BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);
    tappedBlackTileBmd.ctx.fillStyle = '#a9a9a9';
    tappedBlackTileBmd.ctx.fill();

    blackTiles = [];
    for (var i = 0; i < BLACK_TILE_COUNT; i++) {
        blackTiles.push(createBlackTile(BLACK_TILE_WIDTH * (i % 4), -BLACK_TILE_HEIGHT * Math.floor(Math.random() * RANDOM_OFFSET_MAX)));
    }
}

var update = function () {
    var tileTapped = false;
    for (var i = 0; i < blackTiles.length; i++) {
        var blackTile = blackTiles[i];
        blackTile.y = blackTile.y + BLACK_TILE_SPEED;

        if (blackTile.y > HEIGHT) {
            if (!blackTile.tapped) {
                gameOver();
                return;
            } else {
                resetBlackTile(blackTile)
            }
        }

        if (game.input.mousePointer.isDown || game.input.pointer1.isDown) {
            if (Phaser.Rectangle.contains(blackTile, game.input.x, game.input.y)) {
                blackTile.loadTexture(tappedBlackTileBmd);
                blackTile.tapped = true;
                tileTapped = true;
            }
        }
    }

    if ((game.input.mousePointer.isDown || game.input.pointer1.isDown) && !tileTapped) {
        gameOver();
        return;
    }
}

var render = function () {
    game.debug.text(game.time.fps || '--', 2, 14, '#00ff00');
}

var mainState = { preload: preload, create: create, render: render, update: update };
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');
game.state.add('main', mainState);
game.state.start('main');
