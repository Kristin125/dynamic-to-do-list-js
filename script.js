function addTask(taskText, save = true) {
    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item'); // ✅ Adds class to li

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // ✅ Uses classList.add

    // Handle remove button click
    removeBtn.onclick = () => {
        taskList.removeChild(li);

        // Also update local storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';

    // Save to localStorage if needed
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}
