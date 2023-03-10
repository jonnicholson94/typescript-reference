
// In TypeScript, you'll usually want to utilise a form of narrowing, or type guarding. This means you check to see if an
// input is of a certain value, and if so, perform a certain action.

const detectType = (val: number | string) => {

    if (typeof val === "string") {
        return val.toLowerCase()
    }

    if (typeof val === "number") {
        return val + 3
    }
}

const provideId = (id: string | null) => {
    if (!id) {
        console.log("Please provide ID");
        return 
    }

    return id.toLowerCase()
} 

// You can also use the 'in' keyword to check to see if a certain property exists in an interface. 

interface NarrowingUser {
    name: string,
    email: string 
}

interface NarrowingAdmin {
    name: string,
    email: string, 
    isAdmin: boolean
}

const checkAdmin = (account: NarrowingUser | NarrowingAdmin) => {
    if ("isAdmin" in account) {
        return "Is an admin"
    }

    return "Not an admin"
}

// Similarly, you can also use 'instanceof' to check the type of an input. This can only be used for types that are declared
// using the new keyword, like a class for example.

const logValue = (x: Date | string) => {

    if ( x instanceof Date ) {
        console.log(x.toUTCString())
    }  else {
        console.log(x.toUpperCase())
    }
}

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

// Finally, you can check to see if a type is of a given type by using the 'as' keyword. This is then complimented by
// using the 'is' keyword in the return type, indicating to TS that the return type will generate a certain type.

const isFish = (pet: Fish | Bird): pet is Fish => {

    return (pet as Fish).swim !== undefined

}

const getFood = (pet: Fish | Bird) => {
    if (isFish(pet)) {
        return "fish food"
    } else {
        return "bird food"
    }
}