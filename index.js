var addBoxBtn = document.getElementById("Add Box");
var changeBackground = document.getElementById("Change backgrond");
var container = document.getElementById("container")

addBoxBtn.addEventListener("click", AddBox)


function AddBox(){
    var div = document.createElement("div")
    var h4 = document.createElement("h4")
    h4.innerText = "Hello"
    div.className = "newBox"
    h4.className = "text"
    div.appendChild(h4)
    container.appendChild(div)
}