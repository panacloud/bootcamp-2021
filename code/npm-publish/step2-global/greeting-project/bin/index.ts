#!/usr/bin/env node

import {greet} from "../lib/greet";

console.log(greet());

console.log(process.argv)

// get arguments after first two elements in process.argv
var args: string[] = process.argv.splice(2);

console.log(args);




