
var 
	userIsLogged = false,
	accueil = document.getElementById("accueil"),
		form = document.getElementById("form"),
		button = document.getElementById("button"),
		userName = document.getElementById("username"),
		createProfil = document.getElementsByTagName("button")[0],
		eventContainers = document.getElementsByClassName("event"),
		addLocation = document.getElementsByClassName("add-location");

//si il y a quelque chose dans le local storage on l'affiche
if ( localStorage['nom'] ) {
/*	accueil.classList.remove("new-user");
	accueil.classList.add("returning-user");*/
	accueil.innerHTML = "Welcome " +localStorage['nom']+ "!";
	userIsLogged = true;	
}
/*
createProfil.addEventListener("click", function(){
	button.classList.add("hide");
	form.classList.remove("hide");
});*/

function clickSurLocation(addLocation){
	var
		oldlocation = document.getElementsByClassName("Evenements")[0],
		newlocation = document.getElementsByClassName("create-event")[0];

	if ( userIsLogged ) {
		// voir les details
		oldlocation.classList.remove('active');
		newlocation.classList.add('active');
	} else {
		// demander de remlplir son profil
		accueil.classList.remove("hide");
		accueil.classList.add("accueil-anim")
	}
}


Array.prototype.forEach.call(addLocation, function( element2, index ){
	element2.addEventListener( "click", clickSurLocation );	
});

function clickSurEvent(eventContainers){
	//debugger;
	var  
		currentlocation = document.getElementsByClassName("Evenements")[0],
	  	eventlocation = document.getElementsByClassName("publication-1")[0];

	if ( userIsLogged ) {
		// voir les details
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	} else {
		// demander de remlplir son profil
		accueil.classList.remove("hide");
		accueil.classList.add("accueil-anim")
	}
}
Array.prototype.forEach.call(eventContainers, function( element, index ){
	console.log(element);
	element.addEventListener( "click", clickSurEvent );	
});

function storeUser() {
	localStorage['nom'] = userName.value;
	return false;
	form.classList.add("hide");
	//showAlert("user stored");
}



function showAlert( msg ) {
	document.getElementById("alert-box").innerHTML = msg;
	body.classList.add("show-alert");

}

function hideAlert() {
	body.classList.remove("show-alert");
}


/*
var oldlocation = document.getElementsByClassName("evenements")[0];
	var newlocation = document.getElementsByClassName("create-event")[0];
	
	oldlocation.classList.remove('active');
	newlocation.classList.add('active');*/

/*







function gotoEvent(){
	var currentlocation = document.getElementsByClassName("evenements")[0];
	var eventlocation = document.getElementsByClassName("publication")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}*/

/*		addLocation = document.getElementById("add-location"),*/
/*function clickSurAddLocation(addlocation){
	
	var oldlocation = document.getElementsByClassName("evenements")[0];
	var newlocation = document.getElementsByClassName("create-event")[0];
	

	if ( userIsLogged ) {
		// voir les details
		oldlocation.classList.remove('active');
		newlocation.classList.add('active');
	} else {
		// demander de remlplir son profil
		accueil.classList.remove("hide");
		accueil.classList.add("returning-user")
	}
}*/