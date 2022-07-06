import * as ex from 'excalibur';
import { TiledMapResource } from '@excaliburjs/plugin-tiled';

const map = new TiledMapResource('/world.tmx')
const loader = new ex.Loader([
  map
]);

const engine = new ex.Engine({
  resolution: ex.Resolution.GameBoyAdvance
});

engine.start(loader).then(() => {
  map.addTiledMapToScene(engine.currentScene);
})
