//Initialize npms
const inquirer = require('inquirer');
const fs = require('fs');

//Import library files
//Received help from Ask BCN Learning Assistant, Andrew, in figuring out how to format require properly
const { Circle, Triangle, Square } = require("./lib/shapes.js");

//Logo maker prompts
inquirer
.prompt([
    {
        type: 'input',
        message: 'What text would you like for your logo? (Max. 3 characters)',
        name: 'text',
    },
    {
        type: 'checkbox',
        message: 'Pick a shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'What color would you like? (Type in color name or HEX#)',
        name: 'color',
    },
]) 

//Received help from Ask BCN Learning Assistant, Eric, in figuring out how to pass data through shapes.js
.then((data) => {

        //Writes JSON file for testing suite
        fs.writeFile('input.json', JSON.stringify(data), (err) =>
        err ? console.log('write error') : console.log('Generated JSON file'));

        //Determines shape
        if (data.shape == 'circle') {
            var string = new Circle(data.color, data.shape).render(data.color, data.shape);
            //Renders SVG file
            function render (string) { return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${string}<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text></svg>`;
            } 
            fs.writeFile('logo.svg', render (string), (err) =>
            err ? console.log('write error') : console.log('Generated svg file'));

        } else if (data.shape == 'triangle') {
            string = new Triangle(data.color, data.shape).render(data.color, data.shape);
            //Renders SVG file
            function render (string) { return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${string}<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text></svg>`;
            } 
            fs.writeFile('logo.svg', render (string), (err) =>
            err ? console.log('write error') : console.log('Generated svg file'));

        } else if (data.shape == 'square') {
            string = new Square(data.color, data.shape).render(data.color, data.shape);
            //Renders SVG file
            function render (string) { return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${string}<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text></svg>`;
            } 
            fs.writeFile('logo.svg', render (string), (err) =>
            err ? console.log('write error') : console.log('Generated svg file'));

        } else {
            console.log ('Error');
        }


});