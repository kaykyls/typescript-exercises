const x:number = 1912

console.log(x)

let tuple: [string, number, boolean, number[]]
tuple = ["Irineu", 10, true, [20, 30]]

let object: {name: string, age: number} = {
    name: "Serjao",
    age: 45
}

console.log(object.name)

//union type
let id: string | number = "abc123efg456"
id = 987654

console.log(id)

//type alias
type myType = number | string
let newId: myType = "xyz"

console.log(newId)

enum Size {
    P = "pequeno",
    M = "médio",
    G = "grande"
}

const camisa = {
    name: "camisa gola v",
    size: Size.M
}

//literal types
let teste: "autenticado" | null

teste = "autenticado"
teste = null

//funcoes
function sum(a: number, b: number): number {
    return a + b
}

console.log(Number(sum(0.1, 0.2).toFixed(1)) === 0.3)

//argumento opcional
function hello(firstName: string, lastName?: string): void {
    lastName ? console.log(`Hello ${firstName} ${lastName}`) : console.log(`Hello ${firstName}`)
}

hello("João")
hello("Napoleão", "Bonaparte")

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }))

//generics
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArrayItems(a1)
showArrayItems(a2)

//classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
}

const u1 = new User("João", "Admin", true)

//decorators
function baseParamters() {
    //givei
}

class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const p2 = new Person("João")