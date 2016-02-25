function passwordCheck()
{    
    var password = document.getElementById("pw1").value;
    var password2 = document.getElementById("pw2").value;
    
    if(password.length < 8)
    {
        alert("The password does not meet the minimum requirement of 8 characters");
    }
    else if(password == password2)
    {
        alert("The passwords match!");
    }
    else if(password != password2)
    {
        alert("The passwords do not match.");
    }   
}
