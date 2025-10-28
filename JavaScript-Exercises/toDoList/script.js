let todoList = []

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const task = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if(task && dueDate){
        todoList.push({task,dueDate});
        taskInput.value = '';
        dueDateInput.value = '';
        renderTasks();
    }
}

function renderTasks(){
    const taskList = document.getElementById('todoListHTML');
    taskList.innerHTML = '';

    todoList.forEach((item,index) => {
        const li = document.createElement('li');
        li.innerHTML =`${item.task} - Due: ${item.dueDate} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    })
}

function deleteTask(index){
    todoList.splice(index, 1);
    renderTasks();
}