const inputArea = document.querySelector('.inputArea');
const btn = document.querySelector('.btn');
const toDoList = document.querySelector('.toDoList');

btn.addEventListener('click', function() {
const item = document.createElement('li');
item.innerText = inputArea.value;
item.classList.add('toDoStyle');
toDoList.appendChild(item);
inputArea.value = '';

item.addEventListener('click', function() {
item.classList.add('toDoDone');
})

})
