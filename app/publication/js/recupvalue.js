
// BobLeMarin bro, hell yeah
var username = "Louis Schandeler";
var title = document.getElementsByClassName("username")[0];
var description = document.getElementsByClassName("textarea")[0];
var nameevent = document.getElementsByClassName("inputTitle")[0];
var localisation = document.getElementsByClassName("localisation")[0];
var times = document.getElementsByClassName("times")[0];
var distance = document.getElementsByClassName("distance")[0];
var ilike = document.getElementsByClassName("ilike")[0];
var idislike = document.getElementsByClassName("idislike")[0];


function getValue(){
	
	titleValue = title.value;
	descriptionValue = description.value;
	nameeventValue = nameevent.value;
	localisationValue = localisation.value;
	timesValue = times.value;
	distanceValue = distance.value;
	ilikeValue = ilike.value;
	idislikeValue = idislike.value;
		
	var content = document.getElementById("maListe");

	content.innerHTML += eventTemplate( {
		'title': username,
		'times': timesValue,
		'description': descriptionValue,
		'nameevent': nameeventValue,
		'localisation': localisationValue,
		'distance': distanceValue,
		'ilike': ilikeValue,
		'idislike': idislikeValue,
	});
};

button.addEventListener("click",getValue,false);

function eventTemplate(event) {
	var template = 
	'<li class="event-author event wrapped-content ">\
		<div class="arrow-right icon-right-open-big"></div>\
		<div class="event-author-photo">\
			<img src="images/Louis.jpg" alt="">\
		</div>\
		<p class="title">{title}<span class="times">1 min</span></p>\
		<p class="name-event">{nameevent}</p>\
		<p class="icon-location localisation">Le Petit Bitu<span class="meters">200m</span></p>\
		<p class="ilike icon-heart-filled">26</p>\
		<p class="idislike icon-heart-broken">3</p>\
	</li>';

	template = 	template.replace('{title}',event.title);
	template =	template.replace('{times}',event.times);
	template =	template.replace('{nameevent}',event.nameevent);
	template =	template.replace('{localisation}',event.localisation);
	template =	template.replace('{distance}',event.distance);
	template =	template.replace('{ilike}',event.ilike);
	template =	template.replace('{idislike}',event.dislike);

	return template;	
}
