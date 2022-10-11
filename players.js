export class CubePlayer {
    constructor(_x, _y, _w, _h, _speed, _color, _ctx) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        // this.prevX;
        // this.prevY;
        // this.prevW;
        // this.prevH;
        this.speed = _speed;
        this.color = _color;
        this.ctx = _ctx;
        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;

        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "ArrowUp": this.up = 1; break;
                case "ArrowDown": this.down = 1; break;
                case "ArrowLeft": this.left = 1; break;
                case "ArrowRight": this.right = 1; break;
            }
        });
        
        document.addEventListener("keyup", (e) => {
            switch(e.key) {
                case "ArrowUp": this.up = 0; break;
                case "ArrowDown": this.down = 0; break;
                case "ArrowLeft": this.left = 0; break;
                case "ArrowRight": this.right = 0; break;
            }
        });
    }

    update() {
        let hmove = this.right - this.left;
        let vmove = this.down - this.up;

        // this.prevX = this.x;
        // this.prevY = this.y;

        if (hmove != 0 && vmove != 0) {
            this.x += hmove * this.speed / 1.4142;
            this.y += vmove * this.speed / 1.4142;
        } else {
            this.x += hmove * this.speed;
            this.y += vmove * this.speed;
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
};