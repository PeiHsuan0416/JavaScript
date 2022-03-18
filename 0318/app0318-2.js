const API = "https://jsonplaceholder.typicode.com/users"

const req = new XMLHttpRequest()

// // req.addEventListener("load",() => {
// //     console.log("ok")
// //     let resp = req.responseText
// //     console.log(resp);
// // })
// // req.open("GET", API)
// // req.send()

// // //印出所選取的資料
// // req.addEventListener("load",() => {
// //     let resp = JSON.parse(req.responseText)
// //     resp.forEach((user) => {
// //         console.log(user.name);
// //     });
// // })
// // req.open("GET", API)
// // req.send()

// //把它印在網頁上
// req.addEventListener("load",() => {
//     const ul = document.createElement("ul")

//     let resp = JSON.parse(req.responseText)
//     resp.forEach((user) => {
//         // console.log(user.name);
//         const li = document.createElement("li")
//         li.textContent = user.name
//         ul.appendChild(li)
//     });
//     document.querySelector("body").appendChild(ul)
// })
// req.open("GET", API)
// req.send()


// //-------
// const a = fetch(API) //直接抓取網址檔案站存在網路空間
// a.then((resp) => { //將promise物件
//     console.log(resp);
// })

const a = fetch(API).then((resp) => {
    console.log(resp);
    return resp.json()
}).then((data)=>{
    console.log(data);
})


// const a = fetch(API)
// a.then((resp)=>{
//     // console.log(a); 
//     return resp.json()
// }).then((data)=>{
// console.log(data);
// })
// .catch((err) => { //如果失敗了
//     console.log("fail----" + err);
// })


// const parser = (resp) => resp.json()
// const logger = (data) => {
//     console.log(data);
// }
// const catcher = (err) => {
//     console.log("fail----" + err);
// }

// fetch(API).then(parser).then(logger).catch(catcher)



// // async / await → await要寫在async function裡
// async function getUsers(){
//     const rawData = await fetch(API)
//     const users = await rawData.json()
//     users.forEach((user)=>{
//         console.log(user.name);
//     })
// }
// getUsers()