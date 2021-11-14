var indicator1 = document.querySelector(".indicator1");
var indicator2 = document.querySelector(".indicator2");
var indicator3 = document.querySelector(".indicator3");
var indicators = document.querySelectorAll(
  ".product-details-indicators > span"
);
var productDetailsSlider = document.querySelector(".product-details-img-div");
indicator1.addEventListener("click", function () {
  productDetailsSlider.style.transform = "translateX(-0px)";
  indicators.forEach((dot) => {
    dot.classList.remove("active");
  });
  indicator1.classList.add("active");
});
indicator2.addEventListener("click", function () {
  productDetailsSlider.style.transform = "translateX(-100%)";
  indicators.forEach((dot) => {
    dot.classList.remove("active");
  });
  indicator2.classList.add("active");
});
indicator3.addEventListener("click", function () {
  productDetailsSlider.style.transform = "translateX(-200%)";
  indicators.forEach((dot) => {
    dot.classList.remove("active");
  });
  indicator3.classList.add("active");
});

var productDetailsPrevBtn = document.querySelector(".product-details-prev-btn");
var productDetailsNextBtn = document.querySelector(".product-details-next-btn");
var productDetailsSlidingCount = 0;
localStorage.setItem("productDetailsSlidingCount", productDetailsSlidingCount);
productDetailsPrevBtn.addEventListener("click", function () {
  productDetailsSlidingCount = localStorage.getItem(
    "productDetailsSlidingCount"
  );
  productDetailsSlidingCount--;
  translationOfSlides(productDetailsSlidingCount);
});

productDetailsNextBtn.addEventListener("click", function () {
  productDetailsSlidingCount = localStorage.getItem(
    "productDetailsSlidingCount"
  );
  productDetailsSlidingCount++;
  translationOfSlides(productDetailsSlidingCount);
});
function translationOfSlides(productDetailsSlidingCount) {
  if (productDetailsSlidingCount > 2) {
    productDetailsSlidingCount = 0;
    productDetailsSlidingCount2 = 0;
  }
  console.log(productDetailsSlidingCount);
  if (productDetailsSlidingCount < 0) {
    productDetailsSlidingCount = 2;
  }

  if (productDetailsSlidingCount == 0) {
    productDetailsSlider.style.transform = "translateX(-0px)";
    indicators.forEach((dot) => {
      dot.classList.remove("active");
    });
    indicator1.classList.add("active");
  }

  if (productDetailsSlidingCount == 1) {
    productDetailsSlider.style.transform = "translateX(-100%)";
    indicators.forEach((dot) => {
      dot.classList.remove("active");
    });
    indicator2.classList.add("active");
  }

  if (productDetailsSlidingCount == 2) {
    productDetailsSlider.style.transform = "translateX(-200%)";
    indicators.forEach((dot) => {
      dot.classList.remove("active");
    });
    indicator3.classList.add("active");
  }

  localStorage.setItem(
    "productDetailsSlidingCount",
    productDetailsSlidingCount
  );
}

var products = document.getElementsByClassName("product-item");
var productsImg = document.getElementsByClassName("product-img-div");
function changeToBlackHeart(event) {
  event.target.style.fontSize = "18px";
  event.target.innerHTML = "&#10084;";
}

function changeToWhiteHeart(event) {
  event.target.style.fontSize = "24px";
  event.target.innerHTML = "&#9825;";
}

for (var i = 0; i < products.length; i++) {
  var heartDiv = document.createElement("div");
  var heartPara = document.createElement("p");
  heartPara.innerHTML = "&#9825;";
  heartPara.addEventListener("mouseover", changeToBlackHeart);
  heartPara.addEventListener("mouseleave", changeToWhiteHeart);
  heartDiv.style.height = "30px";
  heartDiv.append(heartPara);
  heartDiv.setAttribute("class", "product-item-heart");
  products[i].insertBefore(heartDiv, productsImg[i]);
}


// Js for updating the Data of Product Page
var productData = JSON.parse(localStorage.getItem("productData"));
console.log(productData.price);

var productDetailsImgDiv = document.querySelectorAll(".product-details-img-div > img");
for(var i=0; i<3; i++){
  productDetailsImgDiv[i].setAttribute("src",productData.gallery[i]);
}

var productDetailsName = document.querySelectorAll(".product-details-name");
for(var i=0; i<2; i++){
  productDetailsName[i].textContent = productData.name;
}

var productDetailsSize = document.querySelector(".product-details-size>p");
productDetailsSize.textContent = "SIZE : " + productData.size;

var productDetailsPrizeDiv = document.querySelector(".product-details-prize-div > p");
productDetailsPrizeDiv.textContent = "₹"+ productData.price +".00";

var productDetailsInfoDescription = document.querySelector(".product-details-info-description");
productDetailsInfoDescription.textContent = productData.description;

var benefitsList = document.querySelectorAll(".benefits-list > li");
for(var i=0; i<benefitsList.length && i< productData.benefits.length; i++){
  benefitsList[i].textContent = productData.benefits[i];
}

var productReviews = document.querySelectorAll(".product-review");
var productReviewRating = document.querySelectorAll(".product-review > div > .product-review-rating");
var productReviewerName = document.querySelectorAll(".product-review > div > .name");
var productReviewerReview = document.querySelectorAll(".product-review > div > .product-details-info");
var productReviewDate = document.querySelectorAll(".product-review > div > .date");
var sumOfReviewerRating = 0;
for(var i=0; i<4 && i<productData.reviews.length; i++){
  productReviews[i].style.display = "block";
  productReviewRating[i].textContent = productData.reviews[i].rating + "/5";
  sumOfReviewerRating += productData.reviews[i].rating;
  productReviewerName[i].textContent = productData.reviews[i].username;
  productReviewerReview[i].textContent = productData.reviews[i].review;
  productReviewDate[i].textContent = productData.reviews[i].date;
}
var averageRating = document.querySelector(".averageRating");
averageRating.textContent = sumOfReviewerRating/productData.reviews.length + "/5";

var plusBtn = document.querySelector(".num-of-items > .plus");
var minusBtn = document.querySelector(".num-of-items > .minus");
var displayItemsNum = document.querySelector(".num-of-items > input");
plusBtn.addEventListener("click",function(){
  displayItemsNum.value = Number(displayItemsNum.value) + 1;
})
minusBtn.addEventListener("click",function(){
  displayItemsNum.value = Number(displayItemsNum.value) - 1;
  if(displayItemsNum.value < 1){
    displayItemsNum.value = 1;
    alert("Items should be greater or equals to 1")
  }
})
document.querySelector(".add-to-bag-btn-div > button").addEventListener("click",function(){
  var totalProductItemPrice = {
    productQty:displayItemsNum.value,
    totalPriceOfProduct:displayItemsNum.value*productData.price,
    productDataId:productData.id,
  }
  localStorage.setItem("totalProductItemPrice",JSON.stringify(totalProductItemPrice));
  window.location.href = "cart.html";
})