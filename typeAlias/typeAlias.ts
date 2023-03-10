
// This is an example of a typeAlias - essentially, a custom type. 

type User = {
    name: string,
    email: string, 
    isActive: boolean
}

// An unusual quirk in TypeScript is that you can declare types that are of primitive types. For example, the below type
// is of type 'string'. So going forwards, I could use myString as a string type.

type myString = string

let exampleString: myString

// Types are particularly useful for consolidating large parameters which are passed into a function. Type aliases can be used
// both as an input parameter, and as a return type.

const createUser = (user: User): User => {
    return { 
        name: user.name, 
        email: user.email, 
        isActive: user.isActive }
}

