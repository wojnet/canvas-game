export class Hitbox {
    constructor(_x, _y, _w, _h, _ctx, _viewport, _toggle, _list) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.toggle = _toggle;
        
        _list.push(this);
    }

    draw() {
        this.ctx.fillStyle = "rgba(255, 0, 0, 25)";
        this.ctx.fillRect(this.x - this.viewport.x, this.y - this.viewport.y, this.w, this.h);
    }
};

export class EventBlock {
    constructor(_x, _y, _w, _h, _ctx, _viewport, _list, _functions) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.functions = _functions;

        _list.push(this);
    }

    draw() {
        this.ctx.fillStyle = "rgba(127, 255, 127, 127)";
        this.ctx.fillRect(this.x - this.viewport.x, this.y - this.viewport.y, this.w, this.h); 
    }
}