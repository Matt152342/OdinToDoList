import { Task } from './task.js';
import { format } from "date-fns";

// Temp storage for tasks
let taskList = [];
const recentTasks = [];

// Locally storing and getting the list of tasks in taskList
const storedTasks = localStorage.getItem('userTaskList');
if (storedTasks) {
    const receivedTasks = JSON.parse(storedTasks);

    taskList = receivedTasks.map((task) => {
        const newTask = new Task(task.title, task.description, task.dueDate, task.priority);
        newTask.taskID = task.taskID;
        return newTask;
    });
}

const saveTaskList = () => {
    localStorage.setItem('userTaskList', JSON.stringify(taskList));
}

const addTask = (title, description, dueDate, priority) => {
    let task = new Task(title, description, format(new Date(dueDate), "do MMM yyyy"), priority);
    taskList.push(task);
    recentTasks.push(task);

    saveTaskList();
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
        taskDueDate.textContent = `Due ${task.dueDate}`;
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

    const taskDetails = document.createElement('div');
    const buttons = document.createElement('div');

    const taskTitle = document.createElement('h1');
    const taskDescription = document.createElement('p');
    const taskDueDate = document.createElement('p');
    const deleteTask = document.createElement('button');
    const addListItem = document.createElement('button');

    taskDetails.classList.add('taskDetails');
    taskDetails.setAttribute('id', targetTask.taskID);
    buttons.classList.add('buttons');

    taskTitle.classList.add('taskTitle');
    taskDueDate.classList.add('taskDueDate');
    taskDescription.classList.add('taskDescription');
    deleteTask.classList.add('deleteBtn');
    addListItem.classList.add('addListItemBtn');

    taskTitle.textContent = `${targetTask.title}`;
    taskDueDate.textContent = `Due ${targetTask.dueDate}`;
    taskDescription.textContent = `${targetTask.description}`;
    deleteTask.textContent = 'Delete Task';
    addListItem.textContent = 'Add Checklist Item';

    taskDetails.appendChild(taskTitle);
    taskDetails.appendChild(taskDueDate);
    taskDetails.appendChild(taskDescription);

    buttons.appendChild(deleteTask);
    buttons.appendChild(addListItem);

    divDisplay.appendChild(taskDetails);
    divDisplay.appendChild(buttons);
}

const deleteTask = (divDisplay, divRecent, taskID) => {
    // Delete task
    const targetTask = taskList.find((task) => {
        return (task.taskID === taskID);
    });
    const targetRecent = recentTasks.find((task) => {
        return (task.taskID === taskID);
    })

    const indexTask = taskList.indexOf(targetTask);
    taskList.splice(indexTask, 1);
    const indexRecent = recentTasks.indexOf(targetRecent);
    recentTasks.splice(indexRecent, 1);

    saveTaskList();

    // Display dashboard
    displayTasks(divDisplay);
    showRecentTasks(divRecent);
}

const showRecentTasks = (listDisplay) => {
    listDisplay.innerHTML = "";

    recentTasks.forEach((task) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('recentTask');
        taskItem.textContent = `${task.title}`;

        listDisplay.appendChild(taskItem);
    });
}

export { addTask, displayTasks, displayTask, deleteTask, showRecentTasks };