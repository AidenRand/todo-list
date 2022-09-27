const todayInput = document.querySelector(".todayInput");
const addTodayBtn = document.querySelector(".newToday");
let taskContainer = document.querySelector(".taskContainer");
let checkBtn1 = document.querySelector(".checkBtn");
let deleteBtn1 = document.querySelector(".deleteBtn");
let btnDiv1 = document.querySelector(".btnDiv");
let tasksDiv1 = document.querySelector(".tasksDiv");
let tasks = [];

function Task(todo, check) {
  this.todo = todo;
  this.check = check;
}

function makeTasks() {
  let todo = todayInput.value;
  let check = checkBtn1;
  let newTask = new Task(todo, check);
  tasks.push(newTask);
}

function displayTasks() {
  taskContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let tasksT = tasks[i].todo;

    let tasksText = document.createElement("p");
    tasksText.innerHTML = tasksT;
    tasksText.classList = "tasksText";

    let tasksDiv = document.createElement("div");
    tasksDiv.classList = "tasksDiv";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    deleteBtn.classList = "deleteBtn";

    let btnDiv = document.createElement("div");
    btnDiv.classList = "btnDiv";

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
    checkBtn.classList = "checkBtn";

    tasksDiv.appendChild(tasksText);
    btnDiv.appendChild(checkBtn);
    btnDiv.appendChild(deleteBtn);
    tasksDiv.appendChild(btnDiv);
    taskContainer.appendChild(tasksDiv);

    checkBtn.addEventListener("click", () => {
      if (!tasks[i].check) {
        checkBtn.style.color = "var(--neon-color1)";
        checkBtn.style.textShadow = "0px 0px 5px var(--neon-color1)";
        tasksDiv.style.boxShadow = "0px 0px 5px var(--neon-color1)";
        tasksDiv.style.border = "2px solid var(--neon-color1)";
        tasksText.style.color = "var(--neon-color1)";
        tasksText.style.textShadow = "0px 0px 5px var(--neon-color1)";
        deleteBtn.style.color = "var(--neon-color1)";
        deleteBtn.style.textShadow = "0px 0px 5px var(--neon-color1)";
        tasks[i].check = true;
      } else {
        checkBtn.style.color = "var(--neon-color2)";
        checkBtn.style.textShadow = "0px 0px 5px var(--neon-color2)";
        tasksDiv.style.boxShadow = "0px 0px 5px var(--neon-color2)";
        tasksDiv.style.border = "2px solid var(--neon-color2)";
        tasksText.style.color = "var(--neon-color2)";
        tasksText.style.textShadow = "0px 0px 5px var(--neon-color2)";
        deleteBtn.style.color = "var(--neon-color2)";
        deleteBtn.style.textShadow = "0px 0px 5px var(--neon-color2)";
        tasks[i].check = false;
      }
      storeLocal();
    });
    if (tasks[i].check) {
      checkBtn.style.color = "var(--neon-color1)";
      checkBtn.style.textShadow = "0px 0px 5px var(--neon-color1)";
      tasksDiv.style.boxShadow = "0px 0px 5px var(--neon-color1)";
      tasksDiv.style.border = "2px solid var(--neon-color1)";
      tasksText.style.color = "var(--neon-color1)";
      tasksText.style.textShadow = "0px 0px 5px var(--neon-color1)";
      deleteBtn.style.color = "var(--neon-color1)";
      deleteBtn.style.textShadow = "0px 0px 5px var(--neon-color1)";
    } else {
      checkBtn.style.color = "var(--neon-color2)";
      checkBtn.style.textShadow = "0px 0px 5px var(--neon-color2)";
      tasksDiv.style.boxShadow = "0px 0px 5px var(--neon-color2)";
      tasksDiv.style.border = "2px solid var(--neon-color2)";
      tasksText.style.color = "var(--neon-color2)";
      tasksText.style.textShadow = "0px 0px 5px var(--neon-color2)";
      deleteBtn.style.color = "var(--neon-color2)";
      deleteBtn.style.textShadow = "0px 0px 5px var(--neon-color2)";
      
    }

    deleteBtn.addEventListener("click", () => {
      taskContainer.removeChild(tasksDiv);
      tasks.splice(tasksDiv, 1);
      storeLocal();
    });
  }
  storeLocal();
}

addTodayBtn.addEventListener("click", () => {
  makeTasks();
  displayTasks();
  todayInput.value = "";
  storeLocal();
});

// fix when refresh the tasks dont change to ones deleted
function storeLocal() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getLocalStorage() {
  if (!localStorage.getItem("tasks")) {
    displayTasks();
  } else {
    let items = localStorage.getItem("tasks");
    items = JSON.parse(items);
    tasks = items;
    displayTasks();
  }
}
getLocalStorage();
