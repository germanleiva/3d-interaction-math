class Particle {
    constructor(x, y, speed, direction) {
        this.position = new Vector(x,y)
        this.velocity = new Vector(0,0)
        this.velocity.length = speed
        this.velocity.angle = direction
    }

    update() {
        this.position.addTo(this.velocity)
    }
}