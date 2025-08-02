// Step 1: Grab elements from the HTML
const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskButton");
const list = document.getElementById("taskList");

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
    deleteButton.textContent = "Delete [X]";
    deleteButton.style.marginLeft = "5px";

    deleteButton.addEventListener("click", function(e){
      e.stopPropagation();
      list.removeChild(newItem);
    });

    // Add it to the list
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    // Clear the input box
    input.value = "";
  }
});
