let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    position = new Vector(100, 100),
    velocity = new Vector(0,0)

    velocity.length = 3
    velocity.angle = Math.PI / 6 // 30 degrees

update()

function update() {
    context.clearRect(0, 0, width, height)

    position.addTo(velocity)
    context.beginPath()
    context.arc(position.x, position.y, 10, 0, Math.PI * 2)
    context.fill()

    requestAnimationFrame(update)
}