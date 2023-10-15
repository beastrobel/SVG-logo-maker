//const data = require('../logo-info.json');

class Shapes {
  constructor(color) {
    this.color = 'white';
  }
  setColor(color) {
   this.color = color;
  }
  render() {
    return `<${this.color} />`;
  }
  }

class Circle extends Shapes{  
  constructor(color, shape, dimensions){
    super(color);
    this.shape = 'circle';
    this.dimensions = 'cx="150" cy="100" r="80" fill=';
  }  
  render() {
    return `<${this.shape} + ${this.dimensions} + ${this.color} />`;
  }
}
console.log(new Circle().render());

class Triangle extends Shapes{
  constructor (color, shape, dimensions) {
  super(color);
    this.shape = 'polygon';
    this.dimensions = 'points="150, 18 244, 182 56, 182" fill=';
  }  
  render() {
    return `<${this.shape} + ${this.dimensions} + ${this.color} />`;
  }
}

class Square extends Shapes{
  constructor(color, shape, dimensions) {
  super(color);
    this.shape = 'rect';
    this.dimensions = 'width="200" height="200" fill=';
  }  
  render() {
    return `<${this.shape} + ${this.dimensions} + ${this.color} />`;
  }
}

module.exports = Shapes, Circle, Triangle, Square;