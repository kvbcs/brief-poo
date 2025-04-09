let taskName = document.querySelector("#task-name");
let submit = document.querySelector("#submit");
let taskList = document.querySelector("#task-list");

let id = 0;
let newTask;
let taskItems = [];
console.log(taskName);

//createelement appendchild pour ajouter
// class TodoList {
// 	constructor(id, title, taskItems) {
// 		this.id = id++;
// 		this.title = title;
// 		this.taskItems = taskItems;
// 	}
// }
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
			console.log(taskItems);

			//Création d'éléments dynamiques
			textNode = document.createTextNode(newTask.title);
			newDiv = document.createElement("div");
			newCheckBox = document.createElement("input");
			newCheckBox.type = "checkbox";
			newCheckBox.id = newTask.id;
			newCheckBox.value = newTask.completed;

			//Style des éléments
			newDiv.style.backgroundColor = "black";
			newDiv.style.width = "50%";
			newDiv.style.color = "white";
			newDiv.style.borderRadius = "25px";
			newDiv.style.padding = "10px";

			//Ajout des éléments
			newDiv.appendChild(newCheckBox);
			newDiv.appendChild(textNode);
			taskList.appendChild(newDiv);
		}
	} catch (error) {
		console.log("error", taskName.value);
		alert("error server");
	}
});

newDiv.addEventListener("click", () => {
	console.log("allo");
	
})