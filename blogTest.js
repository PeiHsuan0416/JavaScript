
// // const list = [1,2,3,4,5]

// // const result = list.reduce((a,b)=>{
// //    return a % b
// // })

// // console.log(result);

// // function addPerson(name, phone, email, gender, birth, address){
// //     //略 
// //     // console.log(name);
// //     // console.log(phone);
// //     // console.log(email);
// //     // console.log(gender);
// //     // console.log(birth);
// //     // console.log(address); 
// //     console.log(people);
// //   };
// // //   addPerson("Sharon", "0912345678", "aaa@aa.com", 'female', "12/34", 'Taipei City');


// //   let people = {
// //     name: "Sharon", //記得前面是冒號:結尾要逗號區隔,
// //     phone: "0912345678",
// //     email: "aaa@aa.com",
// //     gender: "female",
// //     birth: "12/34",
// //     address: "Taipei City",
// // }
// // addPerson(people)

// function addPerson(
//     name = "kk", 
//     phone, 
//     email, 
//     gender, 
//     birth, 
//     address,
// ){

//     console.log(people);
//   };
// //   addPerson("Sharon", "0912345678", "aaa@aa.com", 'female', "12/34", 'Taipei City');


//   let people = {
//     name: "",
//     phone: "0912345678",
//     email: "aaa@aa.com",
//     gender: "female",
//     birth: "12/34",
//     address: "Taipei City",
// }
// addPerson(people)

// const plus = function (numA, numB) {
//     console.log( arguments.length );
//     console.log(arguments);
  
//     return numA + numB;
//   };
  
//   // 因為有 5 個參數，會先 log 出 5，然後回傳 1+2 的結果
//   plus(1, 2, 3, 4, 5);
//   console.log(plus(1, 2, 3, 4, 5));

  function method(a, b, c) {
    console.log(arguments.callee);
    console.log(arguments.caller);
    console.log(arguments.callee.caller);
    console.log('宣告參數長度--'+arguments.callee.length);
    console.log('實際參數長度--'+arguments.length);
    console.log('callmethod的參數長度--' + arguments.callee.caller.length)
    console.log(a);
    console.log(b);
    console.log(c);
}
function callmethod(a)
{
    method(1,3);
}
callmethod();