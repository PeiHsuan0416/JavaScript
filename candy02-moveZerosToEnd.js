// 糖果練習題
// 程式語言：JavaScript

let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  arr.forEach(function (element, index) {
    //element為list陣列中依序被抓取執行的元素, index為被抓取元素的索引值
    if (element === 0) {
      //當被抓取的元素 === 判斷為0
      arr.splice(index, 1); //起始位置為判斷=0元素的索引值,刪除1個
      arr.push(0); //當有刪除一個=0的元素之後，新增一個元素0
    }
  });
  return arr;
}

let result = moveZerosToEnd(list);
console.log(result); // [false,1,1,2,1,3,"a",0,0]

// //可以得到一樣的結果
// let NewList = [];
// for (let i = 0; i < list.length; i++) {
//   if (i == 2 || i == 5) continue;
//   NewList.push(list[i]);
// }
// NewList.push(0, 0);
// console.log(NewList);

// //想法
// const list = ["a", "b", "c", "d", "e", "c"];
// let result = [];
// for (let i = 0; i < list.length; i++) {
//   if (i == 2 || i == 5) continue;
//   result.push(list[i]);
// }
// console.log(result);
// //印出['a', 'b', 'd', 'e']
