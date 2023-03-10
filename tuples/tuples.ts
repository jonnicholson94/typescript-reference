
// A tuple is essentially a fixed length, pre-defined array. Below is an example of how you declare one.

const user: [string, number, boolean] = ['jn', 21, false]

// A common, and practical, use case for a tuple is an RGB colour set.

const rgb: [number, number, number] = [255, 123, 112]

// You can also declare type aliases which are tuples.

type TupleUser = [number, string]

const newUser: TupleUser = [123, 'hello world']

// However, you can modify tuples by accessing the index of the element you want to alter.

newUser[1] = "bla bla bla"

// On top of that, you can also access standard array methods, such as push, splice and so on. This makes tuples slightly
// unpredictable in the real world.

newUser.push("hello again")