import Map from '../src/ol/Map.js';
import View from '../src/ol/View.js';
import {defaults as defaultInteractions} from '../src/ol/interaction.js';
import DragRotateAndZoom from '../src/ol/interaction/DragRotateAndZoom.js';
import TileLayer from '../src/ol/layer/Tile.js';
import OSM from '../src/ol/source/OSM.js';


var map = new Map({
  interactions: defaultInteractions().extend([
    new DragRotateAndZoom()
  ]),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
