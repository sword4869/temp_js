/* 2 types to define array */
// []
const a = [1, 2, 3];

// Array
const b = Array(4, 5, 6);


/* Array can consist of different datatypes. Even array. */
const c = [1, true, 'Yeah', b];



/* use of array */

const length = c.length;

const first = c[0];

// Although the variable c is const, we can alter the element of c
// The primitive values are immutable, but an Array is not a primitive value.
c[0] = 'Hello';
// But it is NOT allowed to replace the entire Array
// c = [7, 8, 9];


// add element
c.push('Last');         // Last
c.unshift('First');     // First
console.log(c);
// return the new length of Array
// const new_length = c.push('Last');
// const new_length2 = c.unshift('First');
// console.log(c, new_length, new_length2);

// remove element
c.pop();                // Last
c.shift();              // First
console.log(c);
// return the removed element
// const element = c.pop();                // Last
// const element2 = c.shift();              // First
// console.log(c, element, element2);


// get the index of the certain element, 0-n is valid, -1 is valid
// Be careful that it is strict comparision.
const index = c.indexOf('Hello');
const index2 = c.indexOf('World');
console.log(index, index2);

// get true/false when Array does/doesn't include element.
// Be careful that it is also strict comparision.
const flag = c.includes('Hello');
const flag2 = c.includes('World');
console.log(flag, flag2);
