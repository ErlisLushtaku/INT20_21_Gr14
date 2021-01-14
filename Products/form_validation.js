function changeBackground(){ 
    var currentTime = new Date().getHours();
    if (7 <= currentTime && currentTime < 20) {
        document.body.style.backgroundColor = "#FFF";
    }
    else {
        document.body.style.backgroundColor = "#FAFAFA";
    }
    
}

function pnumber_validation(){
const select = document.getElementById("mySelect").value;
const kos_pattern = /^\+?\(?383\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{3}?/;
const alb_pattern = /^\+?\(?355\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{3}?/;
const mont_pattern = /^\+?\(?382\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{3}?/;
const northM_pattern = /^\+?\(?389\)?[-.\s]?\d{2}[-.\s]?\d{6}?/;
const srb_pattern = /^\+?\(?381\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}?/;
switch(select){
    case "Albania" : 
        var phonenumber = document.getElementById("phone").value;
        if(phonenumber.match(alb_pattern))
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
        else 
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
        break;
    case "Kosovo" : 
        var phonenumber = document.getElementById("phone").value;
        if(phonenumber.match(kos_pattern))
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
        else 
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
        break;
    case "Montenegro" : 
        var phonenumber = document.getElementById("phone").value;
        if(phonenumber.match(mont_pattern))
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
        else 
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
        break;
    case "North Macedonia" :
        var phonenumber = document.getElementById("phone").value;
        if(phonenumber.match(northM_pattern))
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
        else 
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
        break;
    default : 
        var phonenumber = document.getElementById("phone").value;
        if(phonenumber.match(srb_pattern))
            document.getElementById("phone").setAttribute("style","border:1px green solid ");
        else 
            document.getElementById("phone").setAttribute("style","border:1px red solid "); 
        break;
}
}
function change_placeholder(e){
    switch(e.value){
        case "Albania": 
            document.getElementById("phone").placeholder = "+355-XX-XXX-XXX" ;
            break;
        case "Kosovo": 
            document.getElementById("phone").placeholder = "+383-XX-XXX-XXX" ;
            break;
        case "Montenegro":
            document.getElementById("phone").placeholder = "+382-XX-XXX-XXX" ;
            break;
        case "North Macedonia":
            document.getElementById("phone").placeholder = "+389-XX-XXXXXX" ;
            break;
        default :
            document.getElementById("phone").placeholder = "+381-XX-XXX-XX-XX" ;
            break;
    }
}
function openForm() {

            document.getElementById("bigDiv").style.display = "block";
}
function closeForm() {

          document.getElementById("bigDiv").style.display = "none";
              }
