export class CubePlayer {
    constructor(_x, _y, _w, _h, _speed, _color, _hp, _ctx, _viewport, _list) {
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
        this.hp = _hp;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;

        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "w": this.up = 1; break;
                case "s": this.down = 1; break;
                case "a": this.left = 1; break;
                case "d": this.right = 1; break;
            }
        });
        
        document.addEventListener("keyup", (e) => {
            switch(e.key) {
                case "w": this.up = 0; break;
                case "s": this.down = 0; break;
                case "a": this.left = 0; break;
                case "d": this.right = 0; break;
            }
        });

        _list.push(this);
    }

    update() {
        let hmove = this.right - this.left;
        let vmove = this.down - this.up;

        // this.prevX = this.x;
        // this.prevY = this.y;

        if (hmove != 0 && vmove != 0) {
            this.x += hmove * this.speed / 1.4 /*1.4142 just for optimization*/;
            this.y += vmove * this.speed / 1.4 /*1.4142*/;
        } else {
            this.x += hmove * this.speed;
            this.y += vmove * this.speed;
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x - this.viewport.x, this.y - this.viewport.y, this.w, this.h);
    }

    addHp(_healthPoints) {
        this.hp += _healthPoints;
    }
};

export class ImagePlayer {
    constructor(_x, _y, _w, _h, _speed, _image, _hp, _ctx, _viewport, _list) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.speed = _speed;
        this.image = _image;
        this.hp = _hp;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;

        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "w": this.up = 1; break;
                case "s": this.down = 1; break;
                case "a": this.left = 1; break;
                case "d": this.right = 1; break;
            }
        });
        
        document.addEventListener("keyup", (e) => {
            switch(e.key) {
                case "w": this.up = 0; break;
                case "s": this.down = 0; break;
                case "a": this.left = 0; break;
                case "d": this.right = 0; break;
            }
        });

        _list.push(this);
    }

    update() {
        let hmove = this.right - this.left;
        let vmove = this.down - this.up;

        if (hmove != 0 && vmove != 0) {
            this.x += hmove * this.speed / 1.4 /*1.4142 just for optimization*/;
            this.y += vmove * this.speed / 1.4 /*1.4142*/;
        } else {
            this.x += hmove * this.speed;
            this.y += vmove * this.speed;
        }
    }

    draw() {
        this.ctx.drawImage(this.image, this.x - this.viewport, this.y - this.viewport, this.w, this.h);
    }

    addHp(_healthPoints) {
        this.hp += _healthPoints;
    }
};