import { CubePlayer } from "./players.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 512;
const HEIGHT = 512;

const background = false;

canvas.width = WIDTH;
canvas.height = HEIGHT;

//CREATING PLAYER
var player = new CubePlayer(128, 256, 64, 64, 2, "#FFA", ctx);

const update = () => {
    player.update();
}

const draw = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    if (background) {
        ctx.fillStyle = "#778";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    player.draw();
}

const animate = () => {

    update();
    draw();

    window.requestAnimationFrame(animate);
}

animate();