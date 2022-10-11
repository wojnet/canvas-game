//IMPORTING CLASSES & IMAGES
import { CubePlayer, ImagePlayer } from "./players.js";
import { imgBob } from "./textureManager.js";

const WIDTH = 512;
const HEIGHT = 512;

const [ canvas1, canvas2 ] = Array.from(document.querySelectorAll("canvas"));

//CANVAS1 "FAR" CONFIG
canvas1.width = WIDTH;
canvas1.height = HEIGHT;
const ctx1 = canvas1.getContext("2d");

//CANVAS2 "NEAR" CONFIG
canvas2.width = WIDTH;
canvas2.height = HEIGHT;
const ctx2 = canvas2.getContext("2d");

//LISTS OF GAME OBJECTS
var playerList = [];
var entityList = [];
var blockList = [];

//CREATING PLAYER(S)
//==================
//  You can use either CubePlayer or ImagePlayer class
//  to create controlable (WASD) players!
//  
//  Parameters:
//  new CubePlayer(x, y, width, height, speed, color, hp, context, defaultPlayerList);
//  new ImagePlayer(x, y, width, height, speed, texture, hp, context, defaultPlayerList);
//
//  Just uncomment one of these samples to play:
//  var player = new CubePlayer(128, 256, 64, 64, 3, "#FFA", 100, ctx1, playerList);
//  var player2 = new ImagePlayer(256, 256, 32, 32, 2, imgBob, 100, ctx1, playerList);

//GAME LOOP THINGS
const update = () => {
    playerList.forEach(e => e.update());
}

const draw = () => {
    ctx1.clearRect(0, 0, WIDTH, HEIGHT);
    ctx2.clearRect(0, 0, WIDTH, HEIGHT);
    playerList.forEach(e => e.draw());
}

const animate = () => {

    update();
    draw();

    window.requestAnimationFrame(animate);
}

animate();