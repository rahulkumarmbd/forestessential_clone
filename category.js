//getting value from url and filter the data 
var url_string = window.location.href;
var url = new URL(url_string);
var category = url.searchParams.get("category");

var data2 = data.filter(function(item) {
    return item.categorySlug == category;
})

displayItems(data2)



function displayItems(data) {
    var categoryTitle = document.getElementsByClassName("category-title1")
    var productContainer = document.getElementById("product-container")
    var categoryBanner = document.getElementById("category-banner")

    //assigning dynamic name of category to the page

    for (var i = 0; i < categoryTitle.length; i++) {
        categoryTitle[i].textContent = data[0].category;
    }

    //ends here

    //assigning dynamic image of category banner
    categoryBanner.setAttribute("src", data[0].categoryBanner)



    data.map(function(item, index) {

        //finding average of ratings 
        var ratings = item.reviews;
        var ratingAverage = 0;
        ratings.map(function(elem, index) {
                ratingAverage += elem.rating
            })
            //finding ratings average ends here




        var productHeart = document.createElement("div");
        productHeart.setAttribute("class", "product-item-heart");
        productHeart.style.height = "30px";
        var p0 = document.createElement("p");
        p0.innerHTML = "&#9825;"
        p0.style.fontSize = "26px";

        p0.addEventListener("mouseover", function(e) {
            changeToBlackHeart(e)
        })
        p0.addEventListener("mouseleave", function(e) {
            changeToWhiteHeart(e)
        })
        productHeart.append(p0);

        var productItem = document.createElement("div");
        productItem.setAttribute("class", "product-item");

        var productImgDiv = document.createElement("div");
        productImgDiv.setAttribute("class", "product-img-div");
        var productImg = document.createElement("img");
        productImg.setAttribute("src", item.thumbnail);
        productImgDiv.append(productImg);

        var productItemWeightDiv = document.createElement("div");
        productItemWeightDiv.setAttribute("class", "product-item-weight-div");
        var div1 = document.createElement("div");
        var p1 = document.createElement("p");
        p1.setAttribute("class", "calibre product-item-gold-info");
        p1.textContent = item.name
        div1.append(p1);
        var div2 = document.createElement("div");
        var p2 = document.createElement("p");
        p2.setAttribute("class", "calibre product-item-weight");
        p2.textContent = item.size
        div2.append(p2);

        var div3 = document.createElement("div");
        var p3 = document.createElement("p");
        p3.setAttribute("class", "calibre");
        p3.textContent = ratingAverage / ratings.length + "/5 (" + ratings.length + " REVIEWS)"
        div3.append(p3);

        var div4 = document.createElement("div");
        var div41 = document.createElement("div");
        div41.setAttribute("class", "products-items-bar");
        div41.style.marginBottom = "18px";
        div4.append(div41);

        var div5 = document.createElement("div");
        var p5 = document.createElement("p");
        p5.setAttribute("class", "calibre");
        p5.textContent = "₹ " + item.price
        div5.append(p5);

        var id1 = document.createElement("span");
        id1.style.display = "none";
        id1.setAttribute("id", "productId");
        id1.textContent = item.id

        var div6 = document.createElement("div");
        div6.setAttribute("class", "product-item-add-to-bag");
        var p6 = document.createElement("p");
        p6.setAttribute("class", "calibre product-item-add-to-bag-text");
        p6.textContent = "ADD TO BAG"
        div6.append(p6);

        productItemWeightDiv.append(div1, div2)
        productItem.append(productHeart, productImgDiv, productItemWeightDiv, div3, div4, div5, div6, id1)

        productContainer.append(productItem)

    })
}


function changeToBlackHeart(event) {
    event.target.style.fontSize = "18px";
    event.target.innerHTML = "&#10084;";

}

function changeToWhiteHeart(event) {
    event.target.style.fontSize = "26px";
    event.target.innerHTML = "&#9825;";
}

//  open/close filter dropdown 

var count = 0;
document.getElementById("filter-products").addEventListener("click", function() {
    if (count == 0) {
        document.getElementById('filter-dropdown').style.display = "block";
        count++;
    } else if (count == 1) {
        document.getElementById('filter-dropdown').style.display = "none";
        count--;
    }

})

document.getElementById("sort-products").addEventListener("click", function() {
    document.getElementById('sort-filter').style.display = "block";
})