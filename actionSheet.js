var grid00 = document.querySelector('#grid00')
var grid01 = document.querySelector('#grid01')
var grid02 = document.querySelector('#grid02')

var grid10 = document.querySelector('#grid10')
var grid11 = document.querySelector('#grid11')
var grid12 = document.querySelector('#grid12')

var grid20 = document.querySelector('#grid20')
var grid21 = document.querySelector('#grid21')
var grid22 = document.querySelector('#grid22')

function alterText(content){
    if (content == ""){
        return "X"
    } else if (content == "X"){
        return "O"
    } else {
        return ""
    }
}

grid00.addEventListener("click",function () {
    grid00.textContent = alterText(grid00.textContent)
})
grid01.addEventListener("click",function () {
    grid01.textContent = alterText(grid01.textContent)
})
grid02.addEventListener("click",function () {
    grid02.textContent = alterText(grid02.textContent)
})

grid10.addEventListener("click",function () {
    grid10.textContent = alterText(grid10.textContent)
})
grid11.addEventListener("click",function () {
    grid11.textContent = alterText(grid11.textContent)
})
grid12.addEventListener("click",function () {
    grid12.textContent = alterText(grid12.textContent)
})

grid20.addEventListener("click",function () {
    grid20.textContent = alterText(grid20.textContent)
})
grid21.addEventListener("click",function () {
    grid21.textContent = alterText(grid21.textContent)
})
grid22.addEventListener("click",function () {
    grid22.textContent = alterText(grid22.textContent)
})


