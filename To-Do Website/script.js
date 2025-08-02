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

    // Add it to the list
    list.appendChild(newItem);

    // Clear the input box
    input.value = "";
  }
});
