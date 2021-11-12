var lipimage = document.querySelector("#lipessential > img");
var lipDotsDivs = document.querySelectorAll(".mainlips > div");
var lipDot1 = document.querySelector(".dot1");
var lipDot2 = document.querySelector(".dot2");
var lipDot3 = document.querySelector(".dot3");
var lipDot4 = document.querySelector(".dot4");
var lipDot5 = document.querySelector(".dot5");

lipDot1.addEventListener("click", function () {
  lipimage.setAttribute(
    "src",
    "https://images.forestessentialsindia.com/pub/media/makeup/Gulaab-Jal-category-texture-main.jpg"
  );
  lipDotsDivs.forEach(function(item) {
    item.style.border = "";
  });
  lipDot1.parentNode.style.border = "1px solid black";
});

lipDot2.addEventListener("click", function () {
  lipimage.setAttribute(
    "src",
    "https://images.forestessentialsindia.com/pub/media/makeup/lipserum-category-texture-main.jpg"
  );
  lipDotsDivs.forEach(function(item) {
    item.style.border = "";
  });
  lipDot2.parentNode.style.border = "1px solid black";
});

lipDot3.addEventListener("click", function () {
  lipimage.setAttribute(
    "src",
    "https://images.forestessentialsindia.com/pub/media/makeup/misri-cardamom-category-texture-main.jpg"
  );
  lipDotsDivs.forEach(function(item) {
    item.style.border = "";
  });
  lipDot3.parentNode.style.border = "1px solid black";
});

lipDot4.addEventListener("click", function () {
  lipimage.setAttribute(
    "src",
    "https://images.forestessentialsindia.com/pub/media/makeup/coconut-kesar-category-texture-main.jpg"
  );
  lipDotsDivs.forEach(function(item) {
    item.style.border = "";
  });
  lipDot4.parentNode.style.border = "1px solid black";
});

lipDot5.addEventListener("click", function () {
  lipimage.setAttribute(
    "src",
    "https://images.forestessentialsindia.com/pub/media/makeup/tinted-lip-serum-jamun-rasa-texture-main.jpg"
  );
  lipDotsDivs.forEach(function(item) {
    item.style.border = "";
  });
  lipDot5.parentNode.style.border = "1px solid black";
});
