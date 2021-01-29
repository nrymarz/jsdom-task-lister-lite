document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const list = document.querySelector("#list #tasks")
  taskForm.addEventListener("submit",addToList)
  list.addEventListener("click",deleteTask)

  function addToList(event){
    event.preventDefault();
    let str = taskForm.querySelector("input").value
    let task = document.createElement('li')
    task.textContent = str
    task.innerHTML += `<button data-description = "${str}">X</button>`
    task.addEventListener("click",deleteTask)
    list.appendChild(task)
    event.target.reset()
  }

  function deleteTask(event){
    event.target.parentElement.remove()
  }
});
