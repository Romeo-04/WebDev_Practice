const studentNameInput = document.getElementById("studentName");
const addStudentButton = document.getElementById("addStudentButton");
const studentList = document.getElementById("studentList");

addStudentButton.addEventListener("click", function() {
    const studentName = studentNameInput.value.trim();
    if(studentName){
        const listItem = document.createElement("li");
        listItem.textContent = studentName;
        studentList.appendChild(listItem);
        studentNameInput.value = "";
    }
})