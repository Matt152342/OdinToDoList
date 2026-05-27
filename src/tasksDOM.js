import { Task } from './task.js';

// Temp storage for tasks
const taskList = [];

const addTask = (title, description, dueDate, priority) => {
    let task = new Task(title, description, dueDate, priority);
    taskList.push(task);
}

const displayTask = (divDisplay) => {
    divDisplay.innerHTML = "";

    taskList.forEach((task) => {
        const taskCard = document.createElement('div');
        const taskTitle = document.createElement('h3');
        //const taskDescription = document.createElement('p');
        const taskDueDate = document.createElement('p');
        const taskPriority = document.createElement('p');

        taskCard.classList.add('taskCard');
        taskTitle.classList.add('taskTitle');
        //taskDescription.classList.add('taskDescription');
        taskDueDate.classList.add('taskDueDate');
        taskPriority.classList.add('taskPriority');

        taskTitle.textContent = `${task.title}`;
        //taskDescription.textContent = `${task.description}`;
        taskDueDate.textContent = `Due: ${task.dueDate}`;
        taskPriority.textContent = `Priority: ${task.priority}`;

        taskCard.appendChild(taskTitle);
        //taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);

        divDisplay.appendChild(taskCard);
    });
}

export { addTask, displayTask };