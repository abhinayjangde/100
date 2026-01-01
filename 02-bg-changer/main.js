const redColor = document.getElementById("redColor")
const greenColor = document.getElementById("greenColor")
const yellowColor = document.getElementById("yellowColor")
const pinkColor = document.getElementById("pinkColor")
const blackColor = document.getElementById("blackColor")
const currentColor = document.getElementById("currentColor")


redColor.addEventListener("click", () => {
    document.body.style.background = "red"
    currentColor.innerText = `current: red`
})
greenColor.addEventListener("click", () => {
    document.body.style.background = "green"
    currentColor.innerText = `current: green`
})
yellowColor.addEventListener("click", () => {
    document.body.style.background = "yellow"
    currentColor.innerText = `current: yellow`
})
pinkColor.addEventListener("click", () => {
    document.body.style.background = "pink"
    currentColor.innerText = `current: pink`
})
blackColor.addEventListener("click", () => {
    document.body.style.background = "black"
    currentColor.innerText = `current: black`
})