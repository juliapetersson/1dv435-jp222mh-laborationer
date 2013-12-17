
var form = document.querySelector("#theForm");
var a = form.querySelector("a");
var p = form.querySelector("p");
var input = form.querySelector("input");

a.onclick = function () {
	p.innerHTML = input.value;

};
var valuelength = input.value.length;
console.log(valuelength);

if(valuelength<1){

	alert("Du har glömt skriva in några siffror");
}
else{
	alert("Rätt");
}