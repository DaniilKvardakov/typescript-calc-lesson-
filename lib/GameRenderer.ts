import { Bind } from "./Bind";
import { GameMap } from "./GameMap";

export class GameRenderer {
    elem = document.createElement('canvas');
    ctx = this.elem.getContext('2d');
    size = 20
    padding = 30
    
    constructor(public map: GameMap) {
        const { width, height } = map
        const { size } = this  

        this.elem.style.width = `${width * size}px`
        this.elem.style.height = `${height * size}px`
        this.elem.style.border = '2px solid #999'

        addEventListener('resize', this.resize)
        this.resize();
    }

    @Bind()
    append(query: string) {
        const elem = document.querySelector(query);
        if(!elem) throw new Error('No find element!');
        elem.appendChild(this.elem);
        this.resize();
    }

    @Bind() 
    resize() {
        const { padding: p } = this;
        const {parentElement} = this.elem;
        if(!parentElement) return 
        const { offsetWidth: W, offsetHeight: H } = parentElement;
        const { offsetWidth: w, offsetHeight: h } = this.elem;

        const scale = Math.min((W - p * 2) / w, (H - p * 2) / h)
        this.elem.style.transform = `scale(${scale})`
    }

    @Bind()
    update() {

    }

    @Bind()
    render() {
        const { size, ctx } = this;
        const { map, width, height, getIndex } = this.map;

        ctx.clearRect(0, 0, width * size, height * size)

        const colors = [,'red', 'green', 'blue'];
        for(let y = 0; y < height; y++) {
             for(let x = 0; x < width; x++) {
                 const index = getIndex(x, y)
                 const val = map[index]
                 const color = colors[val];

                 let X = x * size;
                 let Y = y * size;

                 ctx.fillStyle = color || 'transparent';
                 ctx.fillRect(X, Y, size, size)
             }
        }
    }
}