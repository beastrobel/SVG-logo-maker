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
        //Writes JSON file for testing 
        fs.writeFile('input.json', JSON.stringify(data), (err) =>
        err ? console.log('write error') : console.log('Generated JSON file'));

        if (data.shape == 'circle') {
            console.log(new Circle(data.color, data.shape).render(data.color, data.shape));
        } else if (data.shape == 'triangle') {
            console.log(new Triangle(data.color, data.shape).render(data.color, data.shape));
        } else if (data.shape == 'square') {
            console.log(new Square(data.color, data.shape).render(data.color, data.shape));
        } else {
            console.log ('Error');
        }

});



        //var svgShape = new Circle(color, shape);
        //console.log(svgShape);
        //var svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        // ${svgShape}</svg>`;
        // console.log(svg);
        //fs.writeFile('logo.svg', svg), (err) =>
        //err ? console.log(err) : console.log('Created logo.svg'); 

    //return Shapes
            // `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            // <circle cx="150" cy="100" r="80" fill="green" />
            // <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
            // </svg>`
           // }
        //}


//fs.writeFile('logo.svg', data, (err) =>
//err ? console.log('write error') : console.log('Generated logo.svg'));

// render() {
//     return `<!DOCTYPE html>
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="150" cy="100" r="80" fill='${this.color}' />
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
//     </svg>
//     </html>`;
//   }
