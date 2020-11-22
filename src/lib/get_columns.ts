


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
    else if (typeof range === "number") {
        result.push(range);
    }
    else if (typeof range === "string") {
        const nums: string[] = range.split(",");
        nums.forEach((n: string) => {
            const m = n.match(/([0-9]+)-([0-9]+)/);
            if (m != null) {
                const r = seq(parseInt(m[1], 10), parseInt(m[2], 10));
                r.forEach((r0) => {
                    result.push(r0);
                });
            }
            else {
                result.push(parseInt(n, 10));
            }
        });
    }

    return result;
}


function seq(start: number, end: number): number[] {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}
