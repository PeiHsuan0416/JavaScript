//alert("hi") 註解標示(單行)
/*
2345678ghjk
多行註解
*/
// djfml;s

/*
console.log(a);
var a = 1;
console.log(a);

let age = 123;
console.log(age);
*/

/*
console.log(age); //Uncaught SyntaxError: Identifier 'age' has already been declared
let age = 123;
console.log(age);
*/

/*
const ABCD = 123; //通常用大寫，但沒有一定
console.log(age);
*/

/*
const age = 1234;
age = 4567;
console.log(age);
//Uncaught TypeError: Assignment to constant variable.
at app.js:29:5
*/

/*
const age = ["a", "b", "c"];
age[a] = x;
console.log(age);
*/

console.log(typeof 123); //印出number 沒有分整數與非整數，統一是number
console.log(typeof "123"); //印出string
console.log(typeof true); //印出boolean
console.log(typeof undefined); //undefined
console.log(typeof Symbol("hello")); //印出symbol
console.log(typeof []); //印出object
console.log(typeof null); //印出object 不是array，因為沒辦法改，以前的都已經寫了~太多人用，導致現在改不動
