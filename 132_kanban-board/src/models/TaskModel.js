export class TaskModel {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || [];
    }
    save() {
        localStorage.setItem("kanbanTasks", JSON.stringify(this.tasks));
    }
    addTask(title, status) {
        const newTask = {
            id: Date.now(),
            title,
            status
        };
        this.tasks.push(newTask);
        this.save();
        return newTask;
    }
    updateTask(id, newStatus) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.status = newStatus;
            this.save();
        }
    }
    getTasksByStatus(status) {
        return this.tasks.filter((t) => t.status === status);
    }
}