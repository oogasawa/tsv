
import { sprintf } from "sprintf-js";

import * as log4js from "log4js";
const logger = log4js.getLogger();


// unique();

export function unique() {

    const reader = require('readline').createInterface({
        input: process.stdin,
        //output: process.stdout
    });

    const result = new Set<string>()

    reader.on('line', (line: Buffer) => {
        result.add(line.toString());
    });

    process.stdin.on('end', () => {

        result.forEach((elem) => {
            console.log(elem);
        });

    });

}
