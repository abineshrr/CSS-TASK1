function input(elem) {
document.getElementById("child-one").innerText += elem.innerText.toLowerCase()
}

function enter() {
    document.getElementById("child-one").innerText += '\n'
}

function backspace() {
    document.getElementById("child-one").innerText = document.getElementById("child-one").innerText.slice(0,-1)
}

