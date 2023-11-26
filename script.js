document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const taskName = document.getElementById('task-name').value.trim();
    const dueDate = document.getElementById('due-date').value.trim();
    const priority = document.getElementById('priority').value;

    if (taskName !== '') {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskName}</span>
            <span>${dueDate}</span>
            <span>${getPriorityLabel(priority)}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(li);
        clearInputFields();
        saveTasks();
    }
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = [];

    for (let i = 0; i < taskList.children.length; i++) {
        const taskItem = taskList.children[i];
        const taskName = taskItem.querySelector('span').innerText;
        const dueDate = taskItem.querySelectorAll('span')[1].innerText;
        const priority = taskItem.querySelectorAll('span')[2].innerText;
        tasks.push({ name: taskName, dueDate: dueDate, priority: priority });
    }

    // Here, you can implement the logic to save the tasks to a server or local storage.
    // For simplicity, this example doesn't include server-side logic.
}

function loadTasks() {
    // Here, you can implement the logic to load tasks from a server or local storage.
    // For simplicity, this example doesn't include server-side logic.
}

function getPriorityLabel(priority) {
    switch (priority) {
        case '1':
            return 'Low';
        case '2':
            return 'Medium';
        case '3':
            return 'High';
        default:
            return '';
    }
}

function clearInputFields() {
    document.getElementById('task-name').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = '1';
}
