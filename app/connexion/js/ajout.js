// variables globales, donc utilisables dans toutes les fonctions
var inputTitle,
	inputDescription,
	input,
	list;

init();

function init() {
	// stocker les références vers les élements HTML qu'on va utiliser tout le temps
	inputTitle = document.getElementById("inputTitle");
	inputDescription = document.getElementById("textarea");
	button = document.getElementById("terminer")
	list = document.getElementById("maListe");
	if ( localStorage['list'] ) {
		list.innerHTML = localStorage['list'];
	}
}

function addValueToList(event) {
		saveList();	
	// empêcher le formulaire d'envoyer sur une autre page (ou de recharger celle-ci)
	event.preventDefault();
}

function saveList() {
	// stocker le contenu de la liste dans le localstorage
	localStorage['list'] = list.innerHTML;
}

//Config photo
var input = document.getElementById('takePictureField'),
	image = document.getElementById('yourimage');

input.addEventListener("change",function(e){
	var reader = new FileReader();
	reader.onloadend = function(e){
		var dataURL = e.target.result;
		//console.log( dataURL );
		image.src = dataURL;
		localStorage.taphoto = dataURL;
	};
	reader.readAsDataURL( input.files[0] );
});

if ( localStorage.taphoto ) {
	image.src = localStorage.taphoto;
}
