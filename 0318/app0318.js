// const box = document.querySelector("#hello")
// const h = document.createElement("h1")
// h.textContent = "hello"
// console.log(h);
// box.appendChild(h) //在畫面上把hello加在box後面




// const btn = document.querySelector("#btn")
// btn.addEventListener("click",() =>{
//     const lastOne = document.querySelector("#list :last-child")
//     lastOne.remove()
//     // console.log(lastOne); //<li>E</li>
// })





// const btn = document.querySelector("#btn")
// btn.addEventListener("click",() =>{
//     const lastOne = document.querySelector("#list :last-child")
//     if(lastOne) //叫他自己砍
//     lastOne.remove()
//     console.log(lastOne);
// })


// const btn = document.querySelector("#btn")
// btn.addEventListener("click",() =>{
//     const u = document.querySelector("#list")
//     const lastOne = document.querySelector("#list :last-child")
//     if(lastOne) //叫他長輩來砍
//     u.removeChild(lastOne)
//     console.log(lastOne);
// })





// const btn = document.querySelector("#btn")
// btn.addEventListener("click",() =>{
//     const lastOne = document.querySelector("#list :last-child")
    
//     console.log(lastOne.parentElement); //找上一層的東西
//     console.log(lastOne.parentNode);
// })
// //E也是一種N 繼承node的功能 E < N (符號<是繼承)
// //Element大多處理看的到的東西


// const btn = document.querySelector("#btn")
// btn.addEventListener("click",() =>{
//     const pa = document.querySelector("ul")
//     console.log(pa.children); //只抓看的到的 印出HTMLCollection(5) [li, li, li, li, li] 不能用forEach
//     console.log(pa.childNodes); //把看不到的都抓(連同換行) 印出NodeList(11)[text, li, text, li, text, li, text, li, text, li, text]
    
// })

// const btn = document.querySelector("#btn")
// btn.addEventListener("click",()=>{
//     const pa = document.querySelector("ul")
//     console.log(pa.children); //印出父層ul下的所有子層[]
//     // for(let i = 0; i < pa.children.length; i++)
//     // console.log(pa.children[i].textContent);//加.textContent可以只印出值
//     let papaList = [...pa.children]
//     papaList.forEach(function(i){
//         console.log(i.textContent); //印出<li>裡面的值A
//         console.log(i);//<li>A</li>
//     })
// })

// //HTMLCollection沒有forEach功能 NodeList才有
// //挑戰 把看不到的註解都在HTML呈現 按鈕按下去顯示所有的註解

btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
    const pa = document.querySelector("ul")
    console.log(pa.children); //印出父層ul下的所有子層[]
    for(let i = 0; i < pa.children.length; i++)
    console.log(pa.children[i]);
    const paList = document.createElement("p")
    paList.textContent = pa.children
    pa.appendChild(paList)
})



// const lastOne = document.querySelector("ul :last-child")

// console.log(lastOne.previousElementSibling); //取上一個兄弟姊妹<li>D
// console.log(lastOne.previousSibling); //取上一個兄弟姊妹 是空格text
// console.log(lastOne.nextElementSibling); //取下一個兄弟null
// console.log(lastOne.nextSibling); //下一個兄弟姊妹 空格



// const list = document.querySelector("#list")
// const newList = document.createElement("li")
// newList.textContent = "x"  //這裡是物件
// list.insertAdjacentElement("afterbegin",newList)

// const list = document.querySelector("#list")
// const newList = document.createElement("li")
// const newLi = "<li>X</li>"
// list.insertAdjacentHTML("afterbegin",newLi)

// let msg = "X"
// const newList = `<li>${msg}</li>` //這裡要用backtick轉成字串
// list.insertAdjacentHTML("afterbegin",newList)

