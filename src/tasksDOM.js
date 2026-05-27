import { Task } from './task';

// Temp storage for tasks
taskList = [];

const addTask = (title, description, dueDate) => {
    task = new Task(title, description, dueDate);
    taskList.push(task);
}

const displayTask = () => {
    taskList.forEach((element) => {
        console.log(element);
    });
}

export { addTask, displayTask };