const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const debug = document.querySelector("#debug");

const WIDTH = 512;
const HEIGHT = 512;

canvas.width = WIDTH;
canvas.height = HEIGHT;

var x = 0;
var y = 0;

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
    let hmove = right - left;
    let vmove = down - up;

    if (hmove != 0 && vmove != 0) {
        x += hmove * speed / 1.4142;
        y += vmove * speed / 1.4142;
    } else {
        x += hmove * speed;
        y += vmove * speed;
    }

    
}

const draw = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(x, y, 64, 64);
}

const animate = () => {

    update();
    draw();

    requestAnimationFrame(animate);
}

animate()