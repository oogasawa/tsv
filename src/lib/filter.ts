


export function filter(column: number, pattern: string, invert_match: string) {

    const reader = require('readline').createInterface({
        input: process.stdin,
        //output: process.stdout
    });

    reader.on('line', (line) => {
        const cols = line.split("\t");
        const data: string[] = [];

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



