const removeFromArray = function(arrayIn, ...toRemove) {

    let output=[];

    const initialLength = arrayIn.length;

    for (let i = 0; i < initialLength; i++) {

        output = arrayIn.filter(removeItem);

        arrayIn = output;

        // console.log('Inside for:  ', output);

        function removeItem(arrayIn) {
            return arrayIn !== toRemove[i];
        }
            
    }

// console.log('final: ', output);

return  output;

};

// removeFromArray([1, 2, 3, 4, 5, 6], 3, 6, 1, 4, 5, 2)
// removeFromArray([1, 2, 'three', 4, 5, 6], 'three', 2, 5); 

// Do not edit below this line
module.exports = removeFromArray;


/*
for i = length of remove array{

    for j = length of input array {

        if !(removeArray[i] === inputArray[j]){

        newArray[j] = inputArray[j]
        }
    }

    




*/