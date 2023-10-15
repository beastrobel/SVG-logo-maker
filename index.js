//Initialize npms
const inquirer = require('inquirer');
const fs = require('fs');

//Import library files
const Shapes = require('./lib/shapes.js');
const Test = require('./lib/shapes.test.js');

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
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'What color would you like? (Type in color name or HEX#)',
        name: 'color',
    },
]) 
.then((data) => {  
        //Creates JSON file that can be used for testing
        fs.writeFile('logo-info.json', JSON.stringify.toLowerCase(data, null, ' '), (err) =>
        err ? console.log(err) : console.log('Created logo-info.json'));
});



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
