class Vector {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    get angle() {
        return Math.atan2(this.y,this.x)
    }

    set angle(newAngle) {
        let magnitude = this.length
        this.x = magnitude * Math.cos(newAngle)
        this.y = magnitude * Math.sin(newAngle)
    }

    get length() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
    }

    set length(newLength) {
        let slope = this.angle
        this.x = newLength * Math.cos(slope)
        this.y = newLength * Math.sin(slope)
    }
    plus(thatVector) {
        return new Vector(this.x + thatVector.x,this.y + thatVector.y)
    }

    minus(thatVector) {
        return new Vector(this.x - thatVector.x,this.y - thatVector.y)
    }

    times(scalar) {
        return new Vector(this.x * scalar,this.y * scalar)
    }

    addTo(thatVector) {
        this.x += thatVector.x
        this.y += thatVector.y
    }

    subtractFrom(thatVector) {
        this.x -= thatVector.x
        this.y -= thatVector.y
    }

    multiplyBy(scalar) {
        this.x *= scalar
        this.y *= scalar
    }
}
