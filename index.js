//Initialize npm
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

//Logo maker prompts
inquirer
.prompt([
    {
        type: 'input',
        message: 'What text would you like for your logo? (Max. 3 letters)',
        name: 'text',
    },
    {
        type: 'checkbox',
        message: 'Pick a shape:',
        name: 'mark',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'What color would you like? (Type in color name or HEX#)',
        name: 'color',
    },
]) 
.then((data) => {
    console.log('Generated logo.svg');
});

const Shapes = require('./lib/shapes.js');
const Test = require('./lib/shapes.test.js');

fs.writeFile('logo.svg', data, (err) =>
err ? console.log('write error') : console.log('Success!'));


