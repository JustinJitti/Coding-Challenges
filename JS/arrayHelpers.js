/**
    @description
    Test your ability to extend the functionality of built-in classes. 
    In this case, we want you to extend the built-in Array class with the following methods: 
    square(), cube(), average(), sum(), even() and odd().

    @description:
    square() must return a copy of the array, containing all values squared

    cube() must return a copy of the array, containing all values cubed

    average() must return the average of all array values

    sum() must return the sum of all array values

    even() must return an array of all even numbers

    odd() must return an array of all odd numbers

    Note: the original array must not be changed in any case!

    Example output:
    
    var numbers = [1, 2, 3, 4, 5];

    numbers.square();  // must return [1, 4, 9, 16, 25]
    numbers.cube();    // must return [1, 8, 27, 64, 125]
    numbers.average(); // must return 3
    numbers.sum();     // must return 15
    numbers.even();    // must return [2, 4]
    numbers.odd();     // must return [1, 3, 5]
 */

Array.prototype.square = function () {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(this[i] * this[i]);
    }
    return output;
}

Array.prototype.cube = function () {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        console.log(this[i])
        output.push(Math.pow(this[i], 3));
    }
    return output;
}

Array.prototype.sum = function () {
    let reducer = (acc, curr) => acc + curr;
    var totalSum = this.reduce(reducer, 0);
    return totalSum;
}


Array.prototype.average = function () {
    let reducer = (acc, curr) => acc + curr;
    var totalAverage = this.reduce(reducer, 0) / this.length;
    return totalAverage;
}

Array.prototype.even = function () {
    return this.filter(element => element % 2 == 0);
}
Array.prototype.odd = function () {
    return this.filter(element => element % 2 == 1);
}