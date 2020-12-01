// 複習 Arrow functions
// 無引數的一定要寫括號
const f1 = function (){return `This is f1.`;};
console.log(f1());
const f1_1 = () => `This is f1_1.`;
console.log(f1_1());
// 只有一個引述的，可以省略括號
const f2 = message => `${message}`;
console.log(f2(`This is the function f2.`));
// 多引數的則依然必須加括號
const f3 = (msg1, msg2) => msg1 + " " + msg2;
console.log(f3(`This is`, `the f3.`));