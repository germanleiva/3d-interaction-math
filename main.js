let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight

update()

function update() {
    context.clearRect(0, 0, width, height)
    requestAnimationFrame(update)
}