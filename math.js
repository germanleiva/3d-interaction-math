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
let xAngle = 0
let yAngle = 0
let xSpeed = 0.1
let ySpeed = 0.131
let x
let y

render()

function render() {
    context.clearRect(0,0,width, height)
    x = centerX + xRadius * Math.cos(xAngle)
    y = centerY + yRadius * Math.sin(yAngle)

    context.beginPath()
    context.arc(x, y, 10, 0, Math.PI * 2, false)
    context.fill()

    xAngle += xSpeed
    yAngle += ySpeed

    requestAnimationFrame(render)
}