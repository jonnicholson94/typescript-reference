
const User = {
    name: "Jon",
    email: "jon@email.com",
    isActive: true
}

// This first function accepts an object as a parameter.

const createUser = ({ name: string, email: string, isActive: boolean }) => {}

// Below it, I've declared a 'newUser' variable, which adds an additional parameter of 'premium' on top of the parameters in
// createUser.

const newUser = { name: 'Jon', email: 'jon@email.com', isActive: true, premium: true }

// One TypeScript quirk is that I can pass in newUser, the object variable, and the createUser function accepts it.

createUser( newUser )

// But if I directly pass the object with the additional 'premium' parameter on, it throws an error. 

createUser ({ name: 'Jon', email: 'jon@email.com', isActive: true, premium: true })

// Finally, this is an example of a function which sets an object as a return type.

const createCourse = (): { name: string, price: number } => {
    return { name: "react", price: 399 }
}