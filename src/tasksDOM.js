import { Task } from './task.js';

// Temp storage for tasks
const taskList = [];
const addTask = (title, description, dueDate, priority) => {
    let task = new Task(title, description, dueDate, priority);
    taskList.push(task);
}

const displayTasks = (divDisplay) => {
    divDisplay.innerHTML = "";
    if (divDisplay.classList.contains('singleTask')) {
        divDisplay.classList.remove('singleTask');
    }

    taskList.forEach((task) => {
        const taskCard = document.createElement('div');
        const taskTitle = document.createElement('h2');
        const taskDueDate = document.createElement('p');
        const taskPriority = document.createElement('p');

        taskCard.classList.add('taskCard');
        taskCard.setAttribute('id', task.taskID);

        taskTitle.classList.add('taskTitle');
        taskDueDate.classList.add('taskDueDate');
        taskPriority.classList.add('taskPriority');

        taskTitle.textContent = `${task.title}`;
        taskDueDate.textContent = `Due: ${task.dueDate}`;
        taskPriority.textContent = `Priority: ${task.priority}`;

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);

        divDisplay.appendChild(taskCard);
    });
}

const displayTask = (divDisplay, taskID) => {
    divDisplay.innerHTML = "";
    divDisplay.classList.add('singleTask');

    const targetTask = taskList.find((task) => {
        return (task.taskID === taskID);
    });

    const taskTitle = document.createElement('h1');
    const taskDescription = document.createElement('p');
    const taskDueDate = document.createElement('p');

    taskTitle.classList.add('taskTitle');
    taskDescription.classList.add('taskDescription');
    taskDueDate.classList.add('taskDueDate');

    taskTitle.textContent = `${targetTask.title}`;
    taskDescription.textContent = `${targetTask.description}`;
    taskDueDate.textContent = `${targetTask.dueDate}`;

    divDisplay.appendChild(taskTitle);
    divDisplay.appendChild(taskDescription);
    divDisplay.appendChild(taskDueDate);
}

export { addTask, displayTasks, displayTask };