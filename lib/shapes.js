const data = require('../logo-info.json');



class Shapes {
  constructor(shape) {
    this.shape = shape;
  }
  setColor() {
    this.color = "blue";
  } 

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Circle extends Shapes{
  constructor(shape) {
  super(shape, cx, cy, r);
    this.shape = 'circle';
    this.cx = '150';
    this.cy = '100';
    this.r = '80';
  }    
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
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