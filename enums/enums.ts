
// Enums allow you to strictly declare a structure of a given object, and associate specific values with a given property.

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
}

// Once an enum is declared, you can then access it using dot-notation. 

const jnSeat = SeatChoice.AISLE

// This console log would generate 'aisle'

console.log(jnSeat)

// What makes them useful is that you can't reassign the values separately. They're statically defined inside of the enum
// itself, making them useful for recurring values that you want to later access around your app.

SeatChoice.AISLE = 123

// Finally, with this example, if you don't declare a value for a property, then it will mark the first value as 0, the
// second as 1 and so on.

enum SeatNumber {
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE
}