import { mainModule } from 'process';
import './index.css'
import { GameMap } from './lib/GameMap'
import { GameRenderer } from './lib/GameRenderer';

const map = new GameMap();
const render = new GameRenderer(map);

map[map.getIndex(0,0)] = 1

render.append('#app');
render.render();

