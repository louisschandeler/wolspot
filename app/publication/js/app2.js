window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

(function(){

	//le body
	var body = document.body;
						
	//reveal menu						
	var reveal = document.getElementsByClassName("reveal");
	Array.prototype.forEach.call(reveal, function(el, i){

		el.onclick = function() { 
				body.classList.toggle("menu-is-revealed");
		};

	});	
	
		
	//page active	
	var menuLink = document.getElementsByClassName('menu-reveal-link');
	Array.prototype.forEach.call(menuLink, function(el, i){

		el.onclick = function() { 
				
				body.classList.remove("menu-is-revealed");
		};

	});
	
})();