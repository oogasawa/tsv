
import { sprintf } from "sprintf-js";


export function freq(column: number) {

    if (column === undefined || column === null) {
        column = 0;
    }

    const reader = require('readline').createInterface({
        input: process.stdin,
        //output: process.stdout
    });

    const result = new Map<string, number>()

    reader.on('line', (line) => {
        const cols = line.split("\t");
        const data = cols[column];

        if (!result.has(data)) {
            result.set(data, 1);
        }
        else {
            const count: number = result.get(data);
            result.set(data, count + 1);
        }
    });

    process.stdin.on('end', () => {
        const keyIter: IterableIterator<string> = result.keys();
        let iterObj: IteratorResult<string> = null;
        while (true) {
            iterObj = keyIter.next();
            if (iterObj.done) {
                break;
            }
            else {
                console.log(sprintf("%d\t%s", result.get(iterObj.value), iterObj.value));
            }
        }
    });


}
