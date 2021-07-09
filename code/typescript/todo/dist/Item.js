"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(taskId, task, done = false) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
        // no code required
        // tsc compiler will generate the rquired code (assigning vaules)
    }
    printTask() {
        console.log(`id = ${this.taskId}, \tTask: ${this.task}, \tCompleted:${this.done}`);
    }
}
exports.Item = Item;
