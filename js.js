var link =document.querySelector("#show_resultat");

link.onclick = toggle;

function toggle() {
	
	var el = document.querySelector("#resultat");
	console.log(el.className);
	if(el.className === "" || el.className ==="show") {
		el.className = "hide";
	}
	else {
		el.className ="show";
	}
}
