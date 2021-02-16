let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")
let width = window.innerWidth
canvas.width = width
let height = window.innerHeight
canvas.height = height

// for (let index = 0; index < 100; index++) {
//     context.beginPath()
//     context.moveTo(Math.random() * width, Math.random() * height)
//     context.lineTo(Math.random() * width, Math.random() * height)
//     context.stroke()
// }

//Make horizontal lines (10px distance between each other) by copying lines 8 to 13 and modifiying the code
for (let w = 0; w < width; w+=10) {
    context.beginPath()
    context.moveTo(w, 0)
    context.lineTo(w, height)
    context.stroke()
}

//Make vertical lines (10px distance between each other) by copying lines 8 to 13 and modifiying the code
for (let h = 0; h < height; h+=10) {
    context.beginPath()
    context.moveTo(0, h)
    context.lineTo(width, h)
    // context.lineTo(h, height)
    // context.lineTo(width, height)
    context.stroke()
}

//Do you have a grid? Remember to comment lines 8 to 13