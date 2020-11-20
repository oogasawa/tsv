

import yargs from "yargs";
import { get_columns } from "./lib/get_columns";
import { freq } from "./lib/freq";


main();


function main() {

    const argv = yargs
        .command("column [range]", "Get specified columns.")
        .command("freq [column]", "Calculate frequencies.")
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

}


// -----

