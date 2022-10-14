export class CubePlayer {
    constructor(_x, _y, _w, _h, _speed, _isVisible, _color, _hp, _ctx, _viewport, _list, _hitboxList) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.prevX = _x;
        this.prevY = _y;

        this.speed = _speed;
        this.isVisible = _isVisible;
        this.color = _color;
        this.hp = _hp;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.hitboxList = _hitboxList;

        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;

        document.addEventListener("keydown", (e) => {
            switch(e.code) {
                case "KeyW": this.up = 1; break;
                case "KeyS": this.down = 1; break;
                case "KeyA": this.left = 1; break;
                case "KeyD": this.right = 1; break;
            }
        });
        
        document.addEventListener("keyup", (e) => {
            switch(e.code) {
                case "KeyW": this.up = 0; break;
                case "KeyS": this.down = 0; break;
                case "KeyA": this.left = 0; break;
                case "KeyD": this.right = 0; break;
            }
        });

        _list.push(this);
    }

    hitboxCheck() {
        if (this.hitboxList.length > 0) {
            this.hitboxList.forEach((e, i) => {
                if ( // REALLY BIG IF
                    this.x + this.w >= e.x &&
                    this.x <=e.x + e.w &&
                    this.y + this.h >= e.y &&
                    this.y <=e.y + e.h
                ) {
                    console.log("Collision detected");
                }
            });
        }
    }

    update() {

        this.prevX = this.x;
        this.prevY = this.y;

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

        this.hitboxCheck();
    }

    draw() {
        if (this.isVisible) {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.x - this.viewport.x, this.y - this.viewport.y, this.w, this.h);
        }
    }

    addHp(_healthPoints) {
        this.hp += _healthPoints;
    }

    changeOption(_property, _value) {
        this[_property] = _value;
    }
};

export class ImagePlayer {
    constructor(_x, _y, _w, _h, _speed, _isVisible, _image, _hp, _ctx, _viewport, _list, _hitboxList) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.prevX = _x;
        this.prevY = _y;

        this.speed = _speed;
        this.isVisible = _isVisible;
        this.image = _image;
        this.hp = _hp;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.hitboxList = _hitboxList;

        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;

        document.addEventListener("keydown", (e) => {
            switch(e.code) {
                case "KeyW": this.up = 1; break;
                case "KeyS": this.down = 1; break;
                case "KeyA": this.left = 1; break;
                case "KeyD": this.right = 1; break;
            }
        });
        
        document.addEventListener("keyup", (e) => {
            switch(e.code) {
                case "KeyW": this.up = 0; break;
                case "KeyS": this.down = 0; break;
                case "KeyA": this.left = 0; break;
                case "KeyD": this.right = 0; break;
            }
        });

        _list.push(this);
    }

    hitboxCheck() {
        if (this.hitboxList.length > 0) {
            this.hitboxList.forEach((e, i) => {
                if ( // REALLY BIG IF
                    this.x + this.w >= e.x &&
                    this.x <=e.x + e.w &&
                    this.y + this.h >= e.y &&
                    this.y <=e.y + e.h
                ) {
                    console.log("Collision detected");
                }
            });
        }
    }

    update() {

        this.prevX = this.x;
        this.prevY = this.y;

        let hmove = this.right - this.left;
        let vmove = this.down - this.up;

        if (hmove != 0 && vmove != 0) {
            this.x += hmove * this.speed / 1.4 /*1.4142 just for optimization*/;
            this.y += vmove * this.speed / 1.4 /*1.4142*/;
        } else {
            this.x += hmove * this.speed;
            this.y += vmove * this.speed;
        }

        this.hitboxCheck();
    }

    draw() {
        if (this.isVisible) this.ctx.drawImage(this.image, this.x - this.viewport.x, this.y - this.viewport.y, this.w, this.h);
    }

    addHp(_healthPoints) {
        this.hp += _healthPoints;
    }

    changeOption(_property, _value) {
        this[_property] = _value;
    }
};