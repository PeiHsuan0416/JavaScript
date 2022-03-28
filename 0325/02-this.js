//this
// console.log(this); //印出window 這個全域的物件

// const cat = {
//     name: "kitty",
//     age: 18,
//     hello: function() {
//         console.log(this);
//     },
// }
// cat.hello()
// 1.誰呼叫誰 就是this //this 只跟誰呼叫 怎麼被執行有關 let const跟怎麼執行有關
// 2.沒人呼叫 this就是window全域物件
// 3.箭頭函式沒有自己的this和arguments(像陣列一樣的東西)
// 4.是否有使用call/apply/bind 會讓this改變
// 5.在strict 嚴格模式情況下，this會比較嚴謹


// const arguments = 123
// const a = function (){
//     console.log(arguments);
// }

// a("aa","bb","cc") //['aa', 'bb', 'cc', callee: ƒ, Symbol(Symbol.iterator): ƒ]


// const arguments = 123
// const a = () =>{
//     console.log(arguments); //印出123
// }

// a("aa","bb","cc") 

//-------------------------------
// const cat ={
//     name:"kitty",
//     age: 18,
//     hello: ()=>{
//         this.age = 20
//     },
// }
// cat.hello()
// console.log(age); //印出20


// const cat ={
//     name:"kitty",
//     age: 18,
//     hello: function(){
//         this.age = 20
//     },
// }
// cat.hello()
// console.log(age); //錯誤????
//------------------------------------------

// const btn = document.createElement("button")

// btn.addEventLister("click",function(){
//     this.textContent = "123"
// })
//描述變的抽象化 讓function可以被更廣泛使用

//--------------
//綁架this 改變this的走向
//call和apply(apply後面的參數要用陣列)

// const cat = {
//     name: "KK",
//     age: 12,
// }

// function hello(){
//     console.log(this);
// }

// hello.call(cat) //{name: 'KK', age: 12}

// //要小心
// const cat = {
//     name: "KK",
//     age: 12,
// }

// function hello(){
//     this.name = "cc"
// }

// hi => {
//     this.name = "dd"
// }

// console.log(cat.name);//KK
// hello.call(cat) 
// console.log(cat.name);//CC
// hi.call(cat)
// console.log(cat.name);

//------------------嚴格模式
// "use strict" //放在function裡面只有對該function有用
// function hello(){
//     console.log(this); //undefied
// }
// hello()

//IIFE 立即啟動函數表示法
//外面再怎麼宣告都與他無關 與世隔絕的泡泡
//不會跟外界互相汙染


