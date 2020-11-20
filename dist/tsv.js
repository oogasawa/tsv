"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const get_columns_1 = require("./lib/get_columns");
const freq_1 = require("./lib/freq");
main();
function main() {
    const argv = yargs_1.default
        .command("column [range]", "Get specified columns.")
        .command("freq [column]", "Calculate frequencies.")
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
}
// -----
