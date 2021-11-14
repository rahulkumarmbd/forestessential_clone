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
    myFunction();
};

var topbar = document.getElementById("topbar");
var wrapdiv = document.getElementById("myHeader");
var rightdiv = document.getElementById("right-div");
var leftdiv = document.getElementById("left-div");
var centerdiv = document.getElementById("center-div");
var sticky = topbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        topbar.setAttribute("id", "hide");
        // wrapdiv.style.height = "80px"
        // rightdiv.style.height = "80px"
        // leftdiv.style.height = "80px"
        // centerdiv.style.height = "80px"
    } else {
        topbar.removeAttribute("id");
    }
}


document.querySelector(".signInPage-btn").addEventListener("click", signIn);
document.querySelectorAll(".signInPage-btn")[1].addEventListener("click", function() {
    window.location.href = "signup.html";
})
var regdUsers = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(regdUsers);
function signIn() {
    var email = document.querySelector(".email");
    var pass = document.querySelector(".pass");
    var signInId = "not found";
    if (email == "admin" && pass == "admin") {
        window.location.href = "admin.html";
    } else {
        for (var i = 0; i < regdUsers.length; i++) {
            if (regdUsers[i].emailAddress == email.value && regdUsers[i].pass == pass.value) {
                window.location.href = "landingPage.html";
                signInId = "found";
            }
        }
        if (regdUsers.length == 0) {
            alert("There is no Registered User, Please Create Your Account first");
        }
        if (signInId == "not found") {
            alert("Wrong Id or Password");
        }
    }
    email.value = "";
    pass.value = "";
}