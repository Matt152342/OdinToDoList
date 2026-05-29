import "./styles.css";
import { addTask, displayTasks, displayTask } from "./tasksDOM.js";

const tasksDisplay = document.querySelector('.tasksDisplay');

tasksDisplay.addEventListener('click', () => {
    const taskCard = document.querySelectorAll('.taskCard');
    taskCard.forEach((event) => {
        const targetID = event.id;

        displayTask(tasksDisplay, targetID);
    });
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