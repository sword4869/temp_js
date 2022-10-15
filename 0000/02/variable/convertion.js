// type conversion & type coercion

// conversion
// 显示类型转化
// Number
let a = Number('123');

// NaN: not a number
// The type of NaN is actually number, but it means the invalid number.
let b = Number('hh');
console.log(b, typeof b);     // NaN number

// Boolean
// 5 falsy values: 0, '', undefined, null, NaN
// Everything else is truthy values. e.g. empty object `{}`.
const flag = Boolean('');


// coercion
// 隐式类型转化

// + operator is different with -*/
// -*/ operator: trigger to the Number
const d = '21' - '3' * '7';
console.log(d);     // 0

// + operator: trigger to the String.
const c = 3 - '2' + '2';
console.log(c);     // 12
