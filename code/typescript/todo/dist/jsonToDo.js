"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToDo = void 0;
const Task_1 = require("./Task");
const TaskCollection_1 = require("./TaskCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class jsonToDo extends TaskCollection_1.TaskCollection {
    constructor(userName, tasks = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Tasks.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.taskid, new Task_1.Task(item.taskid, item.task, item.done)));
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
