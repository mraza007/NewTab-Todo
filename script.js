let todos = [];

function saveTodos() {
    browser.storage.local.set({ todos });
    updateTitle();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = createTodoElement(todo, index);
        todoList.appendChild(li);
    });

    updateTitle();
}

function createTodoElement(todo, index) {
    const li = document.createElement('li');
    li.className = `Todo ${todo.completed ? 'Todo--checked' : ''}`;

    const checkDiv = document.createElement('div');
    checkDiv.className = 'Todo__Check';
    const checkI = document.createElement('i');
    checkDiv.appendChild(checkI);
    checkDiv.addEventListener('click', () => handleToggleTodo(index));

    const taskSpan = document.createElement('span');
    taskSpan.className = 'Todo__Task';
    taskSpan.textContent = todo.text;
    taskSpan.contentEditable = true;
    taskSpan.addEventListener('blur', () => handleEditTodo(index, taskSpan.textContent));
    taskSpan.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            taskSpan.blur();
        }
    });

    const editButton = document.createElement('button');
    editButton.className = 'Todo__Edit';
    editButton.textContent = 'edit';
    editButton.addEventListener('click', () => taskSpan.focus());

    const deleteButton = document.createElement('button');
    deleteButton.className = 'Todo__Delete';
    deleteButton.textContent = '×';
    deleteButton.addEventListener('click', () => handleDeleteTodo(index));

    li.appendChild(checkDiv);
    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

function handleAddTodo() {
    const text = document.getElementById('new-todo').value.trim();
    if (text) {
        todos.push({ text, completed: false });
        saveTodos();
        renderTodos();
        document.getElementById('new-todo').value = '';
    }
}

function handleToggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function handleDeleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function handleEditTodo(index, newText) {
    if (newText.trim() !== '') {
        todos[index].text = newText.trim();
        saveTodos();
        renderTodos();
    }
}

function updateTitle() {
    const unfinishedCount = todos.filter(todo => !todo.completed).length;
    document.title = unfinishedCount > 0 ? `(${unfinishedCount}) Task${unfinishedCount !== 1 ? 's' : ''} Remaining` : 'Todo New Tab';
}

function updateDateTime() {
    const now = new Date();
    const dateElement = document.querySelector('.DateTime__Date');
    const timeElement = document.querySelector('.DateTime__Time');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
    timeElement.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Load todos from storage
browser.storage.local.get('todos').then((result) => {
    todos = result.todos || [];
    renderTodos();
});

// Add new todo
document.getElementById('new-todo').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddTodo();
});

// Update date and time
setInterval(updateDateTime, 1000);
updateDateTime();

// Initial render
renderTodos();