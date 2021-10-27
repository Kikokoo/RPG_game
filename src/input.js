export default class Input {
    constructor() {

        this.downKeys = [];

        document.onkeydown = (evt) => {
            this.downKeys[evt.code] = true;
        };
        document.onkeyup = (evt) => {
            this.downKeys[evt.code] = false;
        };
    }

    isKeyDown(keyCode) {
        return this.downKeys[keyCode];
    }
}