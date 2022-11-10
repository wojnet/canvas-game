// VIEWPORT CHGANGES HOW THE "DRAW" FUNCTIONS
// DRAWS DIFFERENT THINGS ON THE SCREEN

// "PADDING" IS JUST THE DISTANCE FROM BORDER
// WHEN THE PLAYER MAKES THE VIEWPORT MOVE

export class Viewport {
    constructor(_x, _y, _w, _h, _list) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;

        this.follow = null;
        this.isFollowing = false;
        this.padding = 0;

        _list.push(this);
    }

    move(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    update() {
        if (this.isFollowing) {

            // CHECK IF PLAYER'S TOUCHING LEFT PADDING
            if (this.follow.x - this.padding < this.x) {
                this.x = this.follow.x - this.padding;
            }

            // CHECK IF PLAYER'S TOUCHING TOP PADDING
            if (this.follow.y - this.padding < this.y) {
                this.y = this.follow.y - this.padding;
            }

            // CHECK IF PLAYER'S TOUCHING RIGHT PADDING
            if (this.follow.x + this.follow.w > this.x + this.w - this.padding) {
                this.x = this.follow.x - (this.w - this.padding - this.follow.w);
            }

            // CHECK IF PLAYER'S TOUCHING BOTTOM PADDING
            if (this.follow.y + this.follow.h > this.y + this.h - this.padding) {
                this.y = this.follow.y - (this.h - this.padding - this.follow.h);
            }

            if (this.x < 0) this.x = 0;
            if (this.y < 0) this.y = 0;
        }
    }
};