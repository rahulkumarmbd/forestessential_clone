document.querySelector("button").addEventListener("click",pay)
        
        function pay()
        {
        var ATM=document.getElementById("paymentnumber").value
        var date=document.getElementById("payUser1").value
        var CVV=document.getElementById("payUser2").value
        var name=document.getElementById("paymentname").value
        
        var cardno=12
        var cvvno=3
        if(ATM.length==cardno && CVV.length==cvvno ) 
        {
        alert('data is correct')
        window.location.href="otp.html";
        }
        else if(ATM.length!=cardno){
        alert('Card no. is incorrect')
        }
        else if(CVV.length!=cvvno){
        alert('CVV no. is incorrect')
        }
        
        }