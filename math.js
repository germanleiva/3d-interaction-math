let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")
let width = window.innerWidth
canvas.width = width
let height = window.innerHeight
canvas.height = height

let arrowX = width / 2
let arrowY = height / 2
let dx, dy
let angle = 0

render()

function render() {
    context.clearRect(0,0,width,height)

    context.save() //save the untransformed context
    context.translate(arrowX,arrowY) //Translate (aka move) “the whole canvas” so the arrow is at the center 
    context.rotate(angle) //Rotate “the whole canvas” every time we want to rotate the arrow

    //Draw an arrow
    context.beginPath()
    context.moveTo(20, 0)
    context.lineTo(-20, 0)
    context.moveTo(20, 0)
    context.lineTo(10, -10)
    context.moveTo(20, 0)
    context.lineTo(10, 10)
    context.stroke()
    
    context.restore() //restore the saved untransformed context to apply the next translate & rotate from scratch

    requestAnimationFrame(render)
}

document.body.addEventListener("mousemove", function(mouseEvent) {
    let mouseX = mouseEvent.x
    let mouseY = mouseEvent.y

    dx = mouseX - arrowX
    dy = mouseY - arrowY

    angle = Math.atan2(dy,dx)
})