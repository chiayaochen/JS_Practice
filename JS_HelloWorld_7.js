// 來看看另一個常用的陣列方法 reduce
// JS 的字串一樣可以視為陣列
const jan = 'January';
console.log(`----\n字串 ${jan} 的第一個元素為 ${jan[0]}.`);

// 練習看看
const months = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];
const alphabetical = months.reduce(
    // a 是個累積器
    // x 是一個一個去讀出陣列元素
    (a, x) => {
        // 如果累積器裡沒有帶頭字母，則創造一個空陣列來放
        if(!a[x[0]]){a[x[0]]=[]};
        // 如果累積器已經有帶頭字母的物件，則把月份歸在各帶頭字母裡面
        a[x[0]].push(x);
        // 然後回傳整理好的物件
        return a;
    },
    {} // 這個空括號是代表空的起始物件
);
console.log(`----\n來看看這個將月份用字母整理的物件`);
console.log(alphabetical);
