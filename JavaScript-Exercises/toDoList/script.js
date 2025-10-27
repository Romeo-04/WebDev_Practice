// Simple TODO list: keep the array as source-of-truth and always rebuild the HTML when
// the array changes. This avoids index mismatches and shadowing bugs.
let todoList = [];

function addTask(){
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if(task){
        todoList.push(task);
        taskInput.value = '';
        displayTask();
    } else {
        alert('Enter task monkey');
    }
}

function deleteTask(index){
    // remove the item at the given index then re-render
    if(typeof index === 'number' && index >= 0 && index < todoList.length){
        todoList.splice(index, 1);
        displayTask();
    }
}

function displayTask(){
    const container = document.getElementById("todoListHTML");
    if(!container) return; // defensive: element might not exist yet

    let html = '';
    for(let i = 0; i < todoList.length; i++){
        const task = todoList[i];
        html += `<li>${task} <button onclick="deleteTask(${i})">Delete</button></li>`;
    }

    container.innerHTML = html;
}

// Optionally render any preexisting tasks on load
document.addEventListener('DOMContentLoaded', displayTask);