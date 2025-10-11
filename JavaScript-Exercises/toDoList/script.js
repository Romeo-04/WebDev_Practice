const taskList = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i] )
        taskList.push(taskInput.value);
        taskInput.value = '';
        displayTasks();
        return;
    }
}

function displayTasks(){
    for()
}