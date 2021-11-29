const menu = document.querySelector(".menu")
const popUp = document.querySelector(".popUp")
const linkResponsive = document.querySelector(".link-responsive")

menu.addEventListener("click", menuFunction)

// function cartFunction(e) {
//     e.preventDefault()
//     popUp.innerHTML = `Added to cart`
//     setTimeout(() => {
//         popUp.innerHTML = ``
//     }, 3000);
// }

function menuFunction() {
    console.log("hello");
    if (menu.checked == true) {
        linkResponsive.style.display = "block";
    }else{
        linkResponsive.style.display = "none";
    }
    
}