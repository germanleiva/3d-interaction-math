let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    particles = [],
    particleCount = 1,
    acceleration = new Vector(0.1,0.1)

for (let index = 0; index < particleCount; index++) {
    particles.push(new Particle(100, height, 10, -Math.PI / 2))
}

update()

function update() {
    context.clearRect(0, 0, width, height)

    for (const p of particles) {
        p.accelerate(acceleration)
        p.update()
        context.beginPath()
        context.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2)
        context.fill()
    }

    requestAnimationFrame(update)
}