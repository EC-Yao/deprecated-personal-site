$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("ul").removeClass("large").addClass("small");
		document.getElementById("top-name").style.paddingTop = "7px";
		document.getElementById("top-name").style.fontSize = "20px";
	} else {
		$("ul").removeClass("small").addClass("large");
		document.getElementById("top-name").style.paddingTop = "40px";
		document.getElementById("top-name").style.fontSize = "35px";
	}
	
});