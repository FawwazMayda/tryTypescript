
const getFirstElement = <T>(arrs: T[]): T | undefined => {
    if (arrs.length > 0) {
        return arrs[0]
    }
    return undefined
}

let arrsString = getFirstElement(["saya","juga"])
let arrsNumber = getFirstElement([100,200,300])
let arrsBool = getFirstElement([false, true])

console.log(arrsString, arrsNumber, arrsBool)

const mapFunc = <Input, Output>(inputs: Input[], individualMapFunc: (element: Input) => Output): Output[] => {
    let returned: Output[] = []
    for (const item of inputs) {
        returned.push(individualMapFunc(item))
    }
    return returned
}

console.log(mapFunc([1,2,3,4,5], (item: number) => { return Math.pow(item, 2)}))

function longest<T extends {length: number}> (a: T, b:T): T {
    return a.length > b.length ? a: b;
}


console.log(longest("abc","abcd"))
console.log(longest([1,2,3,4],[100,200]))