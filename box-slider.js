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
      sliderBoxProductName[0].textContent =
        productsOfBoxSlider[pos1].productName;
      pos2++;
      if (pos2 == 7) {
        pos2 = 0;
      }
      productImgUrl[1].setAttribute("src", productsOfBoxSlider[pos2].imgUrl);
      sliderBoxProductName[1].textContent =
        productsOfBoxSlider[pos2].productName;
      pos3++;
      if (pos3 == 7) {
        pos3 = 0;
      }
      productImgUrl[2].setAttribute("src", productsOfBoxSlider[pos3].imgUrl);
      sliderBoxProductName[2].textContent =
        productsOfBoxSlider[pos3].productName;
      pos4++;
      if (pos4 == 7) {
        pos4 = 0;
      }
      productImgUrl[3].setAttribute("src", productsOfBoxSlider[pos4].imgUrl);
      sliderBoxProductName[3].textContent =
        productsOfBoxSlider[pos4].productName;
    }, 4000);
  };
  boxSliderRepeater();

  productsSlideBox.addEventListener("mouseenter", function () {
    clearInterval(boxSliderPlayer);
    console.log("working");
  });

  productsSlideBox.addEventListener("mouseleave", function () {
    boxSliderRepeater();
    console.log("working");
  });