console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");



function plus(num){
return function (sum){
    return num + sum;
}

}
const plus100 = plus(100)
const plus5 = plus(1)

console.log(plus100(100))
console.log(plus5 (5))
console.log(plus100(4589))

