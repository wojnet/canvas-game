//IMPORTS
import { Viewport } from "./viewport.js";
import { CubePlayer, ImagePlayer } from "./players.js";
import { Sprite } from "./sprites.js";
import { Hitbox, EventBlock } from "./blocks.js";
import { Menu } from "./gui.js";
import { textures } from "./textureManager.js";
import { plot } from "./plot.js";
import { emptyRoom, room1 } from "./rooms.js";

const WIDTH = 384;
const HEIGHT = 384;
const SHOWHITBOXES = false;

//LISTS OF GAME OBJECTS
var playerList = [];
var entityList = [];
var blockList = [];
var spriteList = [];
var hitboxList = [];
var eventBlockList = [];
var viewportList = [];
var guiList = [];

var currentViewport;
var currentPlayer;

const [ canvasBg, canvasBlocks, canvasMain ] = Array.from(document.querySelectorAll("canvas"));

//CANVASBG CONFIG
canvasBg.width = WIDTH;
canvasBg.height = HEIGHT;
const ctxBg = canvasBg.getContext("2d");
canvasBg.style.opacity = 0.5;

//CANVASBLOCKS "HITBOX AND EVENTS" CONFIG
canvasBlocks.width = WIDTH;
canvasBlocks.height = HEIGHT;
const ctxBlocks = canvasBlocks.getContext("2d");
canvasBlocks.style.opacity = 0.75;

//CANVASMAIN "NEAR" CONFIG
canvasMain.width = WIDTH;
canvasMain.height = HEIGHT;
const ctxMain = canvasMain.getContext("2d");

//  CREATING VIEWPORT
//  =================
//  Parameters:
//  new Viewport(x, y, padding);
var viewport = new Viewport(0, 0, WIDTH, HEIGHT, viewportList);
var viewport2 = new Viewport(0, 0, WIDTH, HEIGHT, viewportList);
currentViewport = viewport;

//!!! DODAJ KONTEKST DLA MENU !!!
var mainMenu = new Menu(0, 0, 192, 256, WIDTH, HEIGHT, ctxMain, currentViewport, false, 0, guiList, [startGame]);

//  CREATING PLAYER(S)
var player = new CubePlayer(0, 0, 32, 32, 2, true, "red", 100, ctxMain, currentViewport, false, playerList, hitboxList);
// var player = new ImagePlayer(128, 128, 58, 79, 3, true, textures.imgBob, 100, ctxMain, currentViewport, true, playerList, hitboxList);
// var player = new ImagePlayer(64, 64, 64, 64, 3, true, textures.imgBob, 100, ctxMain, currentViewport, playerList, hitboxList);
currentPlayer = player;

// CREATING HITBOXES (later they will load from map)
// new Hitbox(0, 0, 320, 64, ctxBlocks, currentViewport, true, hitboxList);
// new Hitbox(0, 64, 64, 256, ctxBlocks, currentViewport, true, hitboxList);
// new Hitbox(64, 256, 64, 64, ctxBlocks, currentViewport, true, hitboxList);
// new Hitbox(192, 256, 64, 64, ctxBlocks, currentViewport, true, hitboxList);
// new Hitbox(256, 64, 64, 256, ctxBlocks, currentViewport, true, hitboxList);



//OPTIONS
viewport.follow = currentPlayer;
viewport.isFollowing = true;
viewport.padding = 160;

viewport2.follow = currentPlayer;
viewport2.isFollowing = true;
viewport2.padding = 30;

const loadRoom = (_room, _player, _playerX, _playerY) => {
    entityList = [];
    blockList = [];
    spriteList = [];
    hitboxList = [];
    eventBlockList = [];
    _player.x = _playerX;
    _player.y = _playerY;
    for (let y = 0; y < _room.map.length; y++) {
        for (let x = 0; x < _room.map[0].length; x++) {
            switch(_room.map[y][x]) {
            case 0:
                break;
            case 1:
                new Sprite(x * 64, y * 64, 64, 64, textures.stone, ctxBlocks, currentViewport, spriteList);
                new Hitbox(x * 64, y * 64, 64, 64, ctxBlocks, currentViewport, true, hitboxList);
                break;
            case 2:
                new Sprite(x * 64, y * 64, 64, 64, textures.bark, ctxBlocks, currentViewport, spriteList);
                break;
            }   
        }
    }
    _room.execute.forEach(e => {
        switch(e[0]) {
            case "eventBlock":
                new EventBlock(e[1], e[2], e[3], e[4], ctxBlocks, currentViewport, eventBlockList, e[5]);
                break;
        }
    });
}

const init = () => {
    loadRoom(emptyRoom, player, 0, 0);
    mainMenu.switchToggle();

    ctxBg.font = "30px monospace";
    ctxMain.font = "30px monospace";
    ctxBlocks.font = "30px monospace";

    ctxBg.textAlign = "center";
    ctxMain.textAlign = "center";
    ctxBlocks.textAlign = "center";

    ctxBg.textBaseline = "middle";
    ctxMain.textBaseline = "middle";
    ctxBlocks.textBaseline = "middle";
}

//GAME LOOP THINGS
const update = () => {
    playerList.forEach(e => e.update(hitboxList, eventBlockList));
    /* viewportList.forEach(e => e.update()); */ currentViewport.update();
    // viewport.move(player.x + player.w/2 - WIDTH/2, player.y + player.h/2 - HEIGHT/2);
}

const draw = () => {
    // CLEANING
    ctxBg.clearRect(0, 0, WIDTH, HEIGHT);
    ctxMain.clearRect(0, 0, WIDTH, HEIGHT);
    ctxBlocks.clearRect(0, 0, WIDTH, HEIGHT);

    playerList.forEach(e => e.draw());
    spriteList.forEach(e => e.draw());
    guiList.filter(e => e.on).forEach(e => e.draw());
    if (SHOWHITBOXES) hitboxList.forEach(e => e.draw());
    eventBlockList.forEach(e => e.draw());
}

const animate = () => {

    update();
    draw();

    window.requestAnimationFrame(animate);
}

init();
animate();

function startGame() {
    loadRoom(room1, player, 128, 128);
    player.toggle = true;
    mainMenu.switchToggle();
}