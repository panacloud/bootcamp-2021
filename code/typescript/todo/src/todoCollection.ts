import { Task } from "./todoItem";

type ItemCounts = {
    total:number,
    incomplete:number
}
export class TaskCollection {
    // don't want following variable accessible dirrectly outside the class
    private nextId: number = 0;
    protected itemMap = new Map<number, Task>();

    constructor(public userName: string, public tasks: Task[] = []) {

    }

    public addTodo(task: string): number {
        let item: Task = new Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task(this.nextId, task));    
        return this.nextId;
    }

    getTodoById(id: number) : Task {
        return this.itemMap.get(id);
        }

    getTodoItems(includeComplete: boolean): Task[] {
        if (includeComplete == false) {
            return [...this.itemMap.values()].filter(item => includeComplete || !item.done);
        }
        return [...this.itemMap.values()];
        }

    public taskDone(taskId: number, complete: boolean = false) {
        this.getTodoById(taskId).done = true;
        // let item: Task = this.tasks.find((iteme) => iteme.taskId == taskId);
        // item.done = true;

    }
    public printAll(): void {
        
        this.itemMap.forEach((item: Task) => item.printTask() );

    }
    public removeComplete() {
                this.itemMap.forEach(item => {
                    if (item.done) {
                        this.itemMap.delete(item.taskId);
                    }
                })
            }
    getItemCount(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }
    }
}