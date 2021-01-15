  function validation(){
    name_validation();
    surname_validation();
    email_validation();
    pnumber_validation();
  }
  
  function email_validation(){
    const email_pattern = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);
    const email = document.getElementById("email").value;
    if(email.match(email_pattern))
        document.getElementById("email").setAttribute("style","border:1px green solid ");
    else
        document.getElementById("email").setAttribute("style","border:1px red solid ");
  }
  
  function name_validation(){
  
    const name_pattern = new RegExp(/^([a-zA-Z]){2,30}$/);
    const name = document.getElementById("name").value;
  
    if(name.match(name_pattern))
        document.getElementById("name").setAttribute("style","border:1px green solid ");
    else 
        document.getElementById("name").setAttribute("style","border:1px red solid ");
  }
  
  function surname_validation(){
  
    const surname_pattern = new RegExp(/^([a-zA-Z]){2,30}$/);
    const surname = document.getElementById("surname").value;
  
    if(surname.match(surname_pattern))
        document.getElementById("surname").setAttribute("style","border:1px green solid ");
    else 
        document.getElementById("surname").setAttribute("style","border:1px red solid ");
  }
function pnumber_validation(){

const pnumber_pattern = /^\+?\(?383\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{3}?/;
const pnumber = document.getElementById("phone").value;

if(pnumber.match(pnumber_pattern))
    document.getElementById("phone").setAttribute("style","border:1px green solid ");
else 
    document.getElementById("phone").setAttribute("style","border:1px red solid "); 
     
}
