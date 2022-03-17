// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方


document.addEventListener("DOMContentLoaded", function (){

    const bodyHeight = document.querySelector("#bodyHeight")
    const bodyWeight = document.querySelector("#bodyWeight")
    const btnCount = document.querySelector(".button")

    const text = document.querySelector("#resultText")

    bodyHeight.addEventListener("click",function(){
        console.log("heigth");
    })
    bodyWeight.addEventListener("click",function(){
        console.log("weigth");
    })
    btnCount.addEventListener("click",function(){
        console.log("count");
        let h = Number(bodyHeight.value)
        let w = Number(bodyWeight.value)
        let BMI = (w/((h/100)*(h/100))).toFixed(2)
        text.textContent = BMI
    })


})


