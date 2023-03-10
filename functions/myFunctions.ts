
// The addTwo function is accepting a declared input, and declaring a specific return type. If the return type doesn't match
// the actual return, it'll throw an error.

function addTwo (num: number): number {
    return num + 2
}

// Similarly, this function takes a value, which is declared as a string. It doesn't have a return value though.

function getUpper (val: string) {
    return val.toUpperCase()
}

// This function takes three different inputs, which are of different types.

function signUpUser (name: string, email: string, isPaid: boolean) {}

// This function is different to the others - firstly, it's an arrow function. Secondly, it has a default value for isPaid, 
// which means that when invoking the function, you don't have to explicitly input a value for isPaid.

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("jon")
signUpUser(1, 2, 3)
loginUser("h", "h@h.com")

// getValue returns two different types, a boolean and a string, depending on the result of a conditional.

function getValue (myVal: number) {
    if (myVal > 5) {
        return true 
    }

    return "200 ok"
}

// getHello is an example of an arrow function with a return type declared.

const getHello = (s: string): string => {}

const heroes = ["thor", "superman", "ironman"]

heroes.map(hero => {
    return `hero is ${hero}`
})

// For functions which don't return anything, you can use the void return type.

function consoleError (errorMessage: string): void {
    console.log(errorMessage)
}

// However, for functions which throw an error - the documentation states that you should use never.

function handleError (errorMessage: string): never {
    throw new Error(errorMessage)
}

