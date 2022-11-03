var imgBob = new Image();
var okComputerBg = new Image();
var wall = new Image();
var wall2 = new Image();
var wall3 = new Image();
var floor = new Image();
var woodenFloor = new Image();

var bark = new Image();
var stone = new Image();


const textures = {
    imgBob:         imgBob,
    okComputerBg:   okComputerBg,
    wall:           wall,
    wall2:          wall2,
    wall3:          wall3,
    floor:          floor,
    woodenFloor:    woodenFloor,

    bark:           bark,
    stone:          stone
};

textures.okComputerBg.src = "./assets/textures/bg.jpg";
textures.imgBob.src = "./assets/textures/bob.png";
textures.wall.src = "./assets/textures/wall.jpg";
textures.wall2.src = "./assets/textures/wall2.jpg";
textures.wall3.src = "./assets/textures/wall3.jpg";
textures.floor.src = "./assets/textures/floor.jpg";
textures.woodenFloor.src = "./assets/textures/woodenFloor.jpg";

textures.bark.src = "./assets/textures/64x/Bark.png";
textures.stone.src = "./assets/textures/64x/Stone.png";

export { textures };