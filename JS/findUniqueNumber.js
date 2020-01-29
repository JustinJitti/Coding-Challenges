/**
    It’ s guaranteed that array contains at least 3 numbers.

    Find the unique number
    Find the unique string
    Find The Unique

    example Output:
    findUniq([1, 1, 1, 2, 1, 1]) === 2
    findUniq([0, 0, 0.55, 0, 0]) === 0.55

 */

 function findUniq(arr) {
     return arr.find((ele) => arr.indexOf(ele) === arr.lastIndexOf(ele));
 }