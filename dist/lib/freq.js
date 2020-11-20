"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freq = void 0;
const sprintf_js_1 = require("sprintf-js");
function freq(column) {
    if (column === undefined || column === null) {
        column = 0;
    }
    const reader = require('readline').createInterface({
        input: process.stdin,
    });
    const result = new Map();
    reader.on('line', (line) => {
        const cols = line.split("\t");
        const data = cols[column];
        if (!result.has(data)) {
            result.set(data, 1);
        }
        else {
            const count = result.get(data);
            result.set(data, count + 1);
        }
    });
    process.stdin.on('end', () => {
        const keyIter = result.keys();
        let iterObj = null;
        while (true) {
            iterObj = keyIter.next();
            if (iterObj.done) {
                break;
            }
            else {
                console.log(sprintf_js_1.sprintf("%d\t%s", result.get(iterObj.value), iterObj.value));
            }
        }
    });
}
exports.freq = freq;
