//.labbtable {
//	display: none;
//}

var div = document.querySelector("#resultat");

var a = div.querySelector("a");
//var table = document.getElementById("hidden");
var table = document.getElementById("hidden"); 
table.className = "labbtable";

//for(var i = 0; i != table.length; i++){

    if(table.className = "labbtable"){
         a.onclick = function () {
        //table.style.display ="";
        table.setAttribute("class", "jschanged"); 
         };
    }
    else{
         a.onclick = function () {
         //table.style.display ="none";
        table.setAttribute("class", "labbtable");
         };
    
    }
//}

// http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/bobbysailor.jpg#bobby
// http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/cupcakegirl.png#cupcake
// http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/monkeey3.png#monkey

//var myImages = ["http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/bobbysailor.jpg#bobby","http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/cupcakegirl.png#cupcake","http://juliapetersson.github.io/1dv435-jp222mh-laborationer/pics/monkeey3.png#monkey"];
//console.log(myImages[0]); <-- Fungerar!


//Bilden uppdaterar du genom att via JavaScript �ndra bild-elementets src-attribut: document.getElementById
//("idOnImageElement").src = img_arr[counter];