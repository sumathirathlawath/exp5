function LoginValidate(){
    
    var enteremail=document.getElementById('email').value;
    var enterpassword=document.getElementById('pwd').value;

    var getEmail=localStorage.getItem('email')
    var getPwd=localStorage.getItem('password')
   
    if(enteremail==getEmail)
    {
        if(enterpassword==getPwd)
        {
            alert("login success");
            window.location= "welcome.html" ;
            return false; 
            
        }
        else
        {
            alert("wrong password");

        }
    }
        else
        {
            alert("invalid details");
        }
   
    
    }