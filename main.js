var div = document.createElement('div')
div.className = 'demo'
document.body.appendChild(div)
var dragging = false

var beforex
var beforey
div.onmousedown = function (e) {
    dragging = true
    beforeX = e.clientX
    beforeY = e.clientY
}
document.onmouseup = function () {
    dragging = false
}
document.onmousemove = function (e) {
    console.log(e.clientX, e.clientY)
    if (dragging === true) {
        var deltaX = e.clientX - beforeX
        var deltaY = e.clientY - beforeY
        beforeX = e.clientX
        beforeY = e.clientY
        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0

        var resultX = left + deltaX
        var resultY = top + deltaY
        if (resultY < 0)
            resultY = 0;


        if (resultX < 0)
            resultX = 0;
        div.style.top = resultY + 'px'
        div.style.left = resultX + 'px'
    }
}
