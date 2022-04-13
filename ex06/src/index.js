// const [a,b, ...arr] = [1,2,3,4,5,7];
// console.log(a,b);
// console.log(arr); 




const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    'use strict';
    // Only change code below this line
    const [a,b, ...arr] = list; // Change this line
    const array2 = [...arr];
    // Only change code above this line
    return array2;
}

console.log(removeFirstTwo(array1));
module.exports = removeFirstTwo;