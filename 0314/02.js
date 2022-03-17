// const list = [1, 2, 3, 4, 5];

// let a = list.filter(function (x) {
//   return x > 3;
// });
// console.log(a);

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = list.filter(function (x) {
//   return !(x % 2 == 0);
// });
// console.log(a);

// ↑ filter的用法

// ↓ reduce的用法
// const list = [1, 2, 3, 4, 5];

// let a = list.reduce(function (acc, cv) {
//   console.log(acc, cv);
//   return acc + cv;
// }, 0);
// console.log(a);

// const list = [19, 23, 2, 3, 24];
// let a = list.reduce(function (acc, cv) {
//   if (cv > acc) {
//     return cv;
//   } else {
//     return acc;
//   }
// });
// console.log(a);

// const cat = {
//   age: 18,
//   name: "KK",
//   attack: function () {
//     console.log("go!");
//   },
// };

// cat.age(); //印出not a function
// cat.attack(); //印出go!

// const cat = {};

// cat.weather = 1; //這邊要用=

// console.log(cat); //印出weather: 1

// const li = document.querySelectorAll("#list :nth-child(2)");
// li.textContent = "x";
// console.log(c);

//讓每個字變成五倍長
// textContent 抓物件裡面的內容
// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.textContent = item.textContent.repeat(5);
// });

// items.forEach(function (item) {
//   item.textContent = item.textContent.repeat(5);
// });

// const items = document.querySelectorAll(".item");
// items.forEach(function (item) {
//   item.classList.add("hi");
// });

// const h = document.querySelector("#hello");
// h.addEventListener("click", function () {
//   console.log("點了");
// });

// function a() {
//   const b = function () {
//     console.log(123);
//   };
//   return b;
// }
// a();
// a()();
// a()()();

// const bnt = document.querySelector("#bnt");
// //監聽器可以加很多個
// bnt.addEventListener("click", () => {
//   console.log("yes");
// });
// bnt.addEventListener("click", () => {
//   console.log("no");
// });
// //侵入式 改屬性 後面會覆蓋前面
// bnt.onclick = function () {
//   console.log(123);
// };
// bnt.onclick = function () {
//   console.log(456);
// };



// 測試innerText
var test1 = document.getElementById('help1');
test1.innerText  = "這是innerText插入文字";

// 測試textContent
var test2 = document.getElementById('help2');
test2.textContent = "這是textContent插入文字";