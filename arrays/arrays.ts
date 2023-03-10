
type SuperUser = {
    name: string,
    isActive: boolean
}

// The below example is a variable with a type of an array of strings.

const superHeroes: string[] = []

// You can also declare an array type using Array<Type> instead. The first example is just a shorthand of this version.

const heroPower: Array<number> = []

// It's possible to create an array type of a type alias you create.

const allUsers: SuperUser[] = []

// And finally, you can also depict an array of an array of numbers like so. This is interchangeable with other data types.

const numberArray: number[][] = []

