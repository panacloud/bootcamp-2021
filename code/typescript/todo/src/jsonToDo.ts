import { Task } from "./todoItem";
import { TaskCollection } from "./todoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    task: { taskid: number; task: string; done: boolean; } []
};

export class jsonToDo extends TaskCollection {
    private database: lowdb.LowdbSync<schemaType>;

    constructor(public userName: string, tasks: Task[]= []) {
        super(userName, []);
        this.database = lowdb(new FileSync("Tasks.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.taskid, new Task(item.taskid, item.task, item.done)));
        } else {
            this.database.set("tasks", tasks).write();
            tasks.forEach(item => this.itemMap.set(item.taskId, item));
        }
    }

    addTodo(task:string): number {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }

    taskDone(taskid: number, done: boolean): void {
        super.taskDone(taskid, done);
        this.storeTasks();
    }

    removeComplete(): void {
        super.removeComplete();
        this.storeTasks();
    }

    private storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}