function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
    var x = document.getElementById("perjs");
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  
}
function validation(){
    name_validation();
    email_validation();
    company_validaton();
    budget_validation();
}
function email_validation(){
    const email_pattern = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);
    const email = document.getElementById("email").value;
    if(email.match(email_pattern))
        document.getElementById("email").setAttribute("style","border:1px green solid ");
    else
        document.getElementById("email").setAttribute("style","border:1px red solid ");
}
function budget_validation(){
    const budget_pattern = new RegExp(/^\d*[.]?\d*$/);
    const budget = document.getElementById("budget").value;
    if(budget.match(budget_pattern))
        document.getElementById("budget").setAttribute("style","border:1px green solid ");
    else
        document.getElementById("budget").setAttribute("style","border:1px red solid ");
}
function company_validaton(){
    const company_pattern = new RegExp(/^([a-zA-Z ]){2,30}$/);
    const company = document.getElementById("company").value;
    if(company.match(company_pattern))
        document.getElementById("company").setAttribute("style","border:1px green solid ");
    else 
        document.getElementById("company").setAttribute("style","border:1px red solid ");
}

function name_validation(){

    const name_pattern = new RegExp(/^([a-zA-Z]){2,30}$/);
    const name = document.getElementById("name").value;

    if(name.match(name_pattern))
        document.getElementById("name").setAttribute("style","border:1px green solid ");
    else 
        document.getElementById("name").setAttribute("style","border:1px red solid ");


}
