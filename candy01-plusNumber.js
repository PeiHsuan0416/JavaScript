// 糖果練習題
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

let list = [19, 5, 42, 2, 77];

let len = list.length; //指定list的長度
for (let a = 0; a < len; a++) {
  //總共要跑幾輪
  for (let b = 0; b < len - 1 - a; b++) {
    //控制內圈比較的時候要跑幾次
    if (list[b] > list[b + 1]) {
      //比較大小交換位置
      let temp = list[b + 1];
      list[b + 1] = list[b];
      list[b] = temp;
    }
  }
}
console.log(list); //印出排好的順序
console.log(list[0] + list[1]); //印出陣列中前兩個數值相加

// 最終結果應該要印出 7
