
// Generics allow you to pass in a type to a function, which is interchangeable and reusable across different types.

const score: number[] = []
const names: string[] = []

// Usually, you'd have to type out new functions for each type of input, or use pipes to define unions.

const functionOne = (val: number): number => {
    return val 
}

const functionTwo = (val: string): string => {
    return val 
}

// Alternatively though, you can also use generics to literally make the input type generic. 

function functionThree<T> (val: T): T {
    return val
}

function functionFour<Type> (val: Type): Type {
    return val
}

interface Bottle {
    type: number 
}

// This means that I can pass in my own unique type, and not one of the primitives like string, number etc and it'll
// work absolutely fine.

functionFour<Bottle>({ type: 3 })

// You can also declare arrays of generics, like so:

function getSearchProducts<T> (products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

// Arrow functions can also be used for generics, like so:

const getMoreSearchProducts = <T> (products: T[]): T  => { return products[3] }

// Finally, in SPAs, like React, people will put a comma after the generic type declaration to indicate it's not a 
// JSX tag, and make it clearer to developers that it's a generic.

const exampleReactSyntaxt = <T,> (products: T[]): T => { return products[3] }

interface Database {
    connection: string,
    username: string,
    password: string
}

// With generics, you can make them slightly more specific by extending them with an interface. This adds some type
// safety.

const anotherFunction = <T, U extends Database> (valOne: T, valTwo: U): object => { return { valOne, valTwo } }

anotherFunction (3, { connection: "hello", username: "string", password: "database"})

interface Quiz {
    name: string, 
    type: string
}

interface Course {
    name: string, 
    author: string,
    subject: string
}

// You can also use generics with classes. They also provide the extends functionality as mentioned above.

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}