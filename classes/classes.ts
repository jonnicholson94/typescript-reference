
// Classes in TypeScript are defined in much the same way as standard JavaScript. However, any parameters passed into the
// constructor must be defined above it - otherwise an error will be thrown.

class UserClass {

    email: string 
    name: string
    private city: string // To mark an input as private, you put the private keyword before it.
    #country: string // This is how you'd usually declare private in JS. It also works in TS.
    public username: string // By default, all inputs are public, but you can also specifically declare it if you like.

    constructor(email: string, name: string) {
        this.email = email 
        this.name = name
    }
}

// There's also a shorter way of declaring classes in TypeScript. You can utilise public / private in the constructor, 
// removing the need to declare this.input inside of the curly brackets. You're more likely to see this in production
// code.

class AltUserClass {

    // An important example here - if you want to mark a property as 'private', but accessible within sub classes, then you
    // can use the 'protected' keyword instead of private.

    protected _courseCount = 1

    private city: string
    private country: string
    public username: string

    constructor(
        public email: string,
        public name: string,
    ) {}

    // You can also mark functions in classes as public or private.

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple: ${this.email}`
    } 

    get courseCount(): number {
        return this._courseCount
    }

    // A common interview question is that in TypeScript setters, you cannot annotate a return type, even if it's void.

    set courseCount(courseNumber) {
        this._courseCount = courseNumber
    }
}

// To extend a class, and add additional properties to it, you can use the 'extends' keyword.

class SubClassUser extends AltUserClass {
    isFamily: boolean = true 

    // Because I declared the courseCount as being protected, I can access and modify the courseCount property here.

    changeCourseCount () {
        this._courseCount = 4
    }
}

// Then, to initialise a class, you just define it like you usually would in JavaScript.

const jonClass = new UserClass("jon@jon.com", "Jon")

const jonAltClass = new AltUserClass("jon@jon.con", "jon")

// Interfaces interact well with classes in TypeScript. In the below example, I'm defining two interfaces. These can then
// be marked as 'implements' inside of the class. 

interface TakePhoto {
    cameraMode: string 
    filter: string 
    burst: number 
}

interface Story {
    createStory(): void
}

// I then receive all of the type definitions of the interfaces listed above, and have to follow their protocol. 

class Instagram implements TakePhoto, Story {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    createStory(): void {
        console.log("Hello world");
        
    }
}