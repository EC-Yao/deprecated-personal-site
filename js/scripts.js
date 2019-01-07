$(document).on("scroll", function() {
	if($(document).scrollTop()>30) {
		changeSmall();
	} else {
		changeLarge();
	}
});

function changeSmall(){
	var x = document.getElementsByClassName("page-scroll");
	var i;
	$("ul").removeClass("large").addClass("small");
	for (i = 0; i < x.length; i++){
		x[i].style.paddingTop = "15px";
		x[i].style.fontSize = "20px";
	}
}

function changeLarge(){
	var x = document.getElementsByClassName("page-scroll");
	var i;
	$("ul").removeClass("small").addClass("large");
	for (i = 0; i < x.length; i++){
		x[i].style.paddingTop = "40px";
		x[i].style.fontSize = "35px";
	}
}

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

window.setTimeout(offsetAnchor, 0);