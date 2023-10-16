class Shapes {
  constructor(color) {
    this.color = color;
  }
    setColor(color){
    this.color = color;
    }
  }

class Circle extends Shapes{  
  constructor(color, shape){
    super(color);
    this.shape = 'circle';
  }  
  render() {
    return `<${this.shape} cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shapes{
  constructor (color, shape) {
  super(color);
    this.shape = 'polygon';
  }  
  render() {
    return `<${this.shape} points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shapes{
  constructor(color, shape) {
  super(color);
    this.shape = 'rect';
  }  
  render() {
    return `<${this.shape} width="200" height="200" fill="${this.color}" />`;
  }
}

//Received help from Ask BCN Learning Assistant, Andrew, in figuring out how to format module.exports properly
module.exports = { Circle, Triangle, Square };