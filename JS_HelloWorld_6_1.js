// 先創造兩個物件
const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};
// 來看使用 this 的例子
function greet(){
    return `Hello, I'm ${this.name}!`;
}

console.log(greet()); // 這樣 this 會 undefined
console.log(greet.call(bruce)); // 這樣 this 會指向 bruce 這個物件
console.log(greet.call(madeline)); // 這樣 this 會指向 madeline 這個物件
console.log('--------')

// call 的第一個引數是想要綁定 this 的物件，其餘引數是要呼叫函式的引數，例如：
function update(birthYear, occupation){
    this.birthYear = birthYear
    this.occupation = occupation
}

update.call(bruce, 1949, 'singer');
console.log(bruce.name);
console.log(bruce.birthYear);
console.log(bruce.occupation);
console.log('--------');

// 用 apply 也可以達到同樣的目的，只是 apply 傳入的是個陣列，例如：
update.apply(bruce, [1955, 'actor']);
console.log(bruce.name);
console.log(bruce.birthYear);
console.log(bruce.occupation);
console.log('--------');

// 下面的例子是很適合使用 apply 的例子
const arr = [-2, -1, 0, 1, 5, 12];
let minimal = Math.min.apply(null, arr);
let maximal = Math.max.apply(null, arr);
// 這邊是把 null 傳給 this 反正不會用到 this
console.log(`The min is ${minimal}`);
console.log(`The max is ${maximal}`);
console.log('--------');

//擴張運算子 具有把陣列展開的效果，所以要把 apply 改寫成 call 可以這樣子做
const newBruce = [1940, 'artist'];
update.call(bruce, ...newBruce);
console.log(bruce.name);
console.log(bruce.birthYear);
console.log(bruce.occupation);
console.log('--------');