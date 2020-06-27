import { Mongoose } from "mongoose";
import * as _ from "lodash";
import * as test from "vscode";
const randomInt = require("random-int");
console.log(test);
console.log(randomInt(10, 100));
const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5];
const uniqNumbers = _.uniq(numbers);
console.log(uniqNumbers);
