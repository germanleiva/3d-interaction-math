let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")
let width = window.innerWidth
canvas.width = width
let height = window.innerHeight
canvas.height = height

context.translate(0, height / 2)
context.scale(1,-1) 

for (let angle = 0; angle < Math.PI * 2; angle+=.01) {
    let x = angle * 200
    let y = Math.sin(angle) * 200
    console.log(`Point (x=${x},y=${y})`)
    context.fillRect(x,y,1,1) 
}