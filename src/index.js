import "./styles.css";
import { addTask, displayTasks, displayTask, deleteTask } from "./tasksDOM.js";

const tasksDisplay = document.querySelector('.tasksDisplay');

// List for user to display all tasks
const homeBtn = document.querySelector('.homeBtn');
homeBtn.addEventListener('click', () => {
    displayTasks(tasksDisplay);
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

        deleteTask(tasksDisplay, taskID);
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

    dialogBox.close();
    taskForm.reset();
});