// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define the function that handles adding tasks
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Step 3: Validate the input
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
        };

        // Step 7: Add the remove button to the li, then append li to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 8: Clear the input field
        taskInput.value = '';
    }

    // Step 9: Attach event listeners
    addButton.addEventListener('click', addTask); // On button click

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // On pressing Enter key
        }
    });
});
