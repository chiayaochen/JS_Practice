// map 的威力
const items = ["Pencil", "Eraser", "Ruler"];
const price = [10.4, 20.5, 30.6];
// 然後要使用 map 做奇怪的事情了
const myCart = items.map(
    (obj, index) => (
        {the_object: obj, the_price: price[index]}
    )
);
console.log(`來看看 myCart 是什麼`);
console.log(myCart);
// 現在myCart是個有三個物件的陣列了
// 那麼 map 的另一個用途可以拿來解構物件
const GetTheItems = myCart.map(objj => objj.the_object);
console.log(`取得購物車的物品名稱`);
console.log(GetTheItems);
const GetThePrice = myCart.map(objj => objj.the_price);
console.log(`取得現在購物車的價格`);
console.log(GetThePrice);
// 假設我想把名稱都變成大寫
const NewName = GetTheItems.map(
    objjj => objjj.toUpperCase()
);
// 假設我想商品都打七折
const NewPrice = GetThePrice.map(objjj => objjj * 0.7);
// 然後全部放到新的購物車裡面
const NewCart = NewName.map(
    (objx, indexx) => (
        {new_obj: objx, new_price: NewPrice[indexx]}
    )
);
console.log(`來看看 NewCart 裡面是什麼`);
console.log(NewCart);
