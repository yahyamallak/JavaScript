/**
 *  variables:
 * 
 * var / let / const
 * 
 *
 */

var number = 10;
let name = "Yahya";
const PI = 3.14;


/**
 * Unary plus and minus
 * + / -
 * 
 */

console.log(+"100");
console.log(+"Yahya");
console.log(-"100");
console.log(-"-100");
console.log(+true);
console.log(+false);
console.log(+null);


/**
 * Operations
 * 
 * + / - * % **
 * 
 */


console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(3 ** 3);


/**
 * Assignment operators
 * 
 * 
 */

let a = 10;

a = a + 20;

a -= 30;

a += 50;

console.log(a);


/**
 * Syntactic sugar "_"
 * 
 * e
 * 
 */

console.log(1_000_000);

console.log(1e6);



/**
 * Number()
 * 
 * 
 * 
 */

console.log(Number("100"));



/**
 * for loop
 * 
 * 
 */


for(let i; i < 10; i++){
    console.log(i);
}



/**
 * Nested for loop
 * 
 * 
 */


 for(let i; i < 10; i++){
    for(let j; j < 10; j++){
        console.log("A"+i+": "+j);
    }
}