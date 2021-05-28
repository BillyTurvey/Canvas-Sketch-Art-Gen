import canvasSketch from 'canvas-sketch';
import { lerp } from 'canvas-sketch-util/math.js';
import random from 'canvas-sketch-util/random.js'; 
import colors from 'nice-color-palettes';

const cellularGoods = [
  '#1D1D1D',
  '#555555',
  '#D6D4CE',
  '#F0EDE6',
  '#F5F5F5',
  '#FFFFFF'
]


const settings = {
  dimensions: [ 1048, 1048 ],
  pixelsPerInch: 300
};

const sketch = () => {
  const palette = cellularGoods;

  const createGrid = () => {
    const points = [];
    const count = 10;
    for (let x = 0; x < count; x++) {   // for every column
      for (let y = 0; y < count; y++) { // for every horizontal point
        const u =  count <= 1 ? 0.5 : x / (count - 1);
        const v =  count <= 1 ? 0.5 : y / (count - 1);
        points.push({
          color : random.pick(palette),
          position: [u,v],
          radius: Math.abs(random.gaussian()*0.01)
        });
      }
    }
    return points;
  };

  const seed = random.value();
  console.log('Seed: ', seed);
  random.setSeed(seed);

  const points = createGrid().filter(()=> random.value() > 0.08);
  const margin = 100

  return ({ context, width, height }) => {
    context.fillStyle = random.pick(palette);
    context.fillRect(0, 0, width, height);

    points.forEach(data => {
      const {position, radius, color} = data;
      const [u, v] = position;

      console.log(color);

      const x = lerp(margin, width-margin, u);
      const y = lerp(margin, height-margin, v);

      context.beginPath();
      context.arc(x, y, radius*width, 0, Math.PI *2, true);
      context.fillStyle = color;
      context.fill();
    })
  };
};

canvasSketch(sketch, settings);
