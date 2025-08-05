const studentNameInput = document.getElementById("studentName");
const addStudentButton = document.getElementById("addStudentButton");
const studentList = document.getElementById("studentList");
const removeStudentButton = document.getElementById("removeStudentButton");

addStudentButton.addEventListener("click", function() {
    const studentName = studentNameInput.value.trim();
    if(studentName){
        const listItem = document.createElement("li");
        listItem.style.display = "flex";
        listItem.style.alignItems = "center";
        listItem.style.marginBottom = "5px";
        
        const nameSpan = document.createElement("span");
        nameSpan.textContent = studentName;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = "blue";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.borderRadius = "3px";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.marginLeft = "5px";
        
        deleteBtn.addEventListener("click", function(){
            studentList.removeChild(listItem);
        });
        
        listItem.appendChild(nameSpan);
        listItem.appendChild(deleteBtn);
        studentList.appendChild(listItem);
        studentNameInput.value = "";
    }
});
