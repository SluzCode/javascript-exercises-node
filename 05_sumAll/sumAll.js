const sumAll = function(low,high) {

if ((high < 0||low < 0)||(typeof low !== 'number')||(typeof high !== 'number'))
{
return "ERROR"}

// 
    let sum = 0;
    let range = Math.abs(high - low);

for (let i = 0; i < range+1; i++) {

       sum += (high+low)-(range+1) + i;

    //    console.log(sum);
}

return sum;

};


sumAll(10,1);

// Do not edit below this line
module.exports = sumAll;
