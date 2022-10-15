'use strict';

/**
 * working
 * `const subtrahend` is a global scope, and `calcNumber()` is after `const subtrahend`, so we can find it in the `calcNumber`.
 */
function calcNumber() {
    console.log(subtrahend);
}

const subtrahend = 100;
calcNumber();


/**
 * working
 * this is function declaration. It doesn't matter if the function comes first.
 */
const subtrahend2 = 100;
calcNumber2();
function calcNumber2() {
    console.log(subtrahend2);
}

/**
 * not working
 * `calcNumber()` is before `const subtrahend`, and it's sequential in declaration like C language.
 */
function calcNumber3() {
    console.log(subtrahend3);
}
calcNumber3();
const subtrahend3 = 100;

