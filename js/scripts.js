$(document).on("scroll", function() {
	if($(document).scrollTop()>100) {
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
	}
}