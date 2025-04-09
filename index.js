let taskName = document.querySelector("#task-name");
let submit = document.querySelector("#submit");
let taskList = document.querySelector("#task-list");

let id = 1;
let newTask;
let taskItems = [];

//Création de la classe
class Todo {
	constructor(id, title) {
		this.id = id++;
		this.title = title;
		this.completed = false;
	}
	removeTask(index) {
		if (index >= 0 && index < this.taskItems.length) {
			this.taskItems.splice(index, 1);
		}
	}
	toggle() {
		this.completed = !this.completed;
	}
}

//Fonction d'ajout de todo
submit.addEventListener("click", (event) => {
	event.preventDefault();
	try {
		if (
			taskName.value === "" ||
			taskName.value === null ||
			taskName.value === undefined
		) {
			alert("Please enter a title for your task");
		} else {
			//Instanciation de la classe et ajout dans le tableau
			newTask = new Todo(id++, `${taskName.value}`);
			taskItems.push(newTask);

			//Création d'éléments dynamiques
			taskText = document.createTextNode(newTask.title);
			newDiv = document.createElement("div");
			newCheckBox = document.createElement("input");
			newCheckBox.type = "checkbox";
			newCheckBox.id = newTask.id;
			newCheckBox.value = newTask.completed;
			deleteButton = document.createElement("button");
			buttonText = document.createTextNode("Delete");

			deleteButton.classList.add("deleteButton");
			newDiv.classList.add("taskDiv");

			// Fonction pour mettre à jour le style visuel selon l'état
			function updateTaskStyle(task, div) {
				if (task.completed) {
					div.style.textDecoration = "line-through";
					div.style.opacity = "0.6";
				} else {
					div.style.textDecoration = "none";
					div.style.opacity = "1";
				}
			}

			// Événement de clic sur la checkbox : toggle l'état
			newCheckBox.addEventListener("click", () => {
				newTask.toggle();
				updateTaskStyle(newTask, newDiv);
			});

			deleteButton.addEventListener("click", () => {
				// Trouver l’index de la tâche dans le tableau
				const index = taskItems.findIndex(
					(task) => task.id === newTask.id
				);

				if (index !== -1) {
					taskItems.splice(index, 1); // Supprimer la tâche du tableau
					newDiv.remove(); // Supprimer la tâche de l’interface
					console.log(`Tâche supprimée : ${newTask.title}`);
				}
			});

			//Ajout des éléments
			newDiv.appendChild(newCheckBox);
			newDiv.appendChild(taskText);
			newDiv.appendChild(deleteButton);
			deleteButton.appendChild(buttonText);
			taskList.appendChild(newDiv);
		}
	} catch (error) {
		console.log("error", taskName.value);
		alert("error server");
	}
});
