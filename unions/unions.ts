
// A union basically allows you to assign multiple types to a given element. In this case, score can either be a number or
// string type.

let score: number | string = 33 

score = 44
score = "55"
score = false

type UnionUser = {
    name: string,
    id: number 
}

type Admin = {
    username: string,
    id: number
}

// You can also use type aliases as unions. 

let jon: UnionUser | Admin = { name: "Jon", id: 12345 }
jon = { username: "Jon", id: 12345 }

// Similarly, it's possible to pass in unions to functions, and even return unions too. An important note here is that you'll
// often need to conditionally check whether an input is a given type, if doing any specific actions on it.

const getDbId = ( id: number | string ) => {

    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("3")

// The syntax for arrays as unions is a little unusual - you need to wrap the types inside of parentheses, and then append 
// empty square brackets at the end.

const data: (number | string)[] = [1, "2", 3]

// Finally, you can also assign specific values as unions to really strictly control your variables and inputs.

let seatAllotment: "aisle" | "middle" | "window"

interface Circle {
    kind: "circle",
    radius: number 
}

interface Square {
    kind: "square",
    side: number 
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

// In TypeScript, the documentation recommends that for interfaces, you define a property called 'kind', which explicitly
// calls out what the interface is called. This allows you to easily type check, as you can just check the input.kind is
// equal to a specific value.

const getTrueShape = (s: Shape) => {
    if (s.kind === "circle") {
        return Math.PI * s.radius ** 2
    } else if (s.kind === 'square') {
        return s.side * s.side
    } else {
        return s.length * s.width
    }
}

// TypeScript also recommends you introduce a default case when type checking which is of type never. This warns you if
// all of the types associated with a type or interface haven't been checked.

const getArea = (s: Shape) => {
    switch (s.kind) {
        case "circle":
            return Math.PI * s.radius ** 2

        case "square":
            return s.side * s.side

        case "rectangle":
                return s.length * s.width

        default:
            const _defaultForShape: never = s 
            return _defaultForShape
    }
}