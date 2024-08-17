function myFunction(){
    document.getElementById("lastdiv").style.transform="translateX(100%)";
    document.getElementById("lastdiv").style.opacity="100%";
    document.getElementById("lastdiv").style.backgroundColor="#40fcec";
    document.getElementById("hi").innerHTML="Welcome Back!";
    document.getElementById("hi").style.margin="0px";
    document.getElementById("hey").innerHTML="To keep connected with us please login<br> with your personal info";

}


   
   
   

   function myfunction(){
    const Email = document.getElementById("Email");
   const Password = document.getElementById("Password");
   const Par2 = document.getElementById("Par2");
    
    if(Email.value===""||Password.value===""){
        Par2.innerHTML="Please enter all fields.";
        Par2.style.color="red";
    }
    
    else{
       Par2.innerHTML="successful";
       
      
       Email.value="";
       Password.value="";
    }
    
   }

   function functions(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
   const password = document.getElementById("password");
   const par1 = document.getElementById("par1");
    
    if(name.value===""||email.value===""||password.value===""){
        par1.innerHTML="Please enter all fields.";
        par1.style.color="green";
    }
    
    else{
       par1.innerHTML="successful";
       
       name.value="";
       email.value="";
       password.value="";
    }
    
   }