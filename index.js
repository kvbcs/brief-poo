let taskName = document.querySelector("#task-name");
let taskDesc = document.querySelector("#task-desc");
let submit = document.querySelector("button");
let ul = document.querySelector("ul");
// let newTask = document.querySelectorAll("newTask");
let id = 0;
let newTask;

class Task {
	constructor(id, name, description, isChecked) {
		this.id = id++;
		this.name = name;
		this.description = description;
		this.isChecked = isChecked;
	}
}

submit.addEventListener("click", (event) => {
	event.preventDefault(); //éviter que le submit du form recharge la page
	try {
		if (
			taskName.value === "" ||
			taskName.value === null ||
			taskName.value === undefined
		) {
			alert("Invalid input");
		} else {
			newTask = new Task(
				id++,
				`${taskName.value}`,
				`${taskDesc.value}`,
				false
			);
			ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
            ${newTask.name}, ${newTask.description}, ${newTask.isChecked}
            </li>`;
		}
	} catch (error) {
		alert("error server");
	}
});

newTask.addEventListener("click", () => {
	console.log(newTask.id);
});
