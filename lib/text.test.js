    //Initialize npms
    const jest = require('jest');
    const Data = require('../index.js');

    //Throws error if text length is zero or greater than 3
    function textValidate(data) {
        if (data.text.length > 3) {
            throw new Error('text must contain a maximum of 3 characters.');
        }
       else {
            console.log('Success!');
       }
        }
        textValidate(data);