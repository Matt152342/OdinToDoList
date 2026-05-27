import { Task } from './task.js';

// Temp storage for tasks
const taskList = [];

const addTask = (title, description, dueDate) => {
    let task = new Task(title, description, dueDate);
    taskList.push(task);
}

const displayTask = () => {
    taskList.forEach((element) => {
        console.log(element);
    });
}

export { addTask, displayTask };