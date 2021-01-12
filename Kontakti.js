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
function validatebudget(){
var x=document.getElementById("a").value;
if(isNaN(x)||x<0){
alert("you must put a number in budget part, or you have a negative value!")
return false;
}
}
