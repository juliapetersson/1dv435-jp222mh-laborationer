"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
	
	//skapat en variabel med värdet 10.
	var tal = 10;
	//returnerar variabeln.
	return tal;
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
    
    //skapar variabel 1 men värdet 2.5.
	var number1 = 2.5;
	//skapar variabel 2 med värdet 8.
	var number2 = 8;
	//skapar en ny variabel av resultatet att multiplicera de båda redan skapta variablerna.
	var resultat = number1 * number2;
	//returnerar resultatet.
	return resultat;
	

}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	//Skapar en variabel av resultatet från redan skapta variablar.
	var resultat = tal1 - tal2;
	//returnerar resultatet.
	return resultat;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {
	
    //console.log(tal); 3.5
    //(Skapar variabel) använder Math.round för att avrunda parametern "tal".
    var resultat = Math.round(tal);
    //returnerar resultatet av det avrundna talet.
    return resultat;
}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	
	//console.log(text); erik
	//lägger ihop så jag kan få fram längden.
	var langd_pa_text = text.length;
	
	//console.log(langd_pa_text); 4
	//returnerar längden jag fått fram.
	return langd_pa_text;
	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {
	
	//console.log(text); tjolahopp
	//(skapar en ny variabel)av att ha fått fram näst sista bokstaven i parametern "text".
	var second_last_character = text.charAt(text.length-2)
	
	//console.log(second_last_character); p
	//returnerar variabeln med den näst sista bokstaven p.
	return second_last_character;
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
    //lagt in ett comma-tecken.
	var comma =","
	//plussar ihop allt som ska vara med i rätt ordning
	var full_name = surname+comma+" "+firstname;
	
	//console.log(full_name); "Karlsson, Greta"
	//returnerar fill_name
	return full_name;
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
    
	//console.log(words); "hej då!"
	//skapar en variabel av att leta upp det sista mellanslaget(space),
	var last_space = words.lastIndexOf(" ");
	//för att komma till ordet och inte få med mellanslaget används +1.
	var last_word = words.substr(last_space + 1);
	//kontrollerar att jag fått fram rätt ord
	console.log(last_word);
	//returnerar variabeln med de sista orden.
	return last_word;
	
}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	
	//Kollar ifall variabeln "number" är större eller mindre än 99.
	if(number > 99) {
	    return true;
	}
	
	else {
	    return false;
	}
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {
    //Kontrollerar ifall epost eller namn har mindre än 1.
	if (epost.length<1 || namn.length<1)
	{
	    return "Du har glömt att ange namn eller e-post";
	}
	//Kontrollerar ifall epost innehåller ett "@".
	else if (epost.indexOf("@")<0)
	{
	    return "Ange en e-postadress";
	    
	}
	//om allt är med så skickas medelandet.
    else
    {
        return  "Ditt meddelande skickas";
    }
}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
	//Tar arrayens längd delat med två, -1.
	var middle = (arr.length/2)-1;
	
	//Kör en math.round för att avrunda talet.
	var middle_number = Math.round(middle);
	
	//returnerar mitterstavärdet i arrayen.
	return arr[middle_number];
    
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
    //skapar en variabel med värdet 0.
    var summa = 0;
    //gör en for-loop med parametern "arr".
    for(var i = 0; i<arr.length; i++){
        summa = summa + arr[i];
        
        
    }   //skapar variabeln medel av for-loopens summa / arr-längd.
        var medel = summa/arr.length;
    //kollar så att jag fått fram något.
    //console.log(medel);
    //returnerar variabeln "medel".
    return medel;
    
}

    





















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

