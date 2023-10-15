//Initialize npms
const validateColor = require('validate-color').default;
const data = require('../logo-info.json');
var Shape = require('./shapes');
const Circle = require('./shapes');
const Triangle = require('./shapes');
const Square = require('./shapes');

console.log(data);


describe('null text', () => {
//Test checks if text length is not zero.
    it('should pass if text length is not zero', () => {
    expect(data.text.length === 0).toBeFalsy();
    });
});

describe('text length', () => {
//Test checks if text length is equal to or less than 3.
    it('should pass if text length is equal to or less than 3', () => {
    expect(data.text.length === 3 && data.text.length < 3).toBeFalsy();
    });
 });

describe('color', () => {
//Test checks if color input is valid using validateColor() method
    it('should pass if color input is valid', () => {
    expect(validateColor(data.color)).toBeTruthy();
    });
});

describe('render circle', () => {
//Test checks if circle render function works
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

describe('render triangle', () => {
//Test checks if triangle render function works
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

describe('render square', () => {
    //Test checks if square render function works
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue" />');
});



// The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. 
// While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, 
// `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color