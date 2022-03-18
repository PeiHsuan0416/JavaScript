// const add = (a,b) => 
// a + b
// let result = add(1,2)
// console.log(result);

// // 兩個都一樣的時候可以寫一個就好
// let name = "kk"
// let age = 18

// const cat = {
//     name,
//     age,
// }
// console.log(cat);
// //印出{name: 'kk', age: 18}

//物件的解構
// const cat = {
//     name : "kk",
//     age : 18,
// }
// let name = cat.name
// let age = cat.age
// // let {name,age} = cat //同等前兩行

// console.log(name,age); //印出 KK 18

// //解構名字重複時
// const cat = {
//     name : "kk",
//     age : 18,
// }
// let name = "cc"
// let {name : patname,age} = cat //因為name之前已經宣告過，所以要另外取名字

// console.log(patname,age); //印出 KK 18
// console.log(name, age); //印出cc 18
// console.log(name,patname,age); //印出cc kk 18
// // let 和 const 時只要有被宣告過就不可以重複使用 使用優先順序 const>let>var 

//用在function參數時
// // function hello(h){
// //     const name = h.name;
// //     const age = h.age;
// //     console.log(name,age);
// // }
// function hello(h){
//     const {name,age} = h
//     console.log(name,age);
// }

// function hello({name,age}){ //也可以在幫他取名字
//     console.log(name,age)
// }

// const hero = {
//     name: "kk", //要有,很重要
//     age: 18,
// }

// hello(hero)

// function hello({ar:name,age}){ //也可以在幫他取名字
//     console.log(name,age)
// }
// const cc = {
//     name: "kk2", //要有,很重要
//     age: 182,
//     ar: 1122223,
// }
// const hero = {
//     name: "kk", //要有,很重要
//     age: 18,
//     ar: 112222,
// }
// hello(cc) //印出1122223 182
// hello(hero) //印出112222 18  因為把ar指定命名為name 所以會抓ar值

//把兩個陣列寫在一起...炸開
const a = [1,2,3]
const b = [4,5,6]
//const c = a.concat(b) //印出 [1, 2, 3, 4, 5, 6]concat一次只能組一個
//把她展開...炸開
// const c = [...a,...b] //給他一個家 用[]放在一起
// console.log(c); //印出[1, 2, 3, 4, 5, 6]

//splat operator  
function sayHello(x,y,z){
    console.log(x,y,z);
}
sayHello(a,b)// 印出 [1, 2, 3] [4, 5, 6] undefined
sayHello(a); // 印出 [1, 2, 3] undefined undefined
sayHello(...a); //印出1 2 3 //這裡不是印陣列是因為是把a展開來
//放在印出來的地方是展開
//放在參數裡面是我都要收 用陣列包
function hi(a,b,...c){ //剩下我全收了 如果放在中間 後面就沒辦法使用，會出現錯誤 因為你中間都吃光光了
    console.log(a); //印出1  //印出7 //印出1
    console.log(b); //印出2  //印出8 //印出2
    console.log(c); ////印出[3,4,5] //印出[9] //印出[]
}
hi(1,2,3,4,5) 
hi(7,8,9)
hi(1,2) //...會印出[]陣列形式

//陣列的解構是按照位置
