export class Menu {
    constructor(_x, _y, _w, _h, _gameWidth, _gameHeight, _ctx, _viewport, _on, _submenu, _list, _startGame) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.gameWidth = _gameWidth;
        this.gameHeight = _gameHeight;
        this.border = 3;
        this.selected = 0;
        this.ctx = _ctx;
        this.viewport = _viewport;
        this.on = _on;
        this.submenu = _submenu;
        this.submenus = [
            [
                ["NEW GAME", _startGame],
                ["LOAD GAME", () => {this.submenu = 1; this.selected = 0}],
                ["OPTIONS", () => {this.submenu = 2; this.selected = 0}],
                ["QUIT GAME", () => { if(confirm("Close?")) window.close() }]
            ],
            [
                ["SAVE 1", () => {}],
                ["SAVE 2", () => {}],
                ["SAVE 3", () => {}],
                ["RETURN", () => {this.submenu = 0; this.selected = 0}]
            ],
            [
                ["BRIGHTNESS: 100%", () => {}],
                ["FULLSCREEN: DISABLED", () => {}],
                ["RETURN", () => {this.submenu = 0; this.selected = 0}]
            ]
        ]
        this.change = (e) => {
            switch(e.code) {
                case "ArrowUp":
                    this.selected--;
                    if (this.selected < 0) this.selected = this.submenus[this.submenu].length-1;
                    break;
                case "ArrowDown":
                    this.selected++;
                    if (this.selected >= this.submenus[this.submenu].length) this.selected = 0;
                    break;
                case "Enter":
                    this.submenus[this.submenu][this.selected][1]();
                    break;
            }
        }

        _list.push(this);
        if (this.on) {
            document.addEventListener("keydown", this.change);
        }
    }



    switchToggle() {
        // tutaj się będzie togglować on lub off,
        // ponadto dodaje lub usuwa event listenery,
        // które przełączają przyciski :)

        if (this.on) {
            //wyłączanie menu
            this.selected = 1;
            this.on = false;
            document.removeEventListener("keydown", this.change);

        } else {
            //włączanie menu
            this.on = true;
            document.addEventListener("keydown", this.change);
        }
    }

    draw() {

        this.h = this.submenus[this.submenu].length*48;

        //draw bg
        // this.ctx.fillStyle = "white";
        // this.ctx.fillRect(this.gameWidth/2 - this.w/2, this.gameHeight/2 - this.h/2, this.w, this.h);
        
        // this.ctx.fillStyle = "black";
        // this.ctx.fillRect(this.gameWidth/2 - this.w/2 + this.border, this.gameHeight/2 - this.h/2 + this.border, this.w - this.border*2, this.h - this.border*2);


        //draw buttons
        this.submenus[this.submenu].forEach((e, i) => {
            if (this.selected == i) {
                this.ctx.fillStyle = "yellow"
            } else {
                this.ctx.fillStyle = "white"
            }
            this.ctx.fillText(e[0], this.gameWidth/2, this.gameHeight/2 - this.h/2 + i*48+28);
        });
    }
}