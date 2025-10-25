let todoList = [];
let todoListHTML = '';
todoListHTML = document.getElementById("todoListHTML").innerHTML;

function addTask(){
    
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if(task){
        todoList.push(task);
        let i = todoList.length - 1;

        todoListHTML += `<li>${task}</li> <button onclick="deleteTask(${i});
        "> Delete </button>`;

        console.log(todoListHTML);
        console.log(todoList);
        document.getElementById("todoListHTML").innerHTML = todoListHTML;
    }

    else {
        alert('Enter task monkey');
    }
} 

function deleteTask(e){
    for(let i = 0; i < todoList.length; i++){
        if(i === e){
            todoList.splice(i,1);
            console.log(todoList);
        }
    }
    displayTask();

}

function displayTask(){
    for(let i = 0; i < todoList.length; i++){
        let task = todoList[i];
        let i = todoList.length - 1;

        todoListHTML += `<li>${task}</li> <button onclick="deleteTask(${i})`;
    }
}