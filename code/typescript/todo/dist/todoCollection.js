"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const todoItem_1 = require("./todoItem");
class TaskCollection {
    constructor(userName, tasks = []) {
        this.userName = userName;
        this.tasks = tasks;
        // don't want following variable accessible dirrectly outside the class
        this.nextId = 0;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new todoItem_1.Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new todoItem_1.Task(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        if (includeComplete == false) {
            return [...this.itemMap.values()].filter(item => includeComplete || !item.done);
        }
        return [...this.itemMap.values()];
    }
    taskDone(taskId, complete = false) {
        this.getTodoById(taskId).done = true;
        // let item: Task = this.tasks.find((iteme) => iteme.taskId == taskId);
        // item.done = true;
    }
    printAll() {
        this.itemMap.forEach((item) => item.printTask());
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.done) {
                this.itemMap.delete(item.taskId);
            }
        });
    }
    getItemCount() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.TaskCollection = TaskCollection;
