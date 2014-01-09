//Lägger in växelkursen i variabler.
var dollar = 0.152819;
var euro = 0.11234213;
var space = " ";



function validateInput() {
	var list = document.querySelector("#lista");
	var firstName = document.querySelector("#firstName");
	
if(firstName.value.length < 1 || isNaN(firstName.value) ) {
		
		alert('Något är fel i det du fyllt i, vänligen rätta till det');
		
	} 
	
	else {
		var dollarconverted = firstName.value * dollar;
		var euroconverted = firstName.value * euro;

		var textstring = (firstName.value)+space+"Svenska kronor är"+space+ dollarconverted.toFixed(2)+space+"i Amerikanska dollar och"+space+ euroconverted.toFixed(2) +space+"i Euro";
		
		var p = document.createElement("p");
		var text = document.createTextNode(textstring);
		var li = document.createElement("li");
		p.appendChild(text);
		li.appendChild(p);
		
		list.insertBefore(li, list.firstChild);
	}
	
}






window.onload = function() {
	
	
	var submitButton = document.querySelector(".submitButton");
	
	
	submitButton.addEventListener('click', validateInput);
};