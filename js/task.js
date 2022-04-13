const btnAddTask= document.getElementById("add-task");
const listTask=document.querySelector(".task-list");

btnAddTask.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);
    console.log("Задача добавлена");
    let task = document.createElement("li");
    let nameTask=document.getElementById("task-name").value;
    //task.innerHTML= nameTask+'<span class="del">X</span>';
    task.innerHTML = `${nameTask}<span class="del">X</span>`;
    listTask.append(task);
});