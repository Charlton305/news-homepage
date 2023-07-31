const menuButton = document.querySelector("#menuButton")
const closeButton = document.querySelector("#closeButton")
const navDiv = document.querySelector("#navDiv")

// change nav div classes on open menu button or close menu button click

menuButton.addEventListener("click", () => {
    navDiv.classList.add("nav-div-open")
})

closeButton.addEventListener("click", () => {
    navDiv.classList.remove("nav-div-open")
})
