import "./styles.css";
import { Task } from "./task.js";
import { findTask, saveTaskList, addTask, displayTasks, displayTask, deleteTask, showRecentTasks } from "./tasksDOM.js";

const tasksDisplay = document.querySelector('.tasksDisplay');
const taskList = document.querySelector('.recents');

displayTasks(tasksDisplay);

// List for user to display all tasks
const homeBtn = document.querySelector('.homeBtn');
homeBtn.addEventListener('click', () => {
    displayTasks(tasksDisplay);
    showRecentTasks(taskList);
});

// Listen for click to display target task
tasksDisplay.addEventListener('click', (e) => {
    const taskCard = e.target.closest('.taskCard');
    if (taskCard) {
        const taskCards = document.querySelectorAll('.taskCard');
        taskCards.forEach((card) => {
            const targetID = taskCard.id;

            displayTask(tasksDisplay, targetID);
        })
    }

    if (e.target.classList.contains('deleteBtn')) {
        const taskDetails = document.querySelector('.taskDetails');
        const taskID = taskDetails.id;

        deleteTask(tasksDisplay, taskList, taskID);
    }
})

// Listen to dialog box for input
const dialogBox = document.getElementById('my-dialog');
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    const taskPriority = document.getElementById('taskPriority').value;

    addTask(taskTitle, taskDescription, taskDueDate, taskPriority);
    displayTasks(tasksDisplay);
    showRecentTasks(taskList);

    dialogBox.close();
    taskForm.reset();
});

const checkDialogbox = document.getElementById('checklist-dialog');
const checklistForm = document.getElementById('checklistForm');
checklistForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskDetails = document.querySelector('.taskDetails');
    const taskID = taskDetails.id;
    const targetTask = findTask(taskID);
    
    const checklistText = document.getElementById('checklistText').value;
    targetTask.checklist.push(checklistText);

    saveTaskList();

    displayTask(tasksDisplay, taskID);

    checkDialogbox.close();
    checklistForm.reset();
})