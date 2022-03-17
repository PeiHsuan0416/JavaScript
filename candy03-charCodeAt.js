// 糖果練習題
// 程式語言：JavaScript
// 題目：寫一小段程式，印出陣列裡缺的字

// 範例：

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// # 提示：https://ubin.io/9vJf2w
// String.prototype.charCodeAt()

// 利用charCodeAt()返回找出字符的Unicode 編碼
let list1 = ["a", "b", "c", "d", "f", "g"]
let newList1 = []
list1.forEach(function(i){
    newList1.push((i.charCodeAt()))
})
console.log(newList1); 
// 印出[97, 98, 99, 100, 102, 103]

let list2 = ["O", "Q", "R", "S"];
let newList2 = []
list2.forEach(function(a){
    newList2.push((a.charCodeAt()))
})
console.log(newList2);
//印出[79, 81, 82, 83]


function findLostWord(list){
    for(let i = 0; i < list.length; i++){
        if(list[i + 1].charCodeAt() - list[i].charCodeAt() != 1){
            // return list[i].charCodeAt() + 1
            return String.fromCharCode(list[i].charCodeAt() + 1)
        }
    }
}
console.log(findLostWord(list1));
console.log(findLostWord(list2));

// console.log(String.fromCharCode(findLostWord(list1)));
// console.log(String.fromCharCode(findLostWord(list2)));





