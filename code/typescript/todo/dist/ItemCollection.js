"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const Item_1 = require("./Item");
class ItemCollection {
    constructor(items = []) {
        this.items = items;
        // don't want following variable accessible dirrectly outside the class
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new Item_1.Item(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
    }
    taskDone(taskId) {
        let item = this.items.find((item) => item.taskId == taskId);
        item.done = true;
    }
    printAll() {
        this.items.forEach((item) => item.printTask());
    }
}
exports.ItemCollection = ItemCollection;
