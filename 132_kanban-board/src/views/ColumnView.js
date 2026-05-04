import { TaskView } from "./TaskView.js";
export class ColumnView {
    static renderTasks(container, tasks) {
        container.innerHTML = tasks.map((t) => TaskView.render(t)).join("");
    }
}