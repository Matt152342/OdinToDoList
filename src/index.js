import "./styles.css";
import { addTask, displayTask } from "./tasksDOM.js";

// Listen to dialog box for input
const dialogBox = document.getElementById('my-dialog');
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    const taskPriority = document.getElementById('taskPriority').value;

    addTask(taskTitle, taskDescription, taskDueDate, priority);
    displayTask();

    dialogBox.close();
    taskForm.reset();
});