// 程式碼寫這裡
const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const todoul = document.querySelector(".todo-list");

taskInput.addEventListener;

addBtn.addEventListener("click", () => {
  const todoli = document.createElement("li");
  todoli.className = "todo-item";
  const todoitem = document.createElement("span");
  todoitem.className = "item";
  const btn = document.createElement("button");
  btn.className = "closeBtn";

  if (taskInput.value !== "" && taskInput.value.trim()) {
    todoitem.textContent = taskInput.value;
    btn.textContent = "X";

    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });

    todoli.appendChild(todoitem);
    todoli.appendChild(btn);
    todoul.appendChild(todoli);

    taskInput.value = "";
    taskInput.focus();
  } else {
    taskInput.focus();
  }
});

taskInput.addEventListener("keypress", (enter) => {
  if (enter.key == "Enter") {
    const todoli = document.createElement("li");
    todoli.className = "todo-item";
    const todoitem = document.createElement("span");
    todoitem.className = "item";
    const btn = document.createElement("button");
    btn.className = "closeBtn";

    if (taskInput.value !== "" && taskInput.value.trim()) {
      todoitem.textContent = taskInput.value;
      btn.textContent = "X";

      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });

      todoli.appendChild(todoitem);
      todoli.appendChild(btn);
      todoul.appendChild(todoli);

      taskInput.value = "";
    }
  }
});
