var imgBob = new Image();
var okComputerBg = new Image();

const textures = {
    imgBob:         imgBob,
    okComputerBg:   okComputerBg
};

textures.okComputerBg.src = "./assets/textures/bg.jpg";
textures.imgBob.src = "./assets/textures/bob2.png";

export { textures };