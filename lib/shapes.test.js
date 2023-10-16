//Initialize npms
const validateColor = require('validate-color').default;
const data = require("../input.json");
const { Circle, Triangle, Square } = require("./shapes.js");

console.log(data);

describe('text', () => {
//Test checks if text length is not zero.
    it('should pass if text length is not zero', () => {
    expect(data.text.length === 0).toBeFalsy();
    });
});

describe('text', () => {
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

describe('shape', () => {
//Test checks if circle render function works
    it('should pass if circle render is correct', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('shape', () => {
    //Test checks if triangle render function works
        it('should pass if triangle render is correct', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    
describe('shape', () => {
    //Test checks if square render function works
        it('should pass if square render is correct', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue" />');
        });
    });