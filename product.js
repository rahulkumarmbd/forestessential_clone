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

var productDetailsPrevBtn = document.querySelector(
  ".product-details-prev-btn"
);
var productDetailsNextBtn = document.querySelector(
  ".product-details-next-btn"
);
var productDetailsSlidingCount = 0;
localStorage.setItem(
  "productDetailsSlidingCount",
  productDetailsSlidingCount
);
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