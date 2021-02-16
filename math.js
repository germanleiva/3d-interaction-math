let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")
let width = window.innerWidth
canvas.width = width
let height = window.innerHeight
canvas.height = height

let centerX = width / 2
let centerY = height / 2
let xRadius = 200
let yRadius = 400
let angle = 0
let speed = 0.1
let x
let y

render()

function render() {
    context.clearRect(0,0,width, height)
    x = centerX + xRadius * Math.cos(angle)
    y = centerY + yRadius * Math.sin(angle)

    context.beginPath()
    context.arc(x, y, 10, 0, Math.PI * 2, false)
    context.fill()

    angle += speed

    requestAnimationFrame(render)
}