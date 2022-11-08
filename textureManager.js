var imgBob = new Image();
var okComputerBg = new Image();

var bark = new Image();
var stone = new Image();


const textures = {
    imgBob:         imgBob,
    okComputerBg:   okComputerBg,

    bark:           bark,
    stone:          stone
};

textures.okComputerBg.src = "./assets/textures/bg.jpg";
textures.imgBob.src = "./assets/textures/bob.png";

textures.bark.src = "./assets/textures/64x/Bark.png";
textures.stone.src = "./assets/textures/64x/Stone.png";

export { textures };