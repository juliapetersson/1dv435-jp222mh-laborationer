
//Kopplar ihop min l�nk med id till en ny variabel.
var link =document.querySelector("#show_resultat");

//Klickar man p� l�nken ska en funktion k�ras.
link.onclick = toggle;


//Funktionen som g�r att jag kan d�lja och visa min tabell.
function toggle() {
	
	//N�r r�tt div med id.
	var el = document.querySelector("#resultat");
	
	//kontrollerar att det �r r�tt namn.
	//console.log(el.className);
	
	//Om className �r tomt eller visas, ska className "hide" l�ggas p�.
	if(el.className === "" || el.className ==="show") {
		el.className = "hide";
	}
	//Om className skulle vara n�got annat ex:hide, s�tts className "show" p�.
	else {
		el.className ="show";
	}
}
