
//Kopplar ihop min länk med id till en ny variabel.
var link =document.querySelector("#show_resultat");

//Klickar man på länken ska en funktion köras.
link.onclick = toggle;


//Funktionen som gör att jag kan dölja och visa min tabell.
function toggle() {
	
	//Når rätt div med id.
	var el = document.querySelector("#resultat");
	
	//kontrollerar att det är rätt namn.
	//console.log(el.className);
	
	//Om className är tomt eller visas, ska className "hide" läggas på.
	if(el.className === "" || el.className ==="show") {
		el.className = "hide";
	}
	//Om className skulle vara något annat ex:hide, sätts className "show" på.
	else {
		el.className ="show";
	}
}
