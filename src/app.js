let todoItems = [];


function newTask(input) {
	const task = {
		input,
		checked: false,
		id: Date.now(),
	};

	todoItems.push(task);
	renderTask(task);
	console.log(todoItems);
}

function renderTask(task) {
	const	list = document.querySelector('.todo-list');
	let		isChecked = task.checked ? 'done' : '';
	var		node = document.createElement('li');

	node.setAttribute('class', 'todo-item ${isChecked}');
	node.setAttribute('data-key', task.id);

	// <input id="${task.id}" type="checkbox"/>
	node.innerHTML = `
	<label for="${task.id}" class="tick js-tick"></label>
	<button class="delete-todo js-delete-todo">
	<svg><use href="#delete-icon"></use></svg>
	</button>
	`;

	list.append(node);
}

const form = document.querySelector(".todo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var input = document.querySelector(".todo-input").value;

  newTask(input);
});
