function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task==="") return;

let li = document.createElement("li");
li.textContent = task;

document.getElementById("taskList").appendChild(li);

input.value="";
}

li.onclick = function(){
this.remove()
}

function createTask(task){

let li = document.createElement("li")

let checkbox = document.createElement("input")
checkbox.type = "checkbox"

checkbox.onchange = function(){
li.style.textDecoration = this.checked ? "line-through" : "none"
}

li.appendChild(checkbox)
li.append(" " + task)

document.getElementById("taskList").appendChild(li)

}