const addForm = document.querySelector('.add');
const todolist = document.querySelector('.todos');
const searchForm = document.querySelector('.search');
const searchField = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo} created at ${new Date().toLocaleString()}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>
        `;

    todolist.innerHTML += html;



}
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim().toLowerCase();

    if (todo.length) {
        generateTemplate(todo);
    }
    addForm.reset();


})
/* event listener for deleting todos using event delegation */

todolist.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        console.log(e.target);
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) => {
    Array.from(todolist.children)
        .filter(item => !item.textContent.includes(term))
        .forEach(item => item.classList.add('filtered'))

    Array.from(todolist.children)
        .filter(item => item.textContent.includes(term))
        .forEach(item => item.classList.remove('filtered'))

}


/* search functionality on keyup events */

searchField.addEventListener('keyup', () => {
    const term = searchField.value.trim().toLowerCase();
    console.log(term);
    filterTodos(term);
})

searchForm.addEventListener('submit', e => {
    e.preventDefault();
}) 