window.addEventListener("load", function() {
	var button = document.getElementById("click");
	button.addEventListener("click", function() {
		document.getElementById("ingresoColor").value = "Morado";
        document.getElementById("color1").classList.toggle ="border-morado";
	});
	var button2 = document.getElementById("superClick");
	button2.addEventListener("click", function() {	
		var color = document.getElementById("input").value;
		if ( color == "blue") {

		}
	});
});
