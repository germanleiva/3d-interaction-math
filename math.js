let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")
let width = window.innerWidth
canvas.width = width
let height = window.innerHeight
canvas.height = height

for (let index = 0; index < 100; index++) {
    context.beginPath()
    context.moveTo(Math.random() * width, Math.random() * height)
    context.lineTo(Math.random() * width, Math.random() * height)
    context.stroke()
}

//Make horizontal lines (10px distance between each other) by copying lines 8 to 13 and modifiying the code

//Make vertical lines (10px distance between each other) by copying lines 8 to 13 and modifiying the code

//Do you have a grid? Remember to comment lines 8 to 13

