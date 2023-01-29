let todoItems = [];

function newTodoItem(input) {
	const todoListItem = {
		input,
		checked: false,
		id: Date.now()
	};

	todoItems.push(todoListItem);
	console.log(todoItems);
};

const form = document.querySelector('.todo-form');

form.addEventListener('submit', event => {
	event.preventDefault();

	var input = document.querySelector('.todo-input').value;

	newTodoItem(input);
})
