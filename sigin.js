document.querySelector(".signInPage-btn").addEventListener("click", signIn);
document.querySelectorAll(".signInPage-btn")[1].addEventListener("click",function(){
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
        window.location.href = "product.html";
        signInId = "found";
      }
    }
    if(regdUsers.length == 0){
        alert("There is no Registered User, Please Create Your Account first");
    }
    if(signInId == "not found"){
      alert("Wrong Id or Password");
    }
  }
  email.value = "";
  pass.value = "";
}
