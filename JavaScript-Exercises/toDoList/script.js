// Simple array-backed to-do list with localStorage persistence
var TASKS_KEY = 'todo.tasks';
var tasks = [];

function loadTasks() {
    var raw = localStorage.getItem(TASKS_KEY);
    if (raw) {
        try {
            tasks = JSON.parse(raw);
        } catch (e) {
            tasks = [];
        }
    } else {
        tasks = [];
    }
}

function saveTasks() {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function renderTasks() {
    var container = document.getElementById('taskContainer');
    container.innerHTML = '';
    for (var i = 0; i < tasks.length; i++) {
        var t = tasks[i];
        var li = document.createElement('li');
        li.textContent = t.text + ' ';

        var del = document.createElement('button');
        del.textContent = 'Delete';
        // capture index for this button
        (function(index){
            del.addEventListener('click', function(){ deleteTask(index); });
        })(i);

        li.appendChild(del);
        container.appendChild(li);
    }
}

function addTask(){
    var taskInput = document.getElementById('taskInput');
    var text = taskInput.value.trim();
    if (!text) {
        alert('Please enter a task');
        return;
    }

    var task = {
        id: Date.now(),
        text: text
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = '';
}

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

function clearTask(){
    tasks = [];
    saveTasks();
    renderTasks();
}

// initialize
loadTasks();
renderTasks();

