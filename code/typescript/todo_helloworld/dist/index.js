"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoCollection_1 = require("./todoCollection");
let list = new todoCollection_1.TodoCollection();
list.addTodo("Buy Mango");
list.addTodo("Buy Meat");
list.addTodo("Get Haircut");
list.taskDone(2);
list.printAll();
