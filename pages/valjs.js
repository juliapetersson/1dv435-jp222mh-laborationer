
var form = document.querySelector("#theForm");
var a = form.querySelector("a");
var p = form.querySelector("p");
var input = form.querySelector("input");

//a.onclick = function () {
//p.innerHTML = input.value * 9.04;
    //p.innerHTML = input.value * 6.57;
//};
//arr.push(element1, ..., elementN)
//arr.reverse()
var valuelength = input.value.length;

var svenska = (" svenska kronor blir");
var euro = (" euro och");
var dollar = (" dollar.");
//var allt = input.value +svenska+" "+(input.value * 9.04) +euro+" "+(input.value * 6.57) +dollar;

if(isNaN(input.value)){
    a.onclick = function () {
       // p.innerHTML = input.value +svenska+" "+(input.value * 9.04) +euro+" "+(input.value * 6.57) +dollar;
	//p.innerHTML = allt;
	p.innerHTML = ("Du måste skriva någon siffra");
	//p.innerHTML = ("Du har glömt att skriva in några siffror");
	console.log(input.value);
    };
}
else{
    a.onclick = function () {
	//p.innerHTML = ("Du har skrivit in något");
	p.innerHTML = input.value +svenska+" "+(input.value * 9.04) +euro+" "+(input.value * 6.57) +dollar;
    };
}