let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
let color = "black";
let width = 30;
let displayWidth = cnv.clientWidth
let displayHeight = cnv.clientHeight
cnv.width = displayWidth
cnv.height = displayHeight

cnv.onmousedown = (e) => {
    ctx.fillStyle = color;
    ctx.fillRect(e.offsetX-width/2, event.offsetY-width/2, width, width)  
    cnv.onmousemove = (event) => {
        ctx.fillStyle = color;
        ctx.fillRect(event.offsetX-width/2, event.offsetY-width/2, width**3, width**3)
    }
}

    
    cnv.onmouseup = () => {
        cnv.onmousemove = null
    }
