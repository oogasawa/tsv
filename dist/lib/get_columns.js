"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_columns = void 0;
function get_columns(range) {
    const columns = parse_range(range);
    const reader = require('readline').createInterface({
        input: process.stdin,
    });
    reader.on('line', (line) => {
        const cols = line.split("\t");
        const data = [];
        columns.forEach((n) => {
            data.push(cols[n]);
        });
        console.log(data.join("\t"));
    });
    process.stdin.on('end', () => {
        ; // do nothing
    });
}
exports.get_columns = get_columns;
function parse_range(range) {
    const result = [];
    if (range === undefined || range === null) {
        result.push(0);
    }
    else {
        const nums = range.split(",");
        nums.forEach((n) => {
            result.push(parseInt(n, 10));
        });
    }
    return result;
}
