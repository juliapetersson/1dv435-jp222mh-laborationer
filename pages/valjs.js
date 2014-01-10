//Lägger in växelkursen i variabler.
var dollar = 0.152819;
var euro = 0.11234213;
//Och ett mellanrum.
var space = " ";


//Gör en funktion som gör att allt kontrolleras och blir rätt ifyllt.
function validateInput() {

	//ger variabel på min lista(där sumeringen ska visas).
	var list = document.querySelector("#lista");
	//ger variabel på "rutan" som man skriver saker i. (jag har kollat på Emils exempel, därför samma namn.)
	var firstName = document.querySelector("#firstName");
	
	
//Om "firstName" har ett värde på mindre än 1, eller om det inte är siffror så kommer det en liten alertruta.

if(firstName.value.length < 1 || isNaN(firstName.value) ) {
		
		alert('Något är fel i det du fyllt i, vänligen rätta till det');
		
	} 
	//Är det siffror,
	//räknar funktionen ut vad det blir i dollar och euro.
	else {
	
		//Ger variabler till uträkningarna.
		var dollarconverted = firstName.value * dollar;
		var euroconverted = firstName.value * euro;
		//Ger en variabel med hela uträkningen och text som ska komma fram. Med endast 2 decimaler.
		var textstring = (firstName.value)+space+"Svenska kronor är"+space+ dollarconverted.toFixed(2)+space+"i Amerikanska dollar och"+space+ euroconverted.toFixed(2) +space+"i Euro";
		
		//Skapar variablar som i sin tur gör att det som användaren skriver in ska sparas i en ny p-tagg som
		//skapas i ett nytt list-element.
		var p = document.createElement("p");
		var text = document.createTextNode(textstring);
		var li = document.createElement("li");
		p.appendChild(text);
		li.appendChild(p);
		
		//Här säger jag till att det "nya" ska hamna överst i listan.
		list.insertBefore(li, list.firstChild);
	}
	
}





//Och här är min länk-knapp. Klickar man på länken körs funktionen.
window.onload = function() {
	
	
	var submitButton = document.querySelector(".submitButton");
	
	
	submitButton.addEventListener('click', validateInput);
};