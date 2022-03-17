// 程式碼寫在這裡
// 提示：.value



// document.addEventListener("DOMContentLoaded",function(){
//     const bnt_plus = document.querySelector("#plus")
//     const bnt_minus = document.querySelector("#minus")
//     const counter = document.querySelector("#counter")

//     bnt_plus.addEventListener("click",function(){
//         console.log("+");
//         counter.value = Number(counter.value) + 1
//     })

//     bnt_minus.addEventListener("click",function(){
//         console.log("-");
//         if (counter.value > 1){
//             counter.value = Number(counter.value) - 1
//         }
        
//     })



// })


document.addEventListener("DOMContentLoaded", () => {
    let count = 1
  
    // SRP
    const updateCounter = function (c) {
      document.querySelector("#counter").value = c
    }
  
    const up = () => {
      count++
      updateCounter(count)
    }
  
    const down = () => {
      if (count > 0) {
        count--
      }
      updateCounter(count)
    }
  
    document.querySelector("#plus").addEventListener("click", up)
    document.querySelector("#minus").addEventListener("click", down)
  })




