function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // document.write("<h1>User Information</h1>");
    // document.write("User Name: "+name+"<br>");
    // document.write("User Email: "+email+"<br>");
    // document.getElementById("display").innerHTML = "<h1>"+name+"</h1>";
    let emailregex =/\w+@[a-z]+\.[a-z]{2,4}[\.[a-z]+]?/;
    let passregex = /.{8,}/;


 if(name == "" || email == "" || password == "" || !emailregex.test(email) || !passregex.test(password)){
        //name error
    if(name == ""){
        document.getElementById("nameerror").innerText = "Must Enter your Name";

    }else{
        document.getElementById("nameerror").innerText = "";
    }

    //email error
    if(email == ""){
        document.getElementById("emailerror").innerText = "Must Enter your Email";
    }else{
        if(emailregex.test(email)){
            document.getElementById("emailerror").innerText = "";

        }else{
            document.getElementById("emailerror").innerText = "Invalid Email";

        }
    }
    //password error

    if(password == ""){
        document.getElementById("passworderror").innerText = "Must Enter Your Password";
    } else if(passregex.test(password)){
        document.getElementById("passworderror").innerText = "";

    }
    else{
        document.getElementById("passworderror").innerText = "Your password contain atleast 8 characters";
    }
    }
    else{
        location.href = "validateform.html";
    }
    
}


