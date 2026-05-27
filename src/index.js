import "./styles.css";
import { addTask, displayTasks, displayTask } from "./tasksDOM.js";

const taskDisplay = document.querySelector('.taskDisplay');

taskDisplay.addEventListener('click', () => {
    const taskCard = document.querySelectorAll('.taskCard');
    taskCard.forEach((event) => {
        const targetID = event.id;

        displayTask(taskDisplay, targetID);
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
    displayTasks(taskDisplay);

    dialogBox.close();
    taskForm.reset();
});