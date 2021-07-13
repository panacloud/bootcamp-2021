#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var greet_1 = require("../lib/greet");
console.log(greet_1.greet());
console.log(process.argv);
// get arguments after first two elements in process.argv
var args = process.argv.splice(2);
console.log(args);
