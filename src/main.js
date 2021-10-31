import Engine from "./engine";
import Player from "./player";
import GameObject from "./gameobject";
import Renderable from "./renderable";

import missingIMG from './images/missing.jpg';

let engine = new Engine();

let player = new Player(50, 50);
let newPlayer = new Player(80, 80);

let map = new GameObject();
map.addClild(new Renderable(missingIMG, 1));
engine.addObject(map);

engine.addObject(player);

engine.update = (dt) => {

    if (engine.input.isKeyDown("KeyW")) {
        player.translate(0, -100*dt);
        player.facing = 1;
    }
    if (engine.input.isKeyDown("KeyS")) {
        player.translate(0, 100*dt);
        player.facing = 3;
    }
    if (engine.input.isKeyDown("KeyD")) {
        player.translate(100*dt, 0);
        player.facing = 2;
    }
    if (engine.input.isKeyDown("KeyA")) {
        player.translate(-100*dt, 0);
        player.facing = 4;
    }

    if (!engine.input.isKeyDown("KeyW") &&
        !engine.input.isKeyDown("KeyS") &&
        !engine.input.isKeyDown("KeyD") &&
        !engine.input.isKeyDown("KeyA")) {
        player.facing = 0;
    }

    
};
