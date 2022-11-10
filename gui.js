export class Menu {
    constructor(_x, _y, _w, _h, _gameWidth, _gameHeight, _ctx, _viewport, _on, _submenu, _list) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.gameWidth = _gameWidth;
        this.gameHeight = _gameHeight;
        this.border = 3;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.on = _on;
        this.submenu = _submenu;
        this.submenus = [
            ["NEW GAME", "LOAD GAME", "OPTIONS", "QUIT GAME"],
            ["SAVE 1", "SAVE 2", "SAVE 3", "SAVE 4", "RETURN"]
        ]

        _list.push(this);
    }

    draw() {

        this.h = this.submenus[this.submenu].length*48;

        //draw bg
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.gameWidth/2 - this.w/2, this.gameHeight/2 - this.h/2, this.w, this.h);
        
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.gameWidth/2 - this.w/2 + this.border, this.gameHeight/2 - this.h/2 + this.border, this.w - this.border*2, this.h - this.border*2);


        //draw buttons
        this.submenus[this.submenu].forEach((e, i) => {
        this.ctx.fillStyle = "white";
        this.ctx.fillText(e, this.gameWidth/2, this.gameHeight/2 - this.h/2 + i*48+28);
        });
    }
}