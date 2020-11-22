

import yargs from "yargs";
import { get_columns } from "./lib/get_columns";
import { freq } from "./lib/freq";
import { unique } from "./lib/unique";
import { filter } from "./lib/filter";


main();


function main() {

    const argv = yargs
        .command("column [range]", "Get specified columns.")
        .command("freq [column]", "Calculate frequencies.")
        .command("unique", "Unique rows.")
        .command("filter", "Filter rows",
            (obj) => {
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
                })

            })
        .demandCommand()
        .help()
        .argv;


    // -----

    if (argv._[0] === "column") {
        get_columns(argv.range as string);
    }
    else if (argv._[0] === "freq") {
        freq(argv.column as number);
    }
    else if (argv._[0] === "unique") {
        unique();
    }
    else if (argv._[0] === "filter") {
        filter(argv.col as number, argv.pattern as string, argv.invert_match as string);
    }


}


// -----

