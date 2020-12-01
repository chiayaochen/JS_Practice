// hasOwnProperty 的用途
// 可以處理 for...in 迴圈的危險處，也就是有些屬性其實是繼承來的
// 先假裝做一個 Symbol() 物件
const SYM = Symbol();
const obj = {
    a: 1,
    b: 2,
    c: 3,
    [SYM]: 4
};
for(let prop in obj){
    if(!obj.hasOwnProperty(prop)){
        continue;
    }
    console.log(`${prop}:${obj[prop]}`);
};
console.log(`----\n`);