var totalAmount = localStorage.getItem("totalAmount") || 0;
document.querySelector("#totalAmount").textContent = "₹" + totalAmount + ".00";

var finalPrice = localStorage.getItem("finalPriceCount") || 0;
document.querySelector("#discountedPrice").textContent = "₹" + finalPrice + ".00";

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault()
    window.location.href = "payment.html"
})