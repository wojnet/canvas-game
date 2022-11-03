var imgBob = new Image();
var okComputerBg = new Image();
var wall1 = new Image();

const textures = {
    imgBob:         imgBob,
    okComputerBg:   okComputerBg,
    wall1:          wall1
};

textures.okComputerBg.src = "./assets/textures/bg.jpg";
textures.imgBob.src = "./assets/textures/bob.png";
textures.wall1.src = "./assets/textures/Wall.png";

export { textures };