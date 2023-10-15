//Initialize npms
const validateColor = require('validate-color').default;
const data = require('../logo-info.json');

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




// //Tests color
// jest
// validateColor

// describe('Shapes', () => {
// //Test checks if isColor() returns false when the color input is invalid.
// describe('Color', () => {
//     it('should return true if color is valid', () => {
//     const validate = new Validate();
//     const result = validate.isColor('color');
//     expect(result).toEqual(true);
//     });
// });

//Initialize npms
// const jest = require('jest');
// const Shapes = require('./lib/shapes.js');

// //Tests color
// jest
// validateColor

// describe('Shapes', () => {
// //Test checks if isColor() returns false when the color input is invalid.
// describe('Color', () => {
//     it('should return true if color is valid', () => {
//     const validate = new Validate();
//     const result = validate.isColor('color');
//     expect(result).toEqual(true);
//     });
// });

// //Tests shapes
// jest
// describe('Shapes', () => {





// const shape = new Circle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// const shape = new Square();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');




// module.exports = Test;


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