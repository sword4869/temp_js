// 7 primitive data types

// 1.number
// used for decimal andintegers
let age = 23;

// 2.string
// 单引号，双引号都行
let firstName = 'Bob';

// 3.boolean
let flag = true;

// 4.undefined
let children;

// 5.null
let pets = null;

// 6.symbol

// 7.nigInt


// 动态类型，可以直接更换变量的类型。
// 可以通过`typeof`来获取变量类型
let v;
console.log(typeof v);  // undefined
v = 0;
console.log(typeof v);  // number
v = true;
console.log(typeof v);  // boolean
v = null;
// 这是typeof运算符的一个遗留性错误，把null当初object对象类型。
console.log(typeof v);  // object


// typeof运算符返回的是字符串类型
let t = typeof 123;
console.log(t, typeof t);   // number string
console.log(t=='number');   // true