function NewEvent(){
	var oldlocation = document.getElementsByClassName("Evenements")[0];
	var newlocation = document.getElementsByClassName("create-event")[0];
	
	oldlocation.classList.remove('active');
	newlocation.classList.add('active');
}

function fallbackEvent(){
	var currentlocation = document.getElementsByClassName("create-event")[0];
	var eventlocation = document.getElementsByClassName("Evenements")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}

function fallbackInscription(){
	var currentlocation = document.getElementsByClassName("Deconnexion")[0];
	var eventlocation = document.getElementsByClassName("Evenements")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}

function fallbackGroupes(){
	var currentlocation = document.getElementsByClassName("Groupes")[0];
	var eventlocation = document.getElementsByClassName("Evenements")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}

function fallbackPublication(){
	var currentlocation = document.getElementsByClassName("publication")[0];
	var eventlocation = document.getElementsByClassName("Evenements")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}

	function fallbackPublication1(){
		var currentlocation = document.getElementsByClassName("publication-1")[0];
		var eventlocation = document.getElementsByClassName("Evenements")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	function fallbackPublication2(){
		var currentlocation = document.getElementsByClassName("publication-2")[0];
		var eventlocation = document.getElementsByClassName("Evenements")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	function fallbackPublication3(){
		var currentlocation = document.getElementsByClassName("publication-3")[0];
		var eventlocation = document.getElementsByClassName("Evenements")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	function fallbackPublication4(){
		var currentlocation = document.getElementsByClassName("publication-4")[0];
		var eventlocation = document.getElementsByClassName("Evenements")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	
function gotoEvent(){
	var currentlocation = document.getElementsByClassName("Evenements")[0];
	var eventlocation = document.getElementsByClassName("publication")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}
	function gotoEvent1(){
		var currentlocation = document.getElementsByClassName("publication")[0];
		var eventlocation = document.getElementsByClassName("publication-1")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	function gotoEvent2(){
		var currentlocation = document.getElementsByClassName("publication")[0];
		var eventlocation = document.getElementsByClassName("publication-2")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	function gotoEvent3(){
		var currentlocation = document.getElementsByClassName("publication")[0];
		var eventlocation = document.getElementsByClassName("publication-3")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	function gotoEvent4(){
		var currentlocation = document.getElementsByClassName("publication")[0];
		var eventlocation = document.getElementsByClassName("publication-4")[0];
		
		currentlocation.classList.remove('active');
		eventlocation.classList.add('active');
	}
	
function addNewGroup(){
	var currentlocation = document.getElementsByClassName("Groupes")[0];
	var eventlocation = document.getElementsByClassName("newgroup")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}

function fallbackAddNewGroup(){
	var currentlocation = document.getElementsByClassName("newgroup")[0];
	var eventlocation = document.getElementsByClassName("Groupes")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}

function goToConnect(){
	var currentlocation = document.getElementsByClassName("Evenements")[0];
	var eventlocation = document.getElementsByClassName("Deconnexion")[0];
	
	currentlocation.classList.remove('active');
	eventlocation.classList.add('active');
}


