class Base {
    k = 4;
    constructor() {
        console.log(`we start with ${this.k}`)
    }

    protected callMe() {
        console.log("a base callme") 
    }
}

class Extended extends Base {
     x: number;
     y: number;

    constructor(x: number, y: number) {
        super()
        this.x = 1 + x
        this.y = 1 + y
        console.log(`we start with ${this.x}, ${this.y}`)
    }

    justCallMe() {
        this.callMe()
    }
}

interface HealthCheck {
    ping(): number
}

let newObj = new Extended(10,20)
console.log(newObj)
newObj.justCallMe()

class HealthCheckController implements HealthCheck {
    ping(): number {
        console.log("/ping")
        return 200
    }
}

class UsersController implements HealthCheck {
    ping(): number {
        console.log("/ping")
        return 200
    }
}