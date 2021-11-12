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

// js for sign up
var userArr = JSON.parse(localStorage.getItem("userData")) || [];
document.getElementById("aaa").addEventListener("click", function(e) {
    e.preventDefault();
    var valid = false;
    var titel = document.getElementById("aa").value;
    var firstName = document.getElementById("firstname").value;
    var secoundName = document.getElementById("secoundname").value;
    var emailAddress = document.getElementById("email_address").value;
    var mobile = document.getElementById("number").value;
    var pass = document.getElementById("password").value;
    var passwordConfirmation = document.getElementById(
        "passwordconfirmation"
    ).value;

    if (firstName.length == 0) {
        document.getElementById("firstname").style.border = "1px solid red";
        valid = false;
    } else {
        document.getElementById("firstname").style.border = "";
        valid = true;
    }

    if (secoundName.length == 0) {
        document.getElementById("secoundname").style.border = "1px solid red";
        valid = false;
    } else {
        document.getElementById("secoundname").style.border = "";
        valid = true;
    }

    if (mobile.length == 0) {
        document.getElementById("number").style.border = "1px solid red";
        valid = false;
    } else {
        document.getElementById("number").style.border = "";
        valid = true;
    }

    if (pass.length == 0) {
        document.getElementById("password").style.border = "1px solid red";
        valid = false;
    } else {
        document.getElementById("password").style.border = "";
        valid = true;
    }

    if (emailAddress.length == 0) {
        document.getElementById("email_address").style.border = "1px solid red";
        valid = false;
    } else if (passwordConfirmation.length == 0) {
        document.getElementById("email_address").style.border = "";
        document.getElementById("passwordconfirmation").style.border =
            "1px solid red";
        valid = false;
    } else if (pass != passwordConfirmation) {
        document.getElementById("passwordconfirmation").style.border = "";
        document.getElementById("alert-cpass").textContent =
            "Confirm Password doesn't matched!";
        document.getElementById("alert-cpass").style.color = "red";
        valid = false;
    } else {
        document.getElementById("alert-cpass").textContent = "";
        document.getElementById("email_address").style.border = "";
        document.getElementById("alert-email").textContent = "";
        for (var i = 0; i < userArr.length; i++) {
            if (userArr[i].emailAddress == emailAddress) {
                document.getElementById("alert-email").textContent =
                    "Email Already Exist!!";
                document.getElementById("alert-email").style.color = "red";
                valid = false;
                break;
            }
        }
    }

    if (valid == true) {
        var userC = {
            titel: titel,
            firstName: firstName,
            secoundName: secoundName,
            emailAddress: emailAddress,
            mobile: mobile,
            pass: pass,
            passwordConfirmation: passwordConfirmation,
        };
        userArr.push(userC);
        localStorage.setItem("userData", JSON.stringify(userArr));
        var inputs = document.querySelectorAll("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        window.location.href = "signin.html";
    }
});