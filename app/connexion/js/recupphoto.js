var urlphoto = document.getElementById('yourimage');
urlphoto.src = localStorage.taphoto;


	var nom = localStorage.getItem('nom');
	var tonnom = document.getElementById('surnom');
    var email = localStorage.getItem('email');
    var tonemail = document.getElementById('email');
    var password = localStorage.getItem('password');
    var tonpassword = document.getElementById('password');

tonnom.innerText = localStorage.getItem('nom'); 
tonemail.innerText = localStorage.getItem('email'); 
tonpassword.innerText = localStorage.getItem('password'); 
