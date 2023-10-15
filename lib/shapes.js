const data = require('../logo-info.json');

class Shapes {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }    
}

class Circle extends Shapes{
  constructor(shape, color) {
  super(shape, color, cx, cy, r);
    this.shape = 'circle';
    this.color = data.color;
    this.cx = '150';
    this.cy = '100';
    this.r = '80';
  }    
  render() {
    return `<!DOCTYPE html>
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill='${this.color}' />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
    </html>`;
  }
}



class Triangle extends Shapes{
  constructor(shape, color) {
  super(shape, color, polygonPoints);
    this.shape = 'polygon';
    this.color = data.color;
    this.polygonPoints = '150, 18 244, 182 56, 182';
  }    
}

class Square extends Shapes{
  constructor(shape, color) {
  super(shape, color,  width, height);
    this.shape = 'rect';
    this.color = data.color;
    this.width = '200';
    this.height = '200';
  }    
}

module.exports = Shapes, Circle, Triangle, Square;