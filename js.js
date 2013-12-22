//.labbtable {
//	display: none;
//}

var div = document.querySelector("#resultat");

var a = div.querySelector("a");
//var table = document.getElementById("hidden");
var table = document.getElementById("hidden"); 
//table.className = "labbtable";



    if(table.className = "labbtable"){
        a.onclick = function () {
        table.style.display ="";
        table.setAttribute("class", "jschanged"); 
        };
    }
    else {
        a.onclick = function () {
        table.style.display ="none";
        table.setAttribute("class", "labbtable");
        };
    
    }
   
   //if(table.style.display != 'none') {
		//a.onclick = function () {
		//el.style.display = 'none';
		//};
   //}
   //else {
		//el.style.display = '';
   //}


// http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/bobbysailor.jpg#bobby
// http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/cupcakegirl.png#cupcake
// http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/monkeey3.png#monkey

//var myImages = ["http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/bobbysailor.jpg#bobby","http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/cupcakegirl.png#cupcake","http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/monkeey3.png#monkey"];
var bild1 = document.getElementById("bobby").src = img_arr[0];
var bild2 = document.getElementById("cupcake").src = img_arr[1];
var bild3 = document.getElementById("monkey").src = img_arr[2];


//Bilden uppdaterar du genom att via JavaScript ändra bild-elementets src-attribut: document.getElementById
//("idOnImageElement").src = img_arr[counter];

var summa = 0
setTimeout(function(){

for(var i = 0; i<img_arr.length; i++){
        summa = summa + img_arr[i];
        
        
    }

}, 3000); 
for(var i = 0; i<img_arr.length; i++){
        summa = summa + img_arr[i];
        
        
    }