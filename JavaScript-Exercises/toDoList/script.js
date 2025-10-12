function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskContainer = document.getElementById('taskContainer');
    const task = taskInput.value.trim();

    if(task !== ''){
        document.getElementById('taskContainer').innerHTML += `<li>${task}</li>`;
        taskInput.value = '';
    }
    else{
        alert('please enter a task monkey');
    }

}

