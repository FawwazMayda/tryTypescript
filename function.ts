type DescribeableFunc = {
    desc: string;
    (arg: number): boolean;
}

let callable = (fn: DescribeableFunc) => {
    console.log(`${fn.desc} returning ${fn(12)}`)
}

function CheckOdd(num: number) {
    return num % 2 === 0
}

CheckOdd.desc = "nama saya"

callable(CheckOdd)

