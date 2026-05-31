class Task {
    constructor(title, description, dueDate, priority) {
        this.taskID = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = [];
    }

    addCheckItem = (text) => {
        this.checklist.push(text);
    }
}

export { Task };