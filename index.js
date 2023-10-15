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
    //Creates data class that can be exported for testing
    class Data {
        constructor(data) {
            this.data = data;
        }
    }
    module.exports = Data;
    console.log('Success!');
});




//fs.writeFile('logo.svg', data, (err) =>
//err ? console.log('write error') : console.log('Generated logo.svg'));


