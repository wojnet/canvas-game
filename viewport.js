// VIEWPORT CHGANGES HOW THE "DRAW" FUNCTIONS
// DRAWS DIFFERENT THINGS ON THE SCREEN

// "PADDING" IS JUST THE DISTANCE FROM BORDER
// WHEN THE PLAYER MAKES THE VIEWPORT MOVE

export class Viewport {
    constructor(_x, _y, _padding) {
        this.x = _x;
        this.y = _y;
        this.padding = _padding;
    }

    move(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
};