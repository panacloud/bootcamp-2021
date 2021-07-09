import { Task } from "./Task";

export class TaskCollection {
    // don't want following variable accessible dirrectly outside the class
    private nextId: number = 1;

    constructor(public tasks: Task[] = []) {

    }

    public addTodo(task: string): void {
        let item: Task = new Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
    
    
    }

    public taskDone(taskId: number) {
        let item: Task = this.tasks.find((item) => item.taskId == taskId);
        item.done = true;

    }
    public printAll(): void {
        
        this.tasks.forEach((item: Task) => item.printTask() );

    }

}