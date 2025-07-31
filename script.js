// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Load tasks from Local Storage
    loadTasks();

    // Step 3: Define the function that handles adding tasks
    function addTask(taskText = taskInput.value.trim(), save = true) {
        // Step 3a: Validate the input
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Step 4: Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 5: Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Step 6: Attach an event to the remove button to delete the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            removeFromStorage(taskText);
        };

        // Step 7: Add the remove button to the li, then append li to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 8: Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Step 9: Clear the input field
        taskInput.value = '';
    }

    // Step 10: Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Step 11: Function to remove a task from Local Storage
    function removeFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Step 12: Attach event listeners
    addButton.addEventListener('click', () => {
        addTask(); // On button click
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // On pressing Enter key
        }
    });
});
