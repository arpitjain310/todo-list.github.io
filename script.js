let totalCount = 0;

// Get references of DOM elements
const newItemInput = document.getElementById('new-item-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const totalCountSpan = document.getElementById('total-count');

//Add button functionality
addButton.addEventListener('click', addItem);

function addItem(event) {
event.preventDefault();

const newItemText = newItemInput.value;

if (!newItemText) return;

// Create a new list item and append
const newItem = document.createElement('li');
newItem.innerHTML = `
    <input type="checkbox">
    <span>${newItemText}</span>
    <button class="delete">Delete</button>
`;
todoList.appendChild(newItem);

newItemInput.value = '';

//Update count
totalCount++;
totalCountSpan.textContent = totalCount;


//Delete functionality
const deleteButton = newItem.querySelector('.delete');
deleteButton.addEventListener('click', deleteItem);

const checkbox = newItem.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', toggleCompleted);
}

function deleteItem(event) {
const listItem = event.target.closest('li');
listItem.remove();

totalCount--;
totalCountSpan.textContent = totalCount;
}

function toggleCompleted(event) {
const listItem = event.target.closest('li');
listItem.classList.toggle('completed');
}