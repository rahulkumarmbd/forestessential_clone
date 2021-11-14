var totalAmount = localStorage.getItem("totalAmount") || 0;
document.querySelector("#totalAmount").textContent = "₹" + totalAmount + ".00";

var finalPrice = localStorage.getItem("finalPriceCount") || 0;
document.querySelector("#discountedPrice").textContent = "₹" + finalPrice + ".00";