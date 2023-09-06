const repeatString = function(string,num) {

    let output = "";

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            
            output += string;
            // console.log(output)
        }
    }

    else {
        output="ERROR";
    }

    
return output;



};

// repeatString('hey',3)

// Do not edit below this line
module.exports = repeatString;
