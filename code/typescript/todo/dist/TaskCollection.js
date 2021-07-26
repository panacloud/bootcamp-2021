"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const Task_1 = require("./Task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        // don't want following variable accessible dirrectly outside the class
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task_1.Task(this.nextId, task));
        // we have added itemMap
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.done);
    }
    taskDone(taskId) {
        let item = this.tasks.find((item) => item.taskId == taskId);
        item.done = true;
    }
    printAll() {
        this.tasks.forEach((item) => item.printTask());
    }
}
exports.TaskCollection = TaskCollection;
