// 拼接
const language = 'Java' + ' ' + 'script';

// ``
// 可以随便用引号
const quotation = `I'am ironman.`;
// 多行
const quotation3 = 'A\nB\nC';
const quotation4 = `A
B
C`;
console.log(quotation4);
/*
A
B
C
*/
// 可以用变量（里面是一个表达式就行）
const quotation2 = `${language} ${2 == 3} ${2 + 3}`;
console.log(quotation2);    // Java script false 5
// 三元运算符
const output = `${1 > 2 ? console.log('1>2') : console.log('2>1')}`;



