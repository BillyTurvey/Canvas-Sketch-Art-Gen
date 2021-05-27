import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [ 1742, 1032 ],
  pixelsPerInch: 300,
  units: 'mm'
};

const sketch = () => {
  return ({ context, width, height }) => {
    console.log(width, height);
    context.fillStyle = 'red';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width/2, height/2, height/4, 0, Math.PI*2, false);
    context.fillStyle = 'orange';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
