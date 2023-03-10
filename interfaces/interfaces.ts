
// An interface is very much like a type alias: the key difference seems to be that it allows you to utilise certain
// additional features - like declaring methods.

interface InterfaceUser {
    readonly dbId: number, // You can mark properties as readonly.
    email: string,
    userId: number,
    googleId?: number, // You can utilise optional properties.
    startTrial: () => string, // You can say methods have to be declared inside of interfaces. 
    getCoupon(id: number): number // This is an alternative way of declaring a method inside of an interface.
}

// You can declare additional properties on an interface separately if needed.

interface InterfaceUser {
    githubToken: string
}

// On top of that, you can extend interfaces to copy certain interfaces properties across, and add new ones to a new 
// interface - creating a unique type.

interface InterfaceAdmin extends InterfaceUser {
    role: "admin" | "ta" | "learner"
}

const interFaceFunction = () => "trial started"
const getCoupon = (couponId: 10) => couponId // The inputs don't have to match the ones declared in the interface.

const jon: InterfaceAdmin = { dbId: 1, email: "jon@email.com", userId: 123, startTrial: interFaceFunction, getCoupon: getCoupon, githubToken: "", role: "learner" }

// You can then reassign values associated with an instance of an interface later, even if it's declared as const. 

jon.dbId = 2
jon.email = "jon@jon.com"
jon.userId = 321 
jon.googleId = 12345