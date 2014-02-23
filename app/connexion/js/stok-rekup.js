var initEvent;

function stock(){
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
     
    localStorage.setItem('nom', nom);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    }
     
function recup(){
    var nom = localStorage.getItem('nom');
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password', password);
     
     
    document.getElementById('nom').value = nom;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;  
     
    }
 
if (window.addEventListener){
window.addEventListener('load',initEvent,false);
} else if (window.attachEvent) {
  window.attachEvent('onload',initEvent);
}