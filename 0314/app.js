const ln = document.querySelector("#link");
const bnt = document.querySelector("#bnt");

ln.addEventListener("click", function (e) {
  e.preventDefault(); //將預設行為停止
  console.log("hi");
});
