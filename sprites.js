export class Sprite {
    constructor(_x, _y, _w, _h, _image, _ctx, _viewport, _list) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.image = _image;
        this.ctx = _ctx;
        this.viewport = _viewport;

        _list.push(this);
    };

    draw() {
        this.ctx.drawImage(this.image, this.x - this.viewport.x, this.y - this.viewport.y, this.w, this.h);
    }
};