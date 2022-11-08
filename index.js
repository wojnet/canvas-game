//IMPORTS
import { Viewport } from "./viewport.js";
import { CubePlayer, ImagePlayer } from "./players.js";
import { Sprite } from "./sprites.js";
import { Hitbox } from "./blocks.js";
import { textures } from "./textureManager.js";
import { plot } from "./plot.js";
import { emptyRoom, room1 } from "./rooms.js";

const WIDTH = 384;
const HEIGHT = 384;
const SHOWHITBOXES = true;

//LISTS OF GAME OBJECTS
var playerList = [];
var entityList = [];
var blockList = [];
var spriteList = [];
var hitboxList = [];
var viewportList = [];

var currentViewport;

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

//  CREATING PLAYER(S)
var player = new ImagePlayer(128, 128, 58, 79, 3, true, textures.imgBob, 100, ctxMain, currentViewport, true, playerList, hitboxList);
// var player = new ImagePlayer(64, 64, 64, 64, 3, true, textures.imgBob, 100, ctxMain, currentViewport, playerList, hitboxList);

// CREATING HITBOXES (later they will load from map)
new Hitbox(0, 0, 320, 64, ctxBlocks, currentViewport, true, hitboxList);
new Hitbox(0, 64, 64, 256, ctxBlocks, currentViewport, true, hitboxList);
new Hitbox(64, 256, 64, 64, ctxBlocks, currentViewport, true, hitboxList);
new Hitbox(192, 256, 64, 64, ctxBlocks, currentViewport, true, hitboxList);
new Hitbox(256, 64, 64, 256, ctxBlocks, currentViewport, true, hitboxList);

//OPTIONS
viewport.follow = player;
viewport.isFollowing = true;
viewport.padding = 160;

viewport2.follow = player;
viewport2.isFollowing = true;
viewport2.padding = 30;

const loadRoom = (room) => {
    entityList = [];
    blockList = [];
    spriteList = [];
    hitboxList = [];
    for (let y = 0; y < room.length; y++) {
        for (let x = 0; x < room[0].length; x++) {
            switch(room[y][x]) {
            case 0:
                break;
            case 1:
                new Sprite(x * 64, y * 64, 64, 64, textures.stone, ctxBlocks, currentViewport, spriteList);
                break;
            case 2:
                new Sprite(x * 64, y * 64, 64, 64, textures.bark, ctxBlocks, currentViewport, spriteList);
                break;
            }   
        }
    }
}

const init = () => {
    loadRoom(room1);
}

//GAME LOOP THINGS
const update = () => {
    playerList.forEach(e => e.update());
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
    if (SHOWHITBOXES) hitboxList.forEach(e => e.draw());
}

const animate = () => {

    update();
    draw();
    // console.log(hitboxList);

    window.requestAnimationFrame(animate);
}

init();
animate();