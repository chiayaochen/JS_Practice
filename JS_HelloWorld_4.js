'use strict';
// 在所有程式碼之前加入 'use strict' 會以嚴格模式執行
const arr = ['乙', '丙', '丁'];
console.log(`陣列修改前：`);
console.log(arr);
arr.push('戊');
console.log(`陣列push後：`);
console.log(arr);
arr.unshift('甲');
console.log(`陣列unshift後：`);
console.log(arr);
arr.pop();
console.log(`陣列pop後：`);
console.log(arr);
arr.shift();
console.log(`陣列shift後：`);
console.log(arr);
console.log('--------');
// concat 只會回傳複本，無法直接使用
let arr1 = arr.concat('A', 'B', 'C');
console.log(`結果1:`);
console.log(arr1);
let arr2 = arr.concat(['A', 'B', 'C']);
console.log(`結果2:`);
console.log(arr2);
let arr3 = arr.concat(['A', 'B'], 'C');
console.log(`結果3:`);
console.log(arr3);
let arr4 = arr.concat(['A', ['B', 'C']]);
console.log(`結果4:`);
console.log(arr4);
console.log('--------')
// concat 只會剝掉一層陣列，不會剝掉陣列裡的陣列
// slice 也是只會傳回複本
let arr5 = arr1.slice(2);
console.log(`結果5:`);
console.log(arr5);
let arr6 = arr1.slice(2,4);
console.log(`結果6:`);
console.log(arr6);
let arr7 = arr1.slice(-2);
console.log(`結果7:`);
console.log(arr7);
let arr8 = arr1.slice(-5, -2);
console.log(`結果8:`);
console.log(arr8);
console.log('--------')
console.log(`splice 的第一個引數是要開始修改處，第二個引數是要移除的元素數量，其餘則是要加入的元素`)
const arr9 = [...arr1];
arr9.splice(1,2,['X','Y','Z']);
console.log('結果9:');
console.log(arr9);
let arr10 = [...arr1];
arr10.splice(1,2,...['X','Y','Z']);
console.log('結果10:');
console.log(arr10);