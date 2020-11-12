// 隨機回傳包含頭尾的整數亂數
function rand(m, n) {
    return Math.floor(m + ((n - m + 1) * Math.random()));
}

// 利用上面的亂數函式來隨機回傳六個圖案其中一個
function randFace() {
    return ['Crown', 'Anchor', 'Heart', 'Spade', 'Club', 'Diamond'][rand(0, 5)];
}

// 起始條件
let funds = 50; // 資金
let round = 0; // 玩的輪數

while((funds > 1)&&(funds < 100)){
    round += 1;
    console.log(`這是第${round}輪`);
    console.log(`\t資金有${funds}元`);
    // 下注
    let betStatus = {
        Crown: 0,
        Anchor: 0,
        Heart: 0,
        Spade: 0,
        Club: 0,
        Diamond: 0
    } //這邊設定賭注的狀態
    let betMoney = rand(1, funds); //口袋隨機掏出的賭金
    if (betMoney === 7) {
        betMoney = funds;
        betStatus['Heart'] = betMoney;
    } else {
        // 隨機分配賭金
        let remaining = betMoney;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            betStatus[face] += bet;
            remaining -= bet;
        } while(remaining > 0)
    }
    funds -= betMoney; // 從資金裡扣掉賭金
    let faceList = Object.keys(betStatus); // 取得物件的key排成陣列
    let faceStatus = faceList.map(item => `${item}的賭金為${betStatus[item]}元`);// 按照陣列裡的東西對應到相對的字串
    let message = `	本次賭注:${faceStatus.join(', ')}${`賭金共${betMoney}}元`}`
    console.log(message)

    //擲骰子
    const hand = []; // 開一個空陣列
    for(let roll = 0; roll < 3; roll += 1){
        hand.push(randFace());
    }
    console.log(`\t擲骰結果為: ${hand.join(', ')}}`);
    
    //拿回贏的錢
    let winning = 0;
    for(let i=0; i < hand.length; i+=1){
        let face = hand[i];
        if(betStatus[face] > 0){
            winning += betStatus[face];
        }
    }
    funds += winning;
    console.log(`\t此輪贏得${winning}元`)    
}
console.log(`結束時的資金為${funds}元`)