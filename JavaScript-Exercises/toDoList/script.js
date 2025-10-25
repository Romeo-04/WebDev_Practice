let todoList = [];
let todoListHTML = '';
todoListHTML = document.getElementById("todoListHTML").innerHTML;

function addTask(){
    
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if(task){
        todoList.push(task);
        todoListHTML += `<li>${task}</li>`;
        document.getElementById("todoListHTML").innerHTML = todoListHTML;
    }
    else {
        alert('Enter task monkey');
    }
} 