class Task {
  static currentId = parseInt(localStorage.getItem("taskId") || "1");

  constructor(name, description = "") {
    this.id = Task.currentId++;
    this.name = name;
    this.description = description;
    this.done = false;
    localStorage.setItem("taskId", Task.currentId);
  }
}

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const content = document.createElement("div");
    content.innerHTML = `<strong>${task.name}</strong><br><small>${task.description}</small>`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-sm btn-danger";
    removeBtn.innerText = "Supprimer";
    removeBtn.onclick = () => {
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index > -1) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      }
    };

    li.appendChild(content);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("task-name").value.trim();
  const desc = document.getElementById("task-desc").value.trim();
  if (!name) return;
  const newTask = new Task(name, desc);
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskForm.reset();
});

renderTasks();
