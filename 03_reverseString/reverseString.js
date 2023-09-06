const reverseString = function(inputString) {

let output = ""
let length = inputString.length

    for (let i = length-1; i >= 0; i--) {
        
        output += inputString.charAt(i);

        // console.log(output);

    }

return output;

};

// reverseString('123456789');

// Do not edit below this line
module.exports = reverseString;
