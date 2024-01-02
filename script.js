var light = document.querySelector("#bulb")
var btn = document.querySelector("button")

var bulbAction = 0
btn.addEventListener("click", function () {
    if (bulbAction == 0) {
        light.style.backgroundColor = "yellow"
        console.log("lightsON")
        btn.innerHTML = "ON"
        bulbAction = 1
    } else {
        light.style.backgroundColor = "#fff"
        console.log("lightsOff")
        btn.innerHTML = "OFF"
        bulbAction = 0
    }
})
