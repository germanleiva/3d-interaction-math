let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    particles = [],
    particleCount = 100,
    gravity = new Vector(0,0.1)

for (let index = 0; index < particleCount; index++) {
    particles.push(new Particle(width / 2, height / 3, Math.random() * 5 + 2, Math.random() * Math.PI * 2))
}

update()

function update() {
    context.clearRect(0, 0, width, height)

    for (const p of particles) {
        p.accelerate(gravity)
        p.update()
        context.beginPath()
        context.arc(p.position.x, p.position.y, 4, 0, Math.PI * 2)
        context.fill()
    }

    requestAnimationFrame(update)
}