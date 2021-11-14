var data2 = data.filter(function (item) {
  return item.tag == "BESTSELLER";
});

var data3 = [data2[0], data2[1], data2[2], data2[3]];
displayItems(data3);

function displayItems(data) {
  var categoryTitle = document.getElementsByClassName("category-title1");
  var productContainer = document.getElementById("product-container");
  var categoryBanner = document.getElementById("category-banner");
  productContainer.textContent = "";

  data.map(function (item, index) {
    //finding average of ratings
    var ratings = item.reviews;
    var ratingAverage = 0;
    ratings.map(function (elem, index) {
      ratingAverage += elem.rating;
    });
    //finding ratings average ends here
    var productHeart = document.createElement("div");
    productHeart.setAttribute("class", "product-item-heart");
    productHeart.style.height = "30px";
    var p0 = document.createElement("p");
    p0.innerHTML = "&#9825;";
    p0.style.fontSize = "26px";

    p0.addEventListener("mouseover", function (e) {
      changeToBlackHeart(e);
    });
    p0.addEventListener("mouseleave", function (e) {
      changeToWhiteHeart(e);
    });
    productHeart.append(p0);

    var productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item");

    var productImgDiv = document.createElement("div");
    productImgDiv.setAttribute("class", "product-img-div");
    var productImg = document.createElement("img");
    productImg.setAttribute("src", item.thumbnail);
    productImgDiv.append(productImg);
    productImgDiv.addEventListener("click", function () {
      localStorage.setItem("productData", "");
      localStorage.setItem("productData", JSON.stringify(item));
      window.location.href = "product.html";
    });

    var div7 = document.createElement("div");
    var p7 = document.createElement("p");
    p7.setAttribute("class", "calibre product-item-bestseller");
    p7.textContent = item.tag;
    div7.append(p7);

    var productItemWeightDiv = document.createElement("div");
    productItemWeightDiv.setAttribute("class", "product-item-weight-div");
    var div1 = document.createElement("div");
    var p1 = document.createElement("p");
    p1.setAttribute("class", "calibre product-item-gold-info");
    p1.textContent = item.name;
    div1.append(p1);
    var div2 = document.createElement("div");
    var p2 = document.createElement("p");
    p2.setAttribute("class", "calibre product-item-weight");
    p2.textContent = item.size;
    div2.append(p2);

    var div3 = document.createElement("div");
    var p3 = document.createElement("p");
    p3.setAttribute("class", "calibre");
    p3.textContent =
      ratingAverage / ratings.length + "/5 (" + ratings.length + " REVIEWS)";
    div3.append(p3);

    var div4 = document.createElement("div");
    var div41 = document.createElement("div");
    div41.setAttribute("class", "products-items-bar");
    div41.style.marginBottom = "18px";
    div4.append(div41);

    var div5 = document.createElement("div");
    var p5 = document.createElement("p");
    p5.setAttribute("class", "calibre");
    p5.textContent = "₹ " + item.price;
    div5.append(p5);

    var id1 = document.createElement("span");
    id1.style.display = "none";
    id1.setAttribute("id", "productId");
    id1.textContent = item.id;

    var div6 = document.createElement("div");
    div6.setAttribute("class", "product-item-add-to-bag");
    var p6 = document.createElement("p");
    p6.setAttribute("class", "calibre product-item-add-to-bag-text");
    p6.textContent = "ADD TO BAG";
    p6.addEventListener("click", function () {
      p6.textContent = "ADDING....";
      p6.style.color = "#bfbfbf";

      setTimeout(function () {
        // code to be executed after 1 second
        p6.textContent = "ADD TO BAG";
        p6.style.color = "#182125";
      }, 2000);
      addToBag(index);
    });
    div6.append(p6);

    productItemWeightDiv.append(div1, div2);
    productItem.append(
      productHeart,
      productImgDiv,
      div7,
      productItemWeightDiv,
      div3,
      div4,
      div5,
      div6,
      id1
    );

    productContainer.append(productItem);
  });
}

function addToBag(index) {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var out = "not found";
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id == data3[index].id) {
      out = "found";
      var count = localStorage.getItem(cartItems[i].id) || 1;
      count++;
      localStorage.setItem(cartItems[i].id, count);
      break;
    }
  }

  if (out == "not found") {
    cartItems.push(data3[index]);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  setTimeout(function () {
    // code to be executed after 1 second
    document.getElementById("cart-items").textContent = cartItems.length;
    document.getElementById("cart-items-mob").textContent = cartItems.length;
    subTotal = 0;
    checkCartLenth(cartItems);
  }, 2000);
}

// js for imageSlider
const slider = document.querySelector(".slideshow-container");
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");
const numOfSlides = slides.length;
var currentSlide = 0;

// Image slider for next button
nextSlide.addEventListener("click", function () {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide++;
  if (currentSlide > numOfSlides - 1) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
});

// Image slider for prev button
prevSlide.addEventListener("click", function () {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = numOfSlides - 1;
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
});

// Image Slider is working on dot
function dotSlider(sliderIndex) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide = sliderIndex;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Image Slider autoplay
var playSlider;

var repeater = function () {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    currentSlide++;
    if (currentSlide > numOfSlides - 1) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }, 4000);
};
repeater();

// Stop Image Slider Autoplay on mouseover
slider.addEventListener("mouseenter", function () {
  clearInterval(playSlider);
});

slider.addEventListener("mouseleave", function () {
  repeater();
});

// JS FOR PRODUCTS
function changeToBlackHeart(event) {
  event.target.style.fontSize = "18px";
  event.target.innerHTML = "&#10084;";
}

function changeToWhiteHeart(event) {
  event.target.style.fontSize = "26px";
  event.target.innerHTML = "&#9825;";
}

// JS FOR BOX-SLIDER
var pos1 = 0;
var pos2 = 1;
var pos3 = 2;
var pos4 = 3;
var productsOfBoxSlider = [
  {
    imgUrl:
      "https://images.forestessentialsindia.com/pub/media/cms_images/Wellness.jpg",
    productName: "WELLNESS",
  },
  {
    imgUrl:
      "https://images.forestessentialsindia.com/pub/media/cms_images/Facial-Care.jpg",
    productName: "FACIAL CARE",
  },
  {
    imgUrl:
      "https://images.forestessentialsindia.com/pub/media/cms_images/Body-Care.jpg",
    productName: "BODY CARE",
  },
  {
    imgUrl:
      "https://images.forestessentialsindia.com/pub/media/cms_images/Hair-Care.jpg",
    productName: "HAIR CARE",
  },
  {
    imgUrl:
      "https://images.forestessentialsindia.com/pub/media/cms_images/CategoryImage-Makeup.jpg",
    productName: "MAKE UP",
  },
  {
    imgUrl:
      "https://images.forestessentialsindia.com/pub/media/cms_images/Men-Care.jpg",
    productName: "MEN'S CARE",
  },
  {
    imgUrl:
      "https://images.forestessentialsindia.com/pub/media/cms_images/Mother-_-Child.jpg",
    productName: "MOTHER & BABY CARE",
  },
];

var productImgUrl = document.querySelectorAll(
  ".slide-box > .slider-image-box > img"
);
var sliderBoxProductName = document.querySelectorAll(
  ".slide-box > div > .slider-product-name"
);
const productsNextBtn = document.querySelector(".slider-box-next-btn");
productsNextBtn.addEventListener("click", function () {
  pos1++;
  if (pos1 == 7) {
    pos1 = 0;
  }
  productImgUrl[0].setAttribute("src", productsOfBoxSlider[pos1].imgUrl);
  sliderBoxProductName[0].textContent = productsOfBoxSlider[pos1].productName;
  pos2++;
  if (pos2 == 7) {
    pos2 = 0;
  }
  productImgUrl[1].setAttribute("src", productsOfBoxSlider[pos2].imgUrl);
  sliderBoxProductName[1].textContent = productsOfBoxSlider[pos2].productName;
  pos3++;
  if (pos3 == 7) {
    pos3 = 0;
  }
  productImgUrl[2].setAttribute("src", productsOfBoxSlider[pos3].imgUrl);
  sliderBoxProductName[2].textContent = productsOfBoxSlider[pos3].productName;
  pos4++;
  if (pos4 == 7) {
    pos4 = 0;
  }
  productImgUrl[3].setAttribute("src", productsOfBoxSlider[pos4].imgUrl);
  sliderBoxProductName[3].textContent = productsOfBoxSlider[pos4].productName;
});

const productsPrevBtn = document.querySelector(".slider-box-prev-btn");
productsPrevBtn.addEventListener("click", function () {
  pos1--;
  if (pos1 < 0) {
    pos1 = 6;
  }
  productImgUrl[0].setAttribute("src", productsOfBoxSlider[pos1].imgUrl);
  sliderBoxProductName[0].textContent = productsOfBoxSlider[pos1].productName;
  pos2--;
  if (pos2 < 0) {
    pos2 = 6;
  }
  productImgUrl[1].setAttribute("src", productsOfBoxSlider[pos2].imgUrl);
  sliderBoxProductName[1].textContent = productsOfBoxSlider[pos2].productName;
  pos3--;
  if (pos3 < 0) {
    pos3 = 6;
  }
  productImgUrl[2].setAttribute("src", productsOfBoxSlider[pos3].imgUrl);
  sliderBoxProductName[2].textContent = productsOfBoxSlider[pos3].productName;
  pos4--;
  if (pos4 < 0) {
    pos4 = 6;
  }
  productImgUrl[3].setAttribute("src", productsOfBoxSlider[pos4].imgUrl);
  sliderBoxProductName[3].textContent = productsOfBoxSlider[pos4].productName;
});

const productsSlideBox = document.querySelector(".slider-box");
var boxSliderPlayer;
var boxSliderRepeater = function () {
  boxSliderPlayer = setInterval(function () {
    pos1++;
    if (pos1 == 7) {
      pos1 = 0;
    }
    productImgUrl[0].setAttribute("src", productsOfBoxSlider[pos1].imgUrl);
    sliderBoxProductName[0].textContent = productsOfBoxSlider[pos1].productName;
    pos2++;
    if (pos2 == 7) {
      pos2 = 0;
    }
    productImgUrl[1].setAttribute("src", productsOfBoxSlider[pos2].imgUrl);
    sliderBoxProductName[1].textContent = productsOfBoxSlider[pos2].productName;
    pos3++;
    if (pos3 == 7) {
      pos3 = 0;
    }
    productImgUrl[2].setAttribute("src", productsOfBoxSlider[pos3].imgUrl);
    sliderBoxProductName[2].textContent = productsOfBoxSlider[pos3].productName;
    pos4++;
    if (pos4 == 7) {
      pos4 = 0;
    }
    productImgUrl[3].setAttribute("src", productsOfBoxSlider[pos4].imgUrl);
    sliderBoxProductName[3].textContent = productsOfBoxSlider[pos4].productName;
  }, 4000);
};
boxSliderRepeater();

productsSlideBox.addEventListener("mouseenter", function () {
  clearInterval(boxSliderPlayer);
});

productsSlideBox.addEventListener("mouseleave", function () {
  boxSliderRepeater();
});
