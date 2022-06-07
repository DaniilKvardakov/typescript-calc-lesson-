import { Bind } from "./Bind";

export class GameMap {
    width = 10;
    height = 20;

    map = new Uint8Array(this.width * this.height);

    @Bind()
    getIndex(x: number, y: number)  {
        const {width, height} = this

        if(x < 0 ) x = 0
        if(x >= width) x = width - 1

        if(y < 0 ) y = 0
        if(y >= height) y = height - 1

        return x + y * height;
    }

    @Bind()
    update() {
        
    }
}