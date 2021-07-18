import { Task } from "./todoItem";
import { TaskCollection } from "./todoCollection";
import * as inquirer from 'inquirer';
import { jsonToDo } from "./jsonToDo";


let icollection: TaskCollection = new jsonToDo("Adams");
// let icollection2: TaskCollection = new jsonToDo("Noman");
let showComplete = true;

function displayToDoItems(): void {
    console.log(`${icollection.userName}'s Todo List` + `(${icollection.getItemCount().incomplete} items to do)`);
    icollection.getTodoItems(showComplete).forEach(item => item.printTask());
}

enum Commands {
        Add = "Add New Task",
        Mark = "Mark Complete",
        Toggle = "Show/Hide Completed",
        Purge = "Remove completed tasks",
        Quit = "Quit"
}

function addToDo(): void {
    console.clear();
    inquirer.prompt({type: "input", name: "add", message: "Enter Task: "})
    .then(answer => { if (answer["add"] !== "" ) {
        icollection.addTodo(answer["add"]);
    }
    promptUser();

    })
}

function promptComplete(): void {
        console.clear();
        inquirer.prompt({ type: "checkbox", name: "complete",
            message: "Mark Tasks Complete",
            choices: icollection.getTodoItems(showComplete).map(item =>
                ({name: item.task, value: item.taskId, checked: item.done}))
        }).then(answers => {
            let completedTasks = answers["complete"] as number[];
            icollection.getTodoItems(true).forEach(item =>
                icollection.taskDone(item.taskId,
                    completedTasks.find(id => id === item.taskId) != undefined));
            promptUser();
        })
    }


icollection.addTodo("first task");
icollection.addTodo("eat mangos");
icollection.addTodo("Buy Mango");
icollection.addTodo("Buy Meat");
icollection.addTodo("Get Haircut");

icollection.taskDone(2);

icollection.printAll();

// icollection2.addTodo("second task");
// icollection2.addTodo("eat apple");

icollection.taskDone(1);

// icollection2.taskDone(1);
// console.log(`--------------------------`)
// console.log(`${icollection.userName}'s Todo list ` + `(${ icollection.getItemCount().incomplete } items to do)`);

// icollection2.removeComplete();
// icollection2.getTodoItems(true).forEach(item => item.printTask());


function promptUser(): void {
    console.clear();
    displayToDoItems();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        //badProperty: true
    }).then(answer => {
        switch (answer["command"]) {
            case Commands.Toggle:
                showComplete = !showComplete;
                promptUser();
                break;
            case Commands.Add:
                addToDo();
                break;
            case Commands.Mark:
                if (icollection.getItemCount().incomplete > 0) {
                    promptComplete();
                } else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                icollection.removeComplete();
                promptUser();
                break;

        }
    })
}
promptUser();



