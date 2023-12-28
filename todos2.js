let todoItemsContainer = document.getElementById("todoItemsContainer");
let buttonElement = document.getElementById("buttonTodo");


let todoList = [{
        text: "Learn HTML",
        uniqueN0: 1
    },
    {
        text: "Learn CSS",
        uniqueN0: 2
    },
    {
        text: "Learn JavaScript",
        uniqueN0: 3
    }
];




buttonElement.onclick = function() {
    onAddTodoOne();
};


function onTodoStatusChange(checkBoxId, labelId) {
    let checkboxElement = document.getElementById(checkBoxId);
    console.log(checkboxElement);

    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle("checked");

}

function ondeleteTodo(deleteId) {
    let todoElement = document.getElementById("deleteId");
    todoItemsContainer.removeChild(todoElement);
}




function createAndAppendTodo(todo) {
    let checkBoxId = "checkbox" + todo.uniqueN0;
    let labelId = "label" + todo.uniqueN0;
    let deleteId = "delete" + todo.uniqueN0;


    let todoElement = document.createElement("li");
    todoElement.id = "deleteId";
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkBoxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkBoxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkBoxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        ondeleteTodo(deleteId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}


function onAddTodoOne() {
    let todoCount = todoList.length;
    todoCount = todoCount + 1;

    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid input");
        return;
    }

    let newtodo = {
        text: userInputValue,
        uniqueN0: todoCount,
    };

    createAndAppendTodo(newtodo);
    userInputElement = "";
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}