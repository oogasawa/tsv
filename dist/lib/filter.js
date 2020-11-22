"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
function filter(column, pattern, invert_match) {
    const reader = require('readline').createInterface({
        input: process.stdin,
    });
    reader.on('line', (line) => {
        const cols = line.split("\t");
        const data = [];
        if (invert_match !== "") {
            const r = new RegExp(invert_match);
            const m = cols[column].match(r);
            if (!m) {
                console.log(line);
            }
        }
        else {
            const r = new RegExp(pattern);
            const m = cols[column].match(r);
            if (m) {
                console.log(line);
            }
        }
    });
    process.stdin.on('end', () => {
        ; // do nothing
    });
}
exports.filter = filter;
