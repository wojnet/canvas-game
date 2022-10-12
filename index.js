//IMPORTS
import { Viewport } from "./viewport.js";
import { CubePlayer, ImagePlayer } from "./players.js";
import { Sprite } from "./sprites.js";
import { imgBob, okComputerBg } from "./textureManager.js";

const WIDTH = 256;
const HEIGHT = 256;

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
//  ==================
//  You can use either CubePlayer or ImagePlayer class
//  to create controlable (WASD) players!
//  
//  Parameters:
//  new CubePlayer(x, y, width, height, speed, color, hp, context, viewport, defaultPlayerList);
//  new ImagePlayer(x, y, width, height, speed, texture, hp, context, viewport, defaultPlayerList);
//
//  Just uncomment one of these samples to play:

// var player = new CubePlayer(128, 64, 64, 64, 2, "pink", 100, ctxMain, viewport, playerList);
var bg = new Sprite(0, 0, 2000, 2000, okComputerBg, ctxBg, viewport, spriteList);
//  var player2 = new ImagePlayer(256, 256, 32, 32, 2, imgBob, 100, ctxMain, viewport, playerList);

// JANOWY GRACZ
 var player2 = new ImagePlayer(256, 256, 32, 32, 2, imgBob, 100, ctx1, playerList);


//GAME LOOP THINGS
const update = () => {
    playerList.forEach(e => e.update());
    viewport.move(player.x + player.w/2 - WIDTH/2, player.y + player.h/2 - HEIGHT/2);
    // BIEŻNIA!!!!
    // viewport.x++
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