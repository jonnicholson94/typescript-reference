
// In this example, I've created a type alias which has two new properties: a readonly property, and an optional property.
// A readonly property indicates that a value on a type alias cannot be mutated.
// An optional property indicates a value which doesn't have to be provided when declaring a type alias.

type ReadOnlyUser = {
    readonly _id: string 
    name: string 
    email: string 
    isActive: boolean
    creditCardDetails?: number
}

type CardNumber = {
    cardNumber: string
}

type CardDate = {
    cardDate: string
} 

// The below example brings together the previous two type aliases, and essentially extends the two previous type aliases.

type CardDetails = CardNumber & CardDate & {
    cvv: number
}

let myUser: ReadOnlyUser = {
    _id: "12345",
    name: "Jon",
    email: "jon@email.com",
    isActive: true 
}

// Here, because in the initial type alias declaration, the _id property is marked a readonly, that means any variables 
// which are of the type ReadOnlyUser can't have the _id reassigned to a new value. TypeScript throws an error.

myUser._id = "1234"