const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const debug = document.querySelector("#debug");

const WIDTH = 512;
const HEIGHT = 512;

canvas.width = WIDTH;
canvas.height = HEIGHT;

class Player {
    constructor(_x, _y, _w, _h, _color) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
    }

    update() {
        // let hmove = right - left;
        // let vmove = down - up;

        // if (hmove != 0 && vmove != 0) {
        //     x += hmove * speed / 1.4142;
        //     y += vmove * speed / 1.4142;
        // } else {
        //     x += hmove * speed;
        //     y += vmove * speed;
        // }
    }

    draw() {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
};

var player = new Player(0, 0, 64, 64, "#FFF");

var speed = 3;

var up = 0;
var down = 0;
var left = 0;
var right = 0;

const updateDebug = () => {
    debug.innerText = `${left}-${up}-${down}-${right}`;
}

document.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "ArrowUp": up = 1; break;
        case "ArrowDown": down = 1; break;
        case "ArrowLeft": left = 1; break;
        case "ArrowRight": right = 1; break;
    }
    updateDebug();
});

document.addEventListener("keyup", (e) => {
    switch(e.key) {
        case "ArrowUp": up = 0; break;
        case "ArrowDown": down = 0; break;
        case "ArrowLeft": left = 0; break;
        case "ArrowRight": right = 0; break;
    }
    updateDebug();
});

const update = () => {
    player.update();
}

const draw = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    player.draw();
}

const animate = () => {

    update();
    draw();

    requestAnimationFrame(animate);
}

animate();