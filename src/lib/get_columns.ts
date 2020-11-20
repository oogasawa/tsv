


export function get_columns(range: string) {

    const columns: number[] = parse_range(range);

    const reader = require('readline').createInterface({
        input: process.stdin,
        //output: process.stdout
    });

    reader.on('line', (line) => {
        const cols = line.split("\t");
        const data: string[] = [];

        columns.forEach((n) => {
            data.push(cols[n]);
        });

        console.log(data.join("\t"));
    });

    process.stdin.on('end', () => {
        ; // do nothing
    });

}


function parse_range(range: string): number[] {
    const result: number[] = [];

    if (range === undefined || range === null) {
        result.push(0);
    }
    else {
        const nums: string[] = range.split(",");
        nums.forEach((n) => {
            result.push(parseInt(n, 10));
        });
    }

    return result;
}
