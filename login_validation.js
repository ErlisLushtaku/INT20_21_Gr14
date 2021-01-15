var submit_form = new Array() ;

function validation(){
    username_validation();
    password_validation();
    for(var i=0;i < submit_form.length ;i++){
      if (submit_form[i]==false)
          return false;
  }
  return true;
}

function username_validation(){
  
    var username_pattern = new RegExp(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
    var username = document.getElementById("username").value;
  
    if(username.match(username_pattern)){
        document.getElementById("username").setAttribute("style","border:1px green solid ");
        submit_form[0] = true;
      }
    else {
        window.alert("Incorrect username")
        document.getElementById("username").setAttribute("style","border:1px red solid ");
        submit_form[0] = false;
      }
}
function password_validation(){
  
    var password_pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
    var password = document.getElementById("password").value;
   
    if(password.match(password_pattern)){
        document.getElementById("password").setAttribute("style","border:1px green solid ");
        submit_form[1] = true;
      }
    else {
        window.alert("Incorrect password")
        document.getElementById("password").setAttribute("style","border:1px red solid ");
        submit_form[1] = false;
      }
}

