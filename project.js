let projectContainer = document.querySelector(".projectContainer");
let formContainer = document.querySelector(".formContainer");
let formLabels = document.querySelector(".formLabels");
let projectName = document.querySelector(".pName");
let projectDate = document.querySelector(".pDate");
let projectCheckbox = document.querySelector(".pCheck");
let addProjBtn = document.querySelector(".pAddBtn");
const newProjectBtn = document.querySelector(".newProjectBtn");
let projects = [];

function Project(name, date, urgent) {
  this.name = name;
  this.date = date;
  this.urgent = urgent;
}

function makeProject() {
  let name = projectName.value;
  let date = projectDate.value;
  let urgent = projectCheckbox.checked;

  let newProject = new Project(name, date, urgent);
  projects.push(newProject);
}

function displayProject() {
  projectContainer.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    let nameT = projects[i].name;
    let dateT = projects[i].date;
    let statusT = projects[i].urgent;

    let projDiv = document.createElement("div");

    let nameText = document.createElement("p");
    nameText.innerHTML = nameT;
    nameText.classList += "nameText";
    projDiv.appendChild(nameText);

    let dateText = document.createElement("p");
    dateText.innerHTML = dateT;
    dateText.classList += "dateText";
    projDiv.appendChild(dateText);

    projectContainer.appendChild(projDiv);

    let statusBtn = document.createElement("button");
    statusBtn.innerHTML = statusT;
    statusBtn.classList += "statusBtn";
    projDiv.appendChild(statusBtn);
    projDiv.classList += "projDiv";

    statusBtn.addEventListener("click", () => {
      if (statusBtn.textContent === "done") {
        projects[i].urgent = false;
        statusBtn.textContent = "not done";
        projDiv.style.boxShadow = "0px 0px 5px var(--neon-color2)";
        projDiv.style.border = "2px solid var(--neon-color2)";
        projDiv.style.backgroundColor = 'rgba(143, 41, 41, 0.164)'
        nameText.style.color = "var(--neon-color2)";
        nameText.style.textShadow = "0px 0px 5px var(--neon-color2)";
        dateText.style.color = "var(--neon-color2)";
        dateText.style.textShadow = "0px 0px 5px var(--neon-color2)";
        statusBtn.style.color = "var(--neon-color2)";
        statusBtn.style.textShadow = "0px 0px 5px var(--neon-color2)";
        statusBtn.style.border = "2px solid var(--neon-color2)";
        statusBtn.style.boxShadow = "0px 0px 5px var(--neon-color2)";
      } else {
        projects[i].urgent = true;
        statusBtn.textContent = "done";
        projDiv.style.boxShadow = "0px 0px 5px var(--neon-color1)";
        projDiv.style.border = "2px solid var(--neon-color1)";
        projDiv.style.backgroundColor = 'rgba(41, 73, 143, 0.164)'
        nameText.style.color = "var(--neon-color1)";
        nameText.style.textShadow = "0px 0px 5px var(--neon-color1)";
        dateText.style.color = "var(--neon-color1)";
        dateText.style.textShadow = "0px 0px 5px var(--neon-color1)";
        statusBtn.style.color = "var(--neon-color1)";
        statusBtn.style.textShadow = "0px 0px 5px var(--neon-color1)";
        statusBtn.style.border = "2px solid var(--neon-color1)";
        statusBtn.style.boxShadow = "0px 0px 5px var(--neon-color1)";       
      }
      console.log(projects[i]);
    });

    if (projects[i].urgent) {
      statusBtn.textContent = "done";
      projDiv.style.boxShadow = "0px 0px 5px var(--neon-color1)";
      projDiv.style.border = "2px solid var(--neon-color1)";
      projDiv.style.backgroundColor = 'rgba(41, 73, 143, 0.164)'
      nameText.style.color = "var(--neon-color1)";
      nameText.style.textShadow = "0px 0px 5px var(--neon-color1)";
      dateText.style.color = "var(--neon-color1)";
      dateText.style.textShadow = "0px 0px 5px var(--neon-color1)";
      statusBtn.style.color = "var(--neon-color1)";
      statusBtn.style.textShadow = "0px 0px 5px var(--neon-color1)";
      statusBtn.style.border = "2px solid var(--neon-color1)";
      statusBtn.style.boxShadow = "0px 0px 5px var(--neon-color1)";
    } else {
      statusBtn.textContent = "not done";
      projDiv.style.boxShadow = "0px 0px 5px var(--neon-color2)";
      projDiv.style.border = "2px solid var(--neon-color2)";
      projDiv.style.backgroundColor = 'rgba(143, 41, 41, 0.164)'
      nameText.style.color = "var(--neon-color2)";
      nameText.style.textShadow = "0px 0px 5px var(--neon-color2)";
      dateText.style.color = "var(--neon-color2)";
      dateText.style.textShadow = "0px 0px 5px var(--neon-color2)";
      statusBtn.style.color = "var(--neon-color2)";
      statusBtn.style.textShadow = "0px 0px 5px var(--neon-color2)";
      statusBtn.style.border = "2px solid var(--neon-color2)";
      statusBtn.style.boxShadow = "0px 0px 5px var(--neon-color2)";
    }
  }
}

addProjBtn.addEventListener("click", () => {
  makeProject();
  displayProject();
  formContainer.style.opacity = "0";
  formContainer.style.pointerEvents = "none";
});

newProjectBtn.addEventListener("click", () => {
  formContainer.style.opacity = "1";
  formContainer.style.pointerEvents = "all";
  projectCheckbox.checked = false;
  projectDate.value = "";
  projectName.value = "";
});

// fix when refresh the tasks dont change to ones deleted
// function storeLocal() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function getLocalStorage() {
//   if (!localStorage.getItem("tasks")) {
//     displayProject();
//   } else {
//     let items = localStorage.getItem("tasks");
//     items = JSON.parse(items);
//     tasks = items;
//     displayProject();
//   }
// }
// getLocalStorage();
