document.querySelector("button").addEventListener("click",signIn);
var regdUsers=JSON.parse(localStorage.getItem("userData"))||[];
// console.log(regdUsers);
function signIn(){
    var email = document.querySelector("#email").value
     var pass = document.querySelector("#pass").value
  
     if(email=="admin" && pass =="admin"){
        window.location.href="admin.html";

     }
     else{
         for(var i=0;i<regdUsers.length;i++)
         {
            
             if(
                 regdUsers[i].emailAddress == email &&
                 regdUsers[i].passWord == pass
                 
             ){
                 window.location.href ="product.html"
             } 
             else if( regdUsers[i].emailAddress !== email &&
                regdUsers[i].passWord !== pass)
                {
                    alert("Wrong id or Password")
                }
            else if( regdUsers[i].emailAddress !== email &&
                    regdUsers[i].passWord !== pass)
                    {
                        alert("Wrong id or Password")
         
                    }
         }

     }

     
}