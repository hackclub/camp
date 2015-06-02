var WIDTH = 320;
var HEIGHT = 480;
var BLACK_TILE_WIDTH = WIDTH / 4;
var BLACK_TILE_HEIGHT = HEIGHT / 4;
var BLACK_TILE_SPEED = 3;

var game;
var blackTile1;
var blackTile2;
var blackTileBmd;
var tappedBlackTileBmd;

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

    blackTile1 = game.add.sprite(0, 0, blackTileBmd);
    blackTile1.tapped = false;
    blackTile2 = game.add.sprite(BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT, blackTileBmd);
    blackTile2.tapped = false;
}

var update = function () {
    blackTile1.y = blackTile1.y + BLACK_TILE_SPEED;
    blackTile2.y = blackTile2.y + BLACK_TILE_SPEED;

    if (blackTile1.y > HEIGHT) {
        if (!blackTile1.tapped) {
            alert('Game Over!');
            game.state.restart();
        }

        blackTile1.y = -BLACK_TILE_HEIGHT;
        blackTile1.loadTexture(blackTileBmd);
        blackTile1.tapped = false;
    }

    if (blackTile2.y > HEIGHT) {
        if (!blackTile2.tapped) {
            alert('Game Over!');
            game.state.restart();
        }

        blackTile2.y = -BLACK_TILE_HEIGHT;
        blackTile2.loadTexture(blackTileBmd);
        blackTile2.tapped = false;
    }

    if (game.input.mousePointer.isDown || game.input.pointer1.isDown) {
        if (Phaser.Rectangle.contains(blackTile1, game.input.x, game.input.y)) {
            blackTile1.loadTexture(tappedBlackTileBmd);
            blackTile1.tapped = true;
        }

        if (Phaser.Rectangle.contains(blackTile2, game.input.x, game.input.y)) {
            blackTile2.loadTexture(tappedBlackTileBmd);
            blackTile2.tapped = true;
        }
    }
}

var render = function () {
    game.debug.text(game.time.fps || '--', 2, 14, '#00ff00');
}

var mainState = { preload: preload, create: create, render: render, update: update };
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');
game.state.add('main', mainState);
game.state.start('main');
