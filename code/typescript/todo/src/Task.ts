export class Task {

    public constructor(public taskId: number, public task: string, public done: boolean = false) {
        // no code required
        // tsc compiler will generate the rquired code (assigning vaules)
    }
    

    public printTask():void {
        console.log(`id = ${this.taskId}, \tTask: ${this.task}, \tCompleted:${this.done}`)
    }

}