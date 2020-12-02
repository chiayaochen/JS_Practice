// 試著建立一個新的物件類別
class Car{
    constructor(){
    }
}

// 然後試著建立兩個 Car 的物件
const car1 = new Car();
const car2 = new Car();
// 然後利用 instanceof 運算子 可以知道這個物件是否屬於某個類別
console.log(`----\n`);
console.log(`car1 是不是一種 Car 呢：`);
console.log(car1 instanceof(Car));
console.log(`car1 是不是一種 Array 呢：`);
console.log(car1 instanceof(Array));
console.log(`----\n`);
