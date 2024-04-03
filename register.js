function validate()
 {
     
      var fn = frm.fname.value;
      localStorage.setItem("firstname",fn)
     for(x in fn)
         {
             ch=fn.charCodeAt(x);
             if(ch<65||ch>90 && ch<97||ch>122)
                 {
                 alert("Invalid firstname");
                 return false;
                 }
         }
         var ln = frm.lname.value;
         localStorage.setItem("lastname",ln)
     for(y in ln)
         {
             ch=ln.charCodeAt(y);
             if(ch<65||ch>90 && ch<97||ch>122)
                 {
                 alert("Invalid lastname");
                 return false;
                 }
         }
     var phn = frm.phone.value;
     localStorage.setItem("phone",phn)
     var lenp = phn.length;
     if (lenp!==10)
     {    alert("Phone no should be exactly 10 digits");
         return false;
     }
    
    var pwd1=frm.pwd.value;
    localStorage.setItem("password",pwd1)
    var pwdl=pwd1.length;
    if(pwdl%2===1)
        {
        alert("Password should contain even number of characters");
        return false;
        }
    if(pwdl > 8)
        {
            alert("Password should not exceed 8 digits");
            return false;
        }
   
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     var mail=frm.mailid.value;
     localStorage.setItem("email",mail)
if (reg.test(mail)){
alert("Registration Successful!!"); 
}
else{
    alert("Invalid email");
return false;
}
    return true;

}












