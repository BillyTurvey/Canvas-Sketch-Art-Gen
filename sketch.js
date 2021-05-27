import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [ 1048, 1048 ],
  // pixelsPerInch: 300
};

const sketch = () => {

  const createGrid = () => {
    const points = [];
    const count = 5;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / count;
        const v = y / count;
        points.push([u,v])
      }
    }
    return points;
  };

  const points = createGrid();

  console.log(points);

  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    points.forEach(([u, v]) => {
      const x = u * width; //scaling back up to width in pixels
      const y = v * height;

      context.beginPath();
      context.arc(x + width/10, y + height/10, 100, 0, Math.PI *2, true);
      context.strokeStyle = 'black';
      context.lineWidth = 30;
      context.stroke();
    })
  };
};

canvasSketch(sketch, settings);
