import { Task } from "./Task";

export class TaskCollection {
    // don't want following variable accessible dirrectly outside the class
    private nextId: number = 1;
    private itemMap = new Map<number, Task>();

    constructor(public tasks: Task[] = []) {

    }

    public addTodo(task: string): void {
        let item: Task = new Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task(this.nextId, task));
        // we have added itemMap
    
    
    }

    getTodoById(id: number) : Task {
        return this.itemMap.get(id);
        }

        getTodoItems(includeComplete: boolean): Task[] {
            return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.done);
            }

    public taskDone(taskId: number) {
        let item: Task = this.tasks.find((item) => item.taskId == taskId);
        item.done = true;

    }
    public printAll(): void {
        
        this.tasks.forEach((item: Task) => item.printTask() );

    }

}