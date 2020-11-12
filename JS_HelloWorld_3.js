// Immediately Invoked Function Expression, IIFE
// 立即呼叫函式運算式
const message = (
    function(){
        const secret = '這是藏在立即呼叫函式運算式裡的變數，外部是無法修改的！';
        return `秘密共有${secret.length}個字元`
    }
)();

console.log(message);
console.log('--------');

// 看下面的例子
const counting_1 = (
    function(){
        let count = 0;
        return `我被叫出來${count+=1}次了！`;
    }
)();
for(let i=0; i<10; i+=1){
    console.log(counting_1);
}
console.log('--------');
// 也可以這樣做變化
const counting_2 = (
    function(){
        let count = 0;
        return function(){
            return `我被叫出來${count+=1}次了！`;
        }
    }
)();
for(let i=0; i<10; i+=1){
    console.log(counting_2());
}
console.log('--------');