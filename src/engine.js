import GameObject from "./gameobject";
import Input from "./input";

export default class Engine {
    constructor() {
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.lastTime = new Date().getTime();

        this.objs = [];

        this.input = new Input();

        window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj) {
        if(obj instanceof GameObject) {
            this.objs.push(obj);
        } else {
            console.log('Not GameObject!');
        }
    }
    
    loop() {
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;

        //do update
        if(this.update) {
            this.update(dt);
        }

        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //do drawing
        this.objs.forEach(obj => {
            obj.draw(this.ctx);
        });

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this));
    }
}