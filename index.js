//IMPORTS
import { Viewport } from "./viewport.js";
import { CubePlayer, ImagePlayer } from "./players.js";
import { Sprite } from "./sprites.js";
import { Hitbox } from "./blocks.js";
import { textures } from "./textureManager.js";

const WIDTH = 384;
const HEIGHT = 384;

//LISTS OF GAME OBJECTS
var playerList = [];
var entityList = [];
var blockList = [];
var spriteList = [];
var hitboxList = [];
var viewportList = [];

var currentViewport;

const [ canvasBg, canvasMain, canvasBlocks ] = Array.from(document.querySelectorAll("canvas"));

//CANVASBG CONFIG
canvasBg.width = WIDTH;
canvasBg.height = HEIGHT;
const ctxBg = canvasBg.getContext("2d");
canvasBg.style.opacity = 0.5;

//CANVASMAIN "NEAR" CONFIG

canvasMain.width = WIDTH;
canvasMain.height = HEIGHT;
const ctxMain = canvasMain.getContext("2d");

//CANVASBLOCKS "HITBOX AND EVENTS" CONFIG
canvasBlocks.width = WIDTH;
canvasBlocks.height = HEIGHT;
const ctxBlocks = canvasBlocks.getContext("2d");
canvasBlocks.style.opacity = 0.75;

//  CREATING VIEWPORT
//  =================
//  Parameters:
//  new Viewport(x, y, padding);
var viewport = new Viewport(0, 0, WIDTH, HEIGHT, viewportList);
var viewport2 = new Viewport(0, 0, WIDTH, HEIGHT, viewportList);
currentViewport = viewport;

//  CREATING PLAYER(S)
var player = new CubePlayer(64, 64, 64, 64, 3, true, "blue", 100, ctxMain, currentViewport, playerList, hitboxList);
// var player = new ImagePlayer(64, 64, 64, 64, 3, true, textures.imgBob, 100, ctxMain, currentViewport, playerList, hitboxList);

// CREATING HITBOXES (later they will load from map)
var hitbox = new Hitbox(64, 192, 64, 64, ctxBlocks, currentViewport, hitboxList);
var hitbox2 = new Hitbox(192, 64, 128, 64, ctxBlocks, currentViewport, hitboxList);

//OPTIONS
viewport.follow = player;
viewport.isFollowing = true;
viewport.padding = 160;

viewport2.follow = player;
viewport2.isFollowing = true;
viewport2.padding = 30;

//GAME LOOP THINGS
const update = () => {
    playerList.forEach(e => e.update());
    viewportList.forEach(e => e.update());
    // viewport.move(player.x + player.w/2 - WIDTH/2, player.y + player.h/2 - HEIGHT/2);
}

const draw = () => {
    // CLEANING
    ctxBg.clearRect(0, 0, WIDTH, HEIGHT);
    ctxMain.clearRect(0, 0, WIDTH, HEIGHT);
    ctxBlocks.clearRect(0, 0, WIDTH, HEIGHT);

    playerList.forEach(e => e.draw());
    spriteList.forEach(e => e.draw());
    hitboxList.forEach(e => e.draw());
}

const animate = () => {

    update();
    draw();
    // console.log(hitboxList);

    window.requestAnimationFrame(animate);
}

animate();