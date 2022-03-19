// 程式碼寫這裡
const addBtn = document.querySelector("#addBtn"); 
const taskInput = document.querySelector("#taskInput"); 
const todoList = document.querySelector(".todo-list") //ul


addBtn.addEventListener("click", () => {
  const todoItem = document.createElement("li")
  todoItem.classList.add("todo-item")
  const item = document.createElement("span")
  item.classList.add("item")
  const newcloseBtn = document.createElement("button")
  newcloseBtn.classList.add("closeBtn")
  
  if(taskInput.value !== ""){
    item.textContent = taskInput.value
    newcloseBtn.textContent = "X"
    todoItem.appendChild(item)
    todoItem.appendChild(newcloseBtn)
    todoList.appendChild(todoItem) 
    taskInput.value = ""
  }
});


taskInput.addEventListener("keypress",(enter)=>{
  if(enter.key == "Enter"){
    const todoItem = document.createElement("li")
    todoItem.classList.add("todo-item")
    const item = document.createElement("span")
    item.classList.add("item")
    const newcloseBtn = document.createElement("button")
    newcloseBtn.classList.add("closeBtn")

    if(taskInput.value !== ""){
      item.textContent = taskInput.value
      newcloseBtn.textContent = "X"
      todoItem.appendChild(item)
      todoItem.appendChild(newcloseBtn)
      todoList.appendChild(todoItem) 
      taskInput.value = ""
    }
    
  }
})

const closeBtn = document.querySelector(".closeBtn")
closeBtn.addEventListener("click",(event)=>{
  console.log(closbtn);
  const deletelist = document.querySelector(".todo-list")
  deletelist.remove(closeBtn)
})


