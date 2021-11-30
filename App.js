const cart = document.querySelector(".cart")
const menu = document.querySelector(".menu")
const popUp = document.querySelector(".popUp")
const linkResponsive = document.querySelector(".link-responsive")

menu.addEventListener("click", menuFunction)
// cart.addEventListener("click", cartFunction)

// function cartFunction(e) {
//     e.preventDefault()
//     popUp.innerHTML = `Added to cart`
//     setTimeout(() => {
//         popUp.innerHTML = ``
//     }, 3000);
// }

function menuFunction() {
    // linkResponsive.style.display = "none";
    if (menu.checked == true) {
        linkResponsive.style.display = "block";
    }else if (menu.checked == false) {
        linkResponsive.style.display = "block";
        
    }
    
}