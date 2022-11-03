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
        this.goBackStep = 0.1;

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

    hitboxCheck(_x, _y) {
        let isColliding = false;
        this.hitboxList.forEach((e, i) => {
            if ( // REALLY BIG IF
                _x + this.w >= e.x &&
                _x <=e.x + e.w &&
                _y + this.h >= e.y &&
                _y <=e.y + e.h
            ) {
                isColliding = true;
            }
        });
        return isColliding;
    }

    update() {

        this.prevX = this.x;
        this.prevY = this.y;

        let hmove = this.right - this.left;
        let vmove = this.down - this.up;

        if (hmove != 0 && vmove != 0) {
            hmove /= 1.5;
            vmove /= 1.5;
        }

        if (this.hitboxList.length > 0) {

            //HORIZONTAL CHECL
            if (this.hitboxCheck(this.x + hmove * this.speed, this.y)) {
                while(!this.hitboxCheck(this.x + (this.right - this.left), this.y)) {
                    this.x += this.right - this.left;
                }
                hmove = 0;
            }

            //VERTICAL CHECK
            if (this.hitboxCheck(this.x, this.y + vmove * this.speed)) {
                while(!this.hitboxCheck(this.x, this.y + (this.down - this.up))) {
                    this.y += this.down - this.up;
                }
                vmove = 0;
            }
        }

        this.x += hmove * this.speed;
        this.y += vmove * this.speed;
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
        this.goBackStep = 0.1;

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

    hitboxCheck(_x, _y) {
        let isColliding = false;
        this.hitboxList.forEach((e, i) => {
            if ( // REALLY BIG IF
                _x + this.w >= e.x &&
                _x <=e.x + e.w &&
                _y + this.h >= e.y &&
                _y <=e.y + e.h
            ) {
                isColliding = true;
            }
        });
        return isColliding;
    }

    hitboxFix() {
        let dx = this.x - this.prevX;
        let dy = this.y - this.prevY;

        let distanceToGoBackX = 0;
        let distanceToGoBackY = 0; 

        if (dx >= 0) {
            for (let i = 1; i < Math.abs(dx)+1; i += this.goBackStep) {
                if(!this.hitboxCheck(this.x - i, this.y)) {
                    distanceToGoBackX = i * (-1);
                    break;
                }
            }
        } else {
            for (let i = 1; i < Math.abs(dx)+1; i += this.goBackStep) {
                if(!this.hitboxCheck(this.x + i, this.y)) {
                    distanceToGoBackX = i;
                    break;
                }
            }
        }

        if (dy >= 0 && distanceToGoBackX == 0) {
            for (let i = 1; i < Math.abs(dy)+1; i += this.goBackStep) {
                if(!this.hitboxCheck(this.x, this.y - i)) {
                    distanceToGoBackY = i * (-1);
                    break;
                }
            }
        } else {
            for (let i = 1; i < Math.abs(dy)+1; i += this.goBackStep) {
                if(!this.hitboxCheck(this.x, this.y + i)) {
                    distanceToGoBackY = i;
                    break;
                }
            }
        }

        this.x += distanceToGoBackX;
        this.y += distanceToGoBackY;
    }


    update() {

        this.prevX = this.x;
        this.prevY = this.y;

        let hmove = this.right - this.left;
        let vmove = this.down - this.up;

        if (hmove != 0 && vmove != 0) {
            this.x += hmove * this.speed / 1.5 /*1.4142 just for optimization*/;
            this.y += vmove * this.speed / 1.5 /*1.4142*/;
        } else {
            this.x += hmove * this.speed;
            this.y += vmove * this.speed;
        }

        if (this.hitboxList.length > 0) {
            if (this.hitboxCheck(this.x, this.y)) {
                this.hitboxFix();
            }
        }
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