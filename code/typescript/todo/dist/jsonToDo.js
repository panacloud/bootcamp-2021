"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToDo = void 0;
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class jsonToDo extends todoCollection_1.TaskCollection {
    constructor(userName, tasks = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Tasks.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.taskid, new todoItem_1.Task(item.taskid, item.task, item.done)));
        }
        else {
            this.database.set("tasks", tasks).write();
            tasks.forEach(item => this.itemMap.set(item.taskId, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    taskDone(taskid, done) {
        super.taskDone(taskid, done);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.jsonToDo = jsonToDo;
