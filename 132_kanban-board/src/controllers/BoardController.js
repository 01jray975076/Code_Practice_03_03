import { TaskModel } from "../models/TaskModel.js"
import { ColumnView } from "../views/ColumnView.js"
export class BoardController {
    constructor() {
        this.model = new TaskModel();
        this.columns = {
            todo: document.getElementById("todoList"),
            doing: document.getElementById("doingList"),
            done: document.getElementById("doneList")
        };
    }
    init() {
        this.renderBoard();
        this.setupAddButtons();
        this.setupDragEvents();
    }
    renderBoard() {
        Object.keys(this.columns).forEach((status) => {
            const tasks = this.model.getTasksByStatus(status);
            ColumnView.renderTasks(this.columns[status], tasks);
        });
    }
    setupAddButtons() {
        document.querySelectorAll(".add-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const title = prompt("Task name:");
                if (title) {
                    this.model.addTask(title, btn.dataset.status);
                    this.renderBoard();
                }
            });
        });
    }
    setupDragEvents() {
        document.addEventListener("dragstart", (e) => {
            if (e.target.classList.contains("task")) {
                e.dataTransfer.setData("id", e.target.dataset.id);
            }
        });
        document.querySelectorAll(".task-list").forEach((list) => {
            list.addEventListener("dragover", (e) => e.preventDefault());
            list.addEventListener("drop", (e) => {
                const id = Number(e.dataTransfer.getData("id"));
                const newStatus = list.parentElement.dataset.status;
                this.model.updateTask(id, newStatus);
                this.renderBoard();
            });
        });
    }
}