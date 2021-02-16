let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")
let width = window.innerWidth
canvas.width = width
let height = window.innerHeight
canvas.height = height

let centerY = height / 2
let centerX = width / 2
//how far to move the object in each direction
let offset = height * .4
//how fast to move the object, the angle incremenet
let speed = 0.1
let angle = 0

render()

function render() {
    //sin gives me values between -1 to 1
    //when we multiple by offset we get values between -offset to offset
    //we add to the center to start there
    let y = centerY + Math.sin(angle) * offset
    context.clearRect(0,0,width, height)
    context.beginPath()
    // context.arc(x, y, radius, startAngle, endAngle, anticlockwise?)
    context.arc(centerX, y, 50, 0, Math.PI * 2, false)
    context.fill()

    angle += speed

    requestAnimationFrame(render)
}