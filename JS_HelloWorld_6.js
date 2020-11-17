// map 的威力
const items = ["Pencil", "Eraser", "Ruler"];
const price = [10.4, 20.5, 30.6];
// 然後要使用 map 做奇怪的事情了
const myCart = items.map(
    (obj, index) => (
        { the_object: obj, the_price: price[index] }
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
        { new_obj: objx, new_price: NewPrice[indexx] }
    )
);
console.log(`來看看 NewCart 裡面是什麼`);
console.log(NewCart);
// 接下來練習 Filter 的用法
// 以撲克牌花色作為例子
// 首先先創造一個簡單的撲克牌
const poker = [];
for (let suit of ['Hearts', 'Clubs', 'Diamonds', 'Spades']) {
    // 上面是花色
    for (let value = 1; value <= 13; value += 1) {
        //把卡片視為物件一個一個加進來
        poker.push({ suit, value });
    }
};
console.log(`來看一下現在整副撲克牌：`);
console.log(poker);
// 假設我們要挑選紅心的圖案牌
const card_heart_face = poker.filter(
    obj => (
        (obj.suit === 'Hearts') && (obj.value >= 11)
    )
);
console.log(`來看看我們選的紅心圖案牌`);
console.log(card_heart_face);
// 然後來練習 filter 加上 map 的用法
function SuitToUnicode(CardsInput) {
    // 建立相對應的 Unicode
    const SuitOfU = {
        'Hearts': '\u2665',
        'Clubs': '\u2663',
        'Diamonds': '\2666',
        'Spades': '\u2660'
    }
    // 處理非數字牌
    const NewValue = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    // 數字牌則依然是數字牌
    for (i = 2; i <= 10; i += 1) {
        NewValue[i] = i;
    };
    // 然後把花色與數字合併
    return SuitOfU[CardsInput.suit] + NewValue[CardsInput.value];
};

// 來看看梅花的非數字牌有哪些
console.log(`來看看梅花非數字牌有哪些`);
const card_club_nan = poker.filter(
    c => (
        (c.suit === 'Clubs') && (
            (c.value === 1) || (c.value >= 11)
        )
    )
).map(SuitToUnicode);
console.log(card_club_nan);