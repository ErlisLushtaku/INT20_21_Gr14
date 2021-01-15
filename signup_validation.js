var submit_form = new Array() ;

function signup_validation(){
    username1_validation();
    password1_validation();
    email1_validation();
    for(var i=0;i < submit_form.length ;i++){
      if (submit_form[i]==false)
          return false;
  }
  return true;
}

function username1_validation(){
  
    var username_pattern = new RegExp(/^(?=.{8,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
    var username = document.getElementById("username1").value;
  
    if(username.match(username_pattern)){
        $("#username1").css("border", "1px solid green")
        submit_form[0] = true;
      }
    else {
        window.alert("Username must be 8-20 charachters-long,no space in between charachters, no _ or . at the end ")
        document.getElementById("username1").setAttribute("style","border:1px red solid ");
        submit_form[0] = false;
      }
}
function password1_validation(){
  
    var password_pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
    var password = document.getElementById("password1").value;
   
    if(password.match(password_pattern)){
        document.getElementById("password1").setAttribute("style","border:1px green solid ");
        submit_form[1] = true;
      }
    else {
        window.alert("Password must be At least 8 characters long one lowercase, one uppercase, one number and one special character; ");
        document.getElementById("password1").setAttribute("style","border:1px red solid ");
        submit_form[1] = false;
      }
}

function email1_validation(){
    const email_pattern = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);
    const email = document.getElementById("email1").value;
    if(email.match(email_pattern)){
        document.getElementById("email1").setAttribute("style","border:1px green solid ");
        submit_form[0] = true;}
    else{
        window.alert("Email format: someone@example.com")
        document.getElementById("email1").setAttribute("style","border:1px red solid ");
        submit_form[0] = false;}
  }