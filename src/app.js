let todoItems = [];


function newTask(input) {
	const task = {
		input,
		checked: false,
		id: Date.now(),
	};

	todoItems.push(task);
	renderTask(task);
};

function toggleDone(key) {
	const	list = document.querySelector('.todo-list');
	const 	index = todoItems.findIndex(item => item.id === Number(key));

	todoItems[index].checked = !todoItems[index].checked;
	const msg = document.createElement("div");
	msg.innerText = "wtf.. you finished ";
	list.append(msg);

	const item = document.querySelector(`[data-key='${todoItems[index].id}']
	`);
	item.remove();
}

function renderTask(task) {
	const	list = document.querySelector('.todo-list');
	let		isChecked = task.checked ? 'done' : '';
	var		node = document.createElement('li');

	node.setAttribute('class', 'todo-item ${isChecked}');
	node.setAttribute('data-key', task.id);

	node.innerHTML = `
		<input id="${task.id}" type="checkbox"/>
		<label for="${task.id}" class="task-tag"></label>
		<span>${task.input}</span>
		<button class="delete-todo">x
		</button>
	`;

	list.append(node);
};

const form = document.querySelector(".todo-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  var input = document.querySelector(".todo-input").value;

  newTask(input);
});

const list = document.querySelector('.todo-list');
list.addEventListener('click', event => {
	if (!event.target.classList.contains('task-tag')) {
		const itemKey = event.target.parentElement.dataset.key;
		toggleDone(itemKey);
	}
	else if (!event.target.classList.contains('delete-todo')) {
		const itemKey = event.target.parentElement.dataset.key;
		toggleDone(itemKey);
	}
});
