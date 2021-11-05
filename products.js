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