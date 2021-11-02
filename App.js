const cart = document.querySelector(".cart")
const popUp = document.querySelector(".popUp")

cart.addEventListener("click", cartFunction)

function cartFunction(e) {
    e.preventDefault()
    popUp.innerHTML = `Added to cart`
    setTimeout(() => {
        popUp.innerHTML = ``
    }, 3000);
}