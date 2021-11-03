document.querySelector("form").addEventListener("click", signUp);
 var userArr= JSON.parse(localStorage.getItem("userData")) || []

function signUp() {
    var titel = document.getElementById("aa").value;
    var firstName = document.getElementById("firstname").value;
    var secoundName = document.getElementById("secoundname").value;
    var emailAddress = document.getElementById("email_address").value;
    var mobile = document.getElementById("number").value;
    var pass = document.getElementById("password").value;
    var passwordConfirmation = document.getElementById("passwordconfirmation").value;
var userC={
   titel: titel,
   firstName: firstName,
   secoundName: secoundName,
   emailAddress: emailAddress,
   mobile: mobile,
   pass: pass,
   passwordConfirmation: passwordConfirmation,
}
userArr.push(userC);
console.log(userArr)
localStorage.setItem("userData", JSON.stringify(userArr));
}