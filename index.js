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
        type: 'input',
        message: 'What color would you like? (Type in color name or HEX#)',
        name: 'color',
    },
    {
        type: 'checkbox',
        message: 'Pick a shape:',
        name: 'mark',
        choices: ['Circle', 'Triangle', 'Square'],
    },
]) 
.then((data) => {
    console.log('Success!');
});


