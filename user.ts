
interface User {
    name: string
    age: number
    location: string
}

const user: User = {
    name: 'Nabila',
    age: 24,
    location: "Jakarta"
};

function greeting(name: string, where: string) {
    console.log(`Hello ${name} from ${where}`)
}

greeting(user.name, user.location)


let friends = ["Amel", "Nabila", "Dina", "Rizki"]

type Identifier = string | number;

let friends2: Identifier[] = [...friends, 12]
console.log(friends2.length)

//friends2.push(true as any as number)
friends2.push(Number(true))
console.log(friends2.length)

function greetWithID(id: Identifier) {
    if (typeof id === "string") {
        console.log(id.toUpperCase())
    } else if (typeof id === "number") {
        console.log(Math.round(id))
    }
}

friends2.forEach((i) => {
    greetWithID(i)
})
