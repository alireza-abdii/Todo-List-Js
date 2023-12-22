let $ = document;

let newItem = $.getElementById("todo-newitem");
newItem.value = "";
let addItemBtn = $.getElementById("additem-btn");
let clearItemsBtn = $.getElementById("clearitem-btn");
let todoItems = $.getElementById("todolist-items");
let todoItem = $.querySelectorAll(".todolist-item");
let editItemBtn = $.querySelectorAll(".edit-btn");
let deleteItemBtn = $.querySelectorAll(".delete-btn");
let todoItemTitle = $.querySelectorAll(".todoitem-title");

function addNewItem(newItem) {
  let newTodoLi = $.createElement("li");
  newTodoLi.className = "todolist-item";

  let newTodoSpan = $.createElement("span");
  newTodoSpan.className = "todoitem-title";
  newTodoSpan.innerHTML = newItem;

  let newBtnContainer = $.createElement("div");
  newBtnContainer.className = "btn-container";

  let newEditBtn = $.createElement("button");
  newEditBtn.className = "edit-btn";
  let newDeleteBtn = $.createElement("button");
  newDeleteBtn.className = "delete-btn";

  newEditBtn.innerHTML = '<i class="fas fa-pen"></i>';
  newDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  newBtnContainer.append(newEditBtn, newDeleteBtn);
  newTodoLi.append(newTodoSpan, newBtnContainer);
  todoItems.append(newTodoLi);

  newEditBtn.addEventListener("click", function () {
    let newTitle = prompt("Please enter new title :", newTodoSpan.innerHTML);
    newTodoSpan.innerHTML = newTitle;
  });

  newDeleteBtn.addEventListener("click", function () {
    newTodoLi.remove();
  });
}

addItemBtn.addEventListener("click", function () {
  if (newItem.value) {
    addNewItem(newItem.value);
    newItem.value = "";
  }
});

clearItemsBtn.addEventListener("click", function () {
  todoItems.innerHTML = "";
});

for (let i = 0; i < todoItem.length; i++) {
  editItemBtn[i].addEventListener("click", function () {
    let newTitle = prompt(
      "Please enter new title :",
      todoItemTitle[i].innerHTML
    );
    todoItemTitle[i].innerHTML = newTitle;
  });
}

for (let i = 0; i < todoItem.length; i++) {
  deleteItemBtn[i].addEventListener("click", function () {
    todoItem[i].remove();
  });
}

function getLocalStorage() {
  let localStorageTodos = localStorage.getItem;
}
