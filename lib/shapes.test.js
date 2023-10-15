//Initialize npms
const jest = require('jest');
//npm to verify if color input is valid
const validateColor = require('validate-color').default;
const Shapes = require('./lib/shapes.js');

//Tests color
jest
validateColor

//Tests shapes
jest
describe('Shapes', () => {

//Test checks if isText() returns false when the text is longer than 3 characters.
    describe('Text Length', () => {
        it('should return false for password less than 8 characters long', () => {
        const validate = new Validate();
        const result = validate.isPassword('pass');
        expect(result).toEqual(false);
        });
    });

//Test checks if isColor() returns false when the color input is invalid.
describe('Text Length', () => {
    it('should return false for password less than 8 characters long', () => {
    const validate = new Validate();
    const result = validate.isPassword('pass');
    expect(result).toEqual(false);
    });
});

//Test checks if color input is valid.
describe('Text Length', () => {
    it('should return false for password less than 8 characters long', () => {
    const validate = new Validate();
    const result = validate.isPassword('pass');
    expect(result).toEqual(false);
    });
});

});




const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');




module.exports = Test;


// The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. 
// While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, 
// `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:

// ```js
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

//class Test, render method