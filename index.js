//IMPORTS
import { Viewport } from "./viewport.js";
import { CubePlayer, ImagePlayer } from "./players.js";
import { Sprite } from "./sprites.js";
import { textures } from "./textureManager.js";

const WIDTH = 768;
const HEIGHT = 512;

const [ canvasBg, canvasMain ] = Array.from(document.querySelectorAll("canvas"));

//CANVASBG CONFIG
canvasBg.width = WIDTH;
canvasBg.height = HEIGHT;
const ctxBg = canvasBg.getContext("2d");
canvasBg.style.opacity = 0.5;

//CANVASMAIN "NEAR" CONFIG

canvasMain.width = WIDTH;
canvasMain.height = HEIGHT;
const ctxMain = canvasMain.getContext("2d");

//LISTS OF GAME OBJECTS
var playerList = [];
var entityList = [];
var blockList = [];
var spriteList = [];

//  CREATING VIEWPORT
//  =================
//  Parameters:
//  new Viewport(x, y, padding);
var viewport = new Viewport(0, 0, 32);

//  CREATING PLAYER(S)
var bg = new Sprite(0, 0, 1000, 1000, textures.okComputerBg, ctxBg, viewport, spriteList);

// var player = new ImagePlayer(256, 256, 128, 128, 10, true, textures.imgBob, 100, ctxMain, viewport, playerList);
var player = new CubePlayer(64, 64, 64, 64, 3, true, "pink", 100, ctxMain, viewport, playerList);
viewport.follow = player;
viewport. isFollowing = true;
viewport.padding = 20;


//GAME LOOP THINGS
const update = () => {
    playerList.forEach(e => e.update());
    viewport.update();
    // viewport.move(player.x + player.w/2 - WIDTH/2, player.y + player.h/2 - HEIGHT/2);
}

const draw = () => {
    // CLEANING
    ctxBg.clearRect(0, 0, WIDTH, HEIGHT);
    ctxMain.clearRect(0, 0, WIDTH, HEIGHT);

    playerList.forEach(e => e.draw());
    spriteList.forEach(e => e.draw());
}

const animate = () => {

    update();
    draw();

    window.requestAnimationFrame(animate);
}

animate();