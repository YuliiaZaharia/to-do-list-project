const inputArea = document.querySelector('inputArea');
const btn = document.querySelector('btn');
const toDoList = document.querySelector('toDoList');

btn.addEventListener('click', function() {
const item = document.createElement('li');
item.innerText = inputArea.value;
toDoList.appendChild(item);
})
