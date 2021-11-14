// js for header
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.querySelector("body").style.marginLeft = "350px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector("body").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

//cart localstorage
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
document.getElementById("cart-items").textContent = cartItems.length;

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

var cartItemsData = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartItemsData);
displayItemsToBuy();
// creating items for cart
function displayItemsToBuy(){
cartItemsData.map((cartItemsData,index) => {
    var cartItems = document.querySelector(".cart-items");
    var cartItem = document.createElement("div");
    cartItem.setAttribute("class", "cart-item-list");
    var cartImgDiv = document.createElement("div");
    //   cartImgDiv.style.flexBasis = "200px";
    cartImgDiv.setAttribute("class", "cart-img");
    var cartImg = document.createElement("img");
    cartImg.setAttribute(
      "src",
      "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/9/7/9728_hair_thickening_spray_bhringraj_shikakai_130ml_front.png"
    );
    var cartRemove2 = document.createElement("div");
    cartRemove2.setAttribute("class", "cart-remove2");
    var iTag = document.createElement("i");
    iTag.setAttribute("class", "fa fa-close");
    iTag.style.fontSize = "14px";
    cartRemove2.append(iTag);
    cartImgDiv.append(cartImg, cartRemove2);
    var cartItemTitle = document.createElement("div");
    cartItemTitle.setAttribute("class", "cart-item-title");
    cartItemTitle.style.flexBasis = "200px";
    var infoOfProduct = document.createElement("p");
    infoOfProduct.setAttribute("class", "calibre");
    infoOfProduct.textContent = cartItemsData.name;
    cartItemTitle.append(infoOfProduct);
    var btnsOfCart = document.createElement("div");
    btnsOfCart.setAttribute("class", "num-of-items");
    var plusBtnOfCart = document.createElement("button");
    plusBtnOfCart.textContent = "+";
    plusBtnOfCart.setAttribute("class", "plus");
    var displayProductNum = document.createElement("input");
    displayProductNum.type = "text";
    displayProductNum.value = localStorage.getItem(cartItemsData.id) || 1;
    var minusBtnOfCart = document.createElement("button");
    minusBtnOfCart.textContent = "-";
    minusBtnOfCart.setAttribute("class", "minus");
    btnsOfCart.append(minusBtnOfCart, displayProductNum, plusBtnOfCart);
    var cartPrice = document.createElement("div");
    cartPrice.textContent = "₹" + cartItemsData.price + ".00";
    cartPrice.setAttribute("class", "cart-price");
    var cartRemove = document.createElement("div");
    cartRemove.setAttribute("class", "cart-remove");
    cartRemove.append(iTag);
    cartRemove.addEventListener("click",function(){
        deleteCartItemsData(index);
    })
    cartItem.append(cartImgDiv, cartItemTitle, btnsOfCart, cartPrice, cartRemove);
    cartItems.append(cartItem);
  
    var insertingBefore = document.querySelector(".insertingBefore");
    var parentDiv = document.querySelector(".summary");
    var rowItems = document.createElement("div");
    rowItems.setAttribute("class", "row-items");
    var rowItemsInnerDiv1 = document.createElement("div");
    var rowItemsCount = document.createElement("p");
    rowItemsCount.setAttribute("class", "calibre");
    var rowItemsInnerDiv2 = document.createElement("div");
    var totalAmount = document.createElement("p");
    totalAmount.setAttribute("class", "calibre");
    var itemsCountId = localStorage.getItem(cartItemsData.id) || 1;
    rowItemsCount.textContent = itemsCountId + " " + "x items";
    var totalAmountCount =
      Number(cartItemsData.price) *
      Number(localStorage.getItem(cartItemsData.id) || 1);
    console.log(totalAmountCount);
    totalAmount.textContent = "₹" + totalAmountCount + ".00";
    rowItemsInnerDiv1.append(rowItemsCount);
    rowItemsInnerDiv2.append(totalAmount);
    rowItems.append(rowItemsCount, totalAmount);
    rowItems.classList.add("deletingClass")
    parentDiv.insertBefore(rowItems, insertingBefore);
  
    plusBtnOfCart.addEventListener("click", function () {
      displayProductNum.value = Number(displayProductNum.value) + 1;
      localStorage.setItem(cartItemsData.id, displayProductNum.value);
      updateRowItems();
      updatingPrices();
    });
    minusBtnOfCart.addEventListener("click", function () {
      displayProductNum.value = Number(displayProductNum.value) - 1;
      localStorage.setItem(cartItemsData.id, displayProductNum.value);
      updateRowItems();
      updatingPrices();
      if (displayProductNum.value < 1) {
        displayProductNum.value = 1;
        localStorage.setItem(cartItemsData.id, displayProductNum.value);
        updateRowItems();
        updatingPrices();
        alert("Items should be greater or equals to 1");
      }
    });
    function updateRowItems() {
      rowItemsCount.textContent =
        localStorage.getItem(cartItemsData.id) + " " + "x items";
      var totalAmountCount =
        Number(cartItemsData.price) *
        Number(localStorage.getItem(cartItemsData.id));
      totalAmount.textContent = "₹" + totalAmountCount + ".00";
    }
  });
}

function deleteCartItemsData(index){
    cartItemsData.splice(index, 1);
    document.querySelector("#cart-items-delete").innerHTML = "";
    localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
    var elements = document.querySelectorAll(".deletingClass");
    for(var i=0; i<elements.length; i++){
        elements[i].remove();
    }
    displayItemsToBuy();
    updatingPrices();
    if(cartItemsData.length == 0){
        document.querySelector(".cart-container").innerHTML = "";
        var h1 = document.createElement("h1");
        h1.textContent = "Your Cart is Empty!";
        document.querySelector(".cart-container").append(h1);
    }
}

updatingPrices();
function updatingPrices(){
    console.log("Yeah")
    var finalPrice = document.querySelector(".finalPrice");
    var discountPrice = document.querySelector(".discountPrice") || 0;
    var promoCode = document.querySelector("#promoCode");
    var discountPriceCount = localStorage.getItem("discountPriceCount") || 0;
    
    var promoCodeCount = localStorage.getItem("promoCodeCount") || 0;
    var sum = 0;
    for(var i=0; i<cartItemsData.length; i++){
        sum += cartItemsData[i].price*(localStorage.getItem(cartItemsData[i].id) || 1);
    }
    console.log(sum);
    localStorage.setItem("totalAmount", sum);
    discountPrice.textContent = "₹" + discountPriceCount + ".00";
    var updatedFinalPrice = sum - discountPriceCount;
    localStorage.setItem("finalPriceCount", updatedFinalPrice);
    finalPrice.textContent = "₹" + localStorage.getItem("finalPriceCount") + ".00";
    document.querySelector("#cart-button").addEventListener("click", function () {
      console.log("yes");
      if (promoCodeCount == 1) {
        window.location.href = "checkout.html";
        return null;
      }
      if (promoCode.value == "masai30" && promoCodeCount == 0) {
        promoCodeCount++;
        localStorage.setItem("promoCodeCount", promoCodeCount);
        discountPriceCount = +sum * 0.3;
        discountPrice.textContent = "₹" + discountPriceCount + ".00";
        localStorage.setItem("discountPriceCount", discountPriceCount);
        updatingPrices();
        alert(
          "Your promoCode is activated Successfully and again click on checkout btn to continue"
        );
        promoCode.value = "";
      } else if (promoCode.value == "") {
        window.location.href = "checkout.html";
      } else {
        alert("The Promo Code which you have entered is invalid");
      }
    });
}
finalPrice.textContent = "₹" + localStorage.getItem("finalPriceCount") + ".00";