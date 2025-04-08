let input = document.querySelector("input").value;
let submit = document.querySelector("button");
let newTask = document.querySelectorAll("newTask");
let id = 0;

class Task {
	constructor(id, name, description, check) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.check = check;
	}
}

submit.addEventListener("click", () => {
	if (input !== "" || input !== null || input !== undefined) {
		newTask = new Task(id++, `${input.name}, ${input.description}`, false);
	}
	alert("Invalid input");
});

newTask.addEventListener("click", () => {
	console.log(newTask.id);
});
