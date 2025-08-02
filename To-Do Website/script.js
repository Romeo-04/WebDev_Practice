// Step 1: Grab elements from the HTML
const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskButton");
const list = document.getElementById("taskList");
const completedTasks = document.getElementById("completedTasks");

// Step 2: Add event listener to button
button.addEventListener("click", function () {
  const taskText = input.value;

  // Step 3: Check if input is not empty
  if (taskText !== "") {
    // Create a new list item (li)
    const newItem = document.createElement("li");
    newItem.textContent = taskText;

    newItem.addEventListener("click",function() {
      newItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Press to Complete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.backgroundColor = "purple";
    deleteButton.style.border = "solid 1px black";
    deleteButton.style.marginTop = "10px";

    deleteButton.addEventListener("click", function(e){
      e.stopPropagation();
      list.removeChild(newItem);
      completedTasks.appendChild(newItem);
      newItem.removeChild(deleteButton);
      newItem.textContent = taskText + " Status: Completed.";
    });

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);


    // Clear the input box
    input.value = "";
  }
});
