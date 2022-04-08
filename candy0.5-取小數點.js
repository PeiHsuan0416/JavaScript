// function roundedNumber(num, m = 2) {
//    return num.toFixed(m)
// }

// console.log(roundedNumber(123.456, 2)); // 123.46
// console.log(roundedNumber(123.456, 1)); // 123.5
// console.log(roundedNumber(123.456));    // 123.46



const list = [1,2,3,4,5]

const result = list.reduce((a,b)=>{
   return a % b
})

console.log(result);