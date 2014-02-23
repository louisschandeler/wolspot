function addLikers(container){
  var likers = container.querySelectorAll('.liker');

  Array.prototype.forEach.call(likers, function(el, i) {

    var value = Number(el.dataset.value) || 0;

    var likeBtn = document.createElement('button-like');
    likeBtn.className = 'liker-like-btn, icon-heart-filled';
    likeBtn.addEventListener('click', function(e){
      if ( value === 1 ) {
        value = 0;
      } else {
        value = 1;
      }
      updateElements();
    });

    var dislikeBtn = document.createElement('button-dislike');
    dislikeBtn.className = 'liker-dislike-btn, icon-heart-broken';
    //dislikeBtn.innerText = '';
    dislikeBtn.addEventListener('click', function(e){
      if ( value === -1 ) {
        value = 0;
      } else {
        value = -1;
      }
      updateElements();
    });

    var totalLike = document.createElement('span'),
     		totaldisLike = document.createElement('span');
     		
		totalLike.className = "total-like";
		likeBtn.appendChild(totalLike);

		totaldisLike.className = "total-dislike";
		dislikeBtn.appendChild(totaldisLike);

		//Un nombre pour l'exemple 
		var totalValueLike = Math.floor((Math.random()*35)+1);
		var totalValueDislike = Math.floor((Math.random()*20)+1);
 
    function updateElements(){
      switch( value ) {
        case 0:
          likeBtn.classList.remove("selected");
          dislikeBtn.classList.remove("selected");
          totalLike.innerHTML = totalValueLike;
          totaldisLike.innerHTML = totalValueDislike;
          break;
        case 1:
          likeBtn.classList.add("selected");
          dislikeBtn.classList.remove("selected");
          totalLike.innerHTML = parseInt(totalValueLike) + 1;
          totaldisLike.innerHTML = parseInt(totalValueDislike) - 0;
          break;
        case -1:
          likeBtn.classList.remove("selected");
          dislikeBtn.classList.add("selected");
          totalLike.innerHTML = parseInt(totalValueLike) - 0;
          totaldisLike.innerHTML = parseInt(totalValueDislike) + 1;
          break;
      }

      el.dataset.value = value;
    }

    el.appendChild( likeBtn );
    el.appendChild( dislikeBtn );

    updateElements();

  });

}