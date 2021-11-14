var lipimage = document.querySelector("#lipessential > img");
var lipDotsDivs = document.querySelectorAll(".mainlips > div");
var lipDot1 = document.querySelector(".dot1");
var lipDot2 = document.querySelector(".dot2");
var lipDot3 = document.querySelector(".dot3");
var lipDot4 = document.querySelector(".dot4");
var lipDot5 = document.querySelector(".dot5");


console.log("working hello")

lipDot1.addEventListener("click", function() {
    lipimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/Gulaab-Jal-category-texture-main.jpg"
    );
    lipDotsDivs.forEach(function(item) {
        item.style.border = "";
    });
    lipDot1.parentNode.style.border = "1px solid black";
});

lipDot2.addEventListener("click", function() {
    lipimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/lipserum-category-texture-main.jpg"
    );
    lipDotsDivs.forEach(function(item) {
        item.style.border = "";
    });
    lipDot2.parentNode.style.border = "1px solid black";
});

lipDot3.addEventListener("click", function() {
    lipimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/misri-cardamom-category-texture-main.jpg"
    );
    lipDotsDivs.forEach(function(item) {
        item.style.border = "";
    });
    lipDot3.parentNode.style.border = "1px solid black";
});

lipDot4.addEventListener("click", function() {
    lipimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/coconut-kesar-category-texture-main.jpg"
    );
    lipDotsDivs.forEach(function(item) {
        item.style.border = "";
    });
    lipDot4.parentNode.style.border = "1px solid black";
});

lipDot5.addEventListener("click", function() {
    lipimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/tinted-lip-serum-jamun-rasa-texture-main.jpg"
    );
    lipDotsDivs.forEach(function(item) {
        item.style.border = "";
    });
    lipDot5.parentNode.style.border = "1px solid black";
});

// For kajal


var kajalimage = document.querySelector("#kajalessential > img");
var lipDotsDiv = document.querySelectorAll(".mainkajal > div");
var lipDot6 = document.querySelector(".dot6");
var lipDot7 = document.querySelector(".dot7");
var lipDot8 = document.querySelector(".dot8");
var lipDot9 = document.querySelector(".dot9");


lipDot6.addEventListener("click", function() {
    kajalimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/9571_Ash_Gray_Kajal_With_Stroke.png"
    );
    lipDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot6.parentNode.style.border = "1px solid black";
});

lipDot7.addEventListener("click", function() {
    kajalimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/9572_Charcoal_Balck_Kajal_With_Stroke.png"
    );
    lipDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot7.parentNode.style.border = "1px solid black";
});

lipDot8.addEventListener("click", function() {
    kajalimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/9573_Earth_Brown_Kajal.png"
    );
    lipDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot8.parentNode.style.border = "1px solid black";
});

lipDot9.addEventListener("click", function() {
    kajalimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/1110_Cobalt_Blue_Kajal.png"
    );
    lipDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot9.parentNode.style.border = "1px solid black";
});

// For Noorcheek

var cheekimage = document.querySelector("#cheekessential > img");
var lipDotDiv = document.querySelectorAll(".Noormain > div");
var lipDot10 = document.querySelector(".dot10");
var lipDot11 = document.querySelector(".dot11");



lipDot10.addEventListener("click", function() {
    cheekimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/1059_Cheek_Tint_Gulaabi_category.png"
    );
    lipDotDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot10.parentNode.style.border = "1px solid black";
});

lipDot11.addEventListener("click", function() {
    cheekimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/1060_Cheek_Tint_Gerua_Category.png"
    );
    lipDotDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot11.parentNode.style.border = "1px solid black";
});


// Som silk



var silkimage = document.querySelector("#silkessential > img");
var silkDotsDiv = document.querySelectorAll(".silkimage > div");
var lipDot12 = document.querySelector(".dot12");
var lipDot13 = document.querySelector(".dot13");
var lipDot14 = document.querySelector(".dot14");
var lipDot15 = document.querySelector(".dot15");


lipDot12.addEventListener("click", function() {
    silkimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/1057_Foundation_Chandan_category_Front.png"
    );
    silkDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot12.parentNode.style.border = "1px solid black";
});

lipDot13.addEventListener("click", function() {
    silkimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/1055_Foundation_Gulab_Pankh_category_Front.png"
    );
    silkDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot13.parentNode.style.border = "1px solid black";
});

lipDot14.addEventListener("click", function() {
    silkimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/1056_Foundation_Genhu_category_Front.png"
    );
    silkDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot14.parentNode.style.border = "1px solid black";
});

lipDot15.addEventListener("click", function() {
    silkimage.setAttribute(
        "src",
        "https://images.forestessentialsindia.com/pub/media/makeup/1058_Foundation_Manjistha_category_Front.png"
    );
    silkDotsDiv.forEach(function(item) {
        item.style.border = "";
    });
    lipDot15.parentNode.style.border = "1px solid black";
});