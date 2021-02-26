let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    p = new Particle(100, 100, 3, Math.PI / 6)

update()

function update() {
    context.clearRect(0, 0, width, height)

    p.update()
    context.beginPath()
    context.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2)
    context.fill()

    requestAnimationFrame(update)
}