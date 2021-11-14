// open close cart bag
document.getElementById("fa-shopping-cart").addEventListener("click", function() {
    document.getElementById("buketPage").style.display = "block";
})
document.getElementById("shopping-bag").addEventListener("click", function() {
    document.getElementById("buketPage").style.display = "block";
})

document.getElementById("cart-close").addEventListener("click", function() {
    console.log("hello")
    document.getElementById("buketPage").style.display = "none"
})
document.getElementById("cart-close-desk").addEventListener("click", function() {
    console.log("hello")
    document.getElementById("buketPage").style.display = "none"
})


//cart localstorage
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
document.getElementById('cart-items').textContent = cartItems.length;
document.getElementById('cart-items-mob').textContent = cartItems.length;
//cart localstorage

var subTotal = 0;
var buketItems = document.getElementById("buket-items");

function checkCartLenth(cartItems) {
    
    if (cartItems.length == 0) {
        document.getElementById("emptyBag").style.display = "flex";
        document.getElementById("emptyBag").style.justifyContent = "space-between";
        document.getElementById("buketPage").style.height = "60px"
        document.getElementById("buketPage").style.marginTop = "160px"
        var hide = document.getElementsByClassName("hide1");
        for (var i = 0; i < hide.length; i++) {
            hide[i].style.display = "none"
        }
    } else {
        document.getElementById("emptyBag").style.display = "none";
        document.getElementById("buketPage").style.height = "400px"
        document.getElementById("buketPage").style.marginTop = "500px"

        var hide = document.getElementsByClassName("hide1");
        for (var i = 0; i < hide.length; i++) {
            hide[i].style.display = "block"
        }
        cartItemsBag(cartItems);
        
    }
}

checkCartLenth(cartItems)


function cartItemsBag(cartItems) {
    buketItems.textContent = "";
    cartItems.map(function(item, index) {
        var buketItem = document.createElement("div");
        buketItem.setAttribute('class', 'buket-item');

        var imgDiv = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", item.thumbnail)
        imgDiv.append(img)

        var titleDiv = document.createElement("div");
        titleDiv.style.flexBasis = "400px";
        var p1 = document.createElement("p");
        p1.setAttribute("class", "product-details-info");
        p1.textContent = item.name;
        var div1 = document.createElement("div");
        var div11 = document.createElement("div");
        div11.setAttribute("class", "product-details-bar")
        div1.append(div11);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "buket-price-section");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        p3.setAttribute("class", "print-text")
        p4.setAttribute("class", "print-text");
        var p3Value = localStorage.getItem(item.id) || 1;
        p3.textContent = "qty:" + p3Value;
        console.log(p3Value);
        localStorage.setItem("prevProductCount",p3Value);
        p4.textContent = "₹ " + item.price*p3Value|| item.price;
        div2.append(p3, p4)
        titleDiv.append(p1, div1, div2);

        var div3 = document.createElement("div");
        var p5 = document.createElement("p");
        p5.setAttribute("class", "buket-trash-icon");
        p5.innerHTML = ' <i class="fa fa-trash-o" style="font-size:24px"></i>';
        p5.style.cursor = "pointer";
        
        p5.addEventListener("click", function() {
            
            removeFromBag(cartItems,index);
            localStorage.removeItem(item.id);
        })
        div3.append(p5);

        subTotal += item.price*p3Value;
        document.getElementById("subTotal").textContent = "₹ " + subTotal

        buketItem.append(imgDiv, titleDiv, div3);
        buketItems.append(buketItem)

    })
}

function removeFromBag(cartItems,index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    subTotal = 0;
    setTimeout(function() {
        // code to be executed after 1 second 
        document.getElementById('cart-items').textContent = cartItems.length;
        document.getElementById('cart-items-mob').textContent = cartItems.length;
        subTotal = 0;
        checkCartLenth(cartItems)

    }, 1000);
}



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

window.onscroll = function() {
    myFunction()
};

var topbar = document.getElementById("topbar");
var wrapdiv = document.getElementById("myHeader");
var rightdiv = document.getElementById("right-div");
var leftdiv = document.getElementById("left-div");
var centerdiv = document.getElementById("center-div");
var sticky = topbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        topbar.setAttribute('id', "hide")
            // wrapdiv.style.height = "80px"
            // rightdiv.style.height = "80px"
            // leftdiv.style.height = "80px"
            // centerdiv.style.height = "80px"
    } else {
        topbar.removeAttribute("id")
    }
}


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        document.getElementById("logo").style.width = "auto";
        document.getElementById("myHeader").style.height = "65px";
        document.getElementById("left-div").style.height = "60px";
        document.getElementById("center-div").style.height = "55px";
        document.getElementById("right-div").style.height = "60px";
        document.getElementById('logo').style.transition = "0.2s"
        document.getElementById("myHeader").style.transition = "0.2s";
        document.getElementById("left-div").style.transition = "0.2s";
        document.getElementById("center-div").style.transition = "0.2s";
        document.getElementById("right-div").style.transition = "0.2s";
        document.getElementById("topbar").style.display = "none";
    } else {

        document.getElementById("logo").style.removeProperty("width");
        document.getElementById("myHeader").style.removeProperty("height");
        document.getElementById("left-div").style.removeProperty("height");
        document.getElementById("center-div").style.removeProperty("height");
        document.getElementById("right-div").style.removeProperty("height");
        document.getElementById("topbar").style.removeProperty("display");
    }
}