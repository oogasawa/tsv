"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const get_columns_1 = require("./lib/get_columns");
const freq_1 = require("./lib/freq");
const unique_1 = require("./lib/unique");
const filter_1 = require("./lib/filter");
main();
function main() {
    const argv = yargs_1.default
        .command("column [range]", "Get specified columns.")
        .command("freq [column]", "Calculate frequencies.")
        .command("unique", "Unique rows.")
        .command("filter", "Filter rows", (obj) => {
        obj.option('col', {
            alias: 'c',
            describe: 'column number (0...)',
            type: "number",
            default: 0
        }).option('pattern', {
            alias: 'p',
            describe: "regular expression pattern",
            default: ".+"
        }).option('invert_match', {
            alias: 'v',
            describe: "pattern for invert match",
            default: ""
        });
    })
        .demandCommand()
        .help()
        .argv;
    // -----
    if (argv._[0] === "column") {
        get_columns_1.get_columns(argv.range);
    }
    else if (argv._[0] === "freq") {
        freq_1.freq(argv.column);
    }
    else if (argv._[0] === "unique") {
        unique_1.unique();
    }
    else if (argv._[0] === "filter") {
        filter_1.filter(argv.col, argv.pattern, argv.invert_match);
    }
}
// -----
