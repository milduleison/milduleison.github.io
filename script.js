//console.log("labas!");

//eilutes komentaras

/*bloko komentaras




"use strict";


var arry = [1, "2", "trys", 4, (6+5)];


var numeris = prompt("Ivesk kalba nuo 1 iki 6");


/*{
    var vaisius = obuolys
    console.log("vaisus");
}

{
/    let uoga = "Braske"
    var rezultatas = uoga
    console.log{"uoga:", uoga}


{
    const GIMTADIENIS = "1989-02-05";
    console.log("Gimtadienis", GIMTADIENIS);
}

let gyvunas = "suo";
vardas = "brisius";
likimas = false;}
 let yraGyvunas = true;
 if (yraGyvunas===true){
 console.log("Yra gyvunas");
}*/


/*let skaicius = prompt("ivesk skaiciu");
console.log("Ivestas skaicius", skaicius);

if (skaicius >=10){
    
console.log("Ivestas skaicius, yra > 10");
} else{
    console.log("Ivestas skaicius, yra <= 10");

}

let metai = 2017;

if (metai === 2017){
console.log("Dabartiniai metai", metai);
}

// nauja

let metai = 2017;
let zinute;
let zinute = (metai === 2017) ? "Dabartiniai metai":"Praeiti metai";
if (metai === 2017){
    let zinute = "Dabartiniai metai";
}else {
    let zinute = "Praeitis";
}
console.log(zinute);



// boolen true folse values
let skaicius = 0;
let raide = "A";
let status = null;
let masyvas = [];

if (skaicius || skaicius === 0) {
    console.error("Tai skaicius");
}*/

/*let userName = prompt("Iveskite savo prisijungimo varda");
if(userName) {
userName = userName.toLowerCase();
}
let password;
if(userName === "admin") {
  let password = prompt("Iveskite slaptazodi");
    if(password === "The Master") {
      alert("Welcome!");
    } else if (password !== "The Master" && typeof password === "string") {
      alert("Wrong password");
    } else {
      alert("Canceled");
    }
} else if (userName !== "Admin" && typeof userName === "string") {
  alert("As taves nepazistu " + userName);
} else {
  alert("Viso gero");
}
*/
//  vardas.length); suskaiciuojam vardo ilgi simboliais
//  vardas[1] vardo antra raide(nes skaiciuojam nuo 0)
//  vardas[vardas.length -2] pries paskutine vardo raide

/*var vardas = prompt ("Iveskite varda");
console.log("Vardo ilgis:", vardas.length);

console.log("Antra vardo raide:", vardas[1]);
console.log("Pries paskutine  vardo raide:", vardas[vardas.length -2]);
console.log("pirma vardo raide:", vardas.charAt(0));*/


/*let skaicius = "55,48";
let rezultatas = skaicius.replace(',','.');
rezultatas = parseFloat(rezultatas);
console.log("skaicius yra ", rezultatas);*/

/*let cityRow = "VLN-Vilnius";
let code;
let city;
cityRow.split("-");
let cityArray = cityRow.split("-");
code = cityArray[0]
city = cityArray[1]
console.log("Miestas yra", city, "Kodas:", code);*/

/*let cityRow = "VLN-Vilnius";
let code;
let city;

code = cityRow.substr(0, 3);
city = cityRow.substr(4, cityRow.length -4);
console.log("Miestas yra", city, "Kodas:", code);
console.log("Miestas yra:", city, "Kodas:", code );

let arVilnius = cityRaw.indexOf("Vilnius");
if (arVilnius !== -1) {
    arVilnius = "TAIP";
} else {
    arVilnius = "NE";

    }
console.log(`ar miestas yra Vilnius: ${arVilnius}` );*/

let miestai =  ["Kaunas", "Vilnius", "Alytus", "Klaipeda"];

// Suzinoti, kiek yra miestu

document.write("miestu skaicius", miestai.length);
//pridekime nauja miesta

miestai.push("ukmerge");

//Pridekime kelis miestus

miestai.push("Palanga", "Panevezys");

//ismeskime pirma miesta bei ji issisaugokime i kintamaji pirmasmiesta "kaunas"

let pirmasmiestas = miestai.shift();

//Kaip sudinoti ar pirmas miestas yra Ukmerge
if(miestai[0] === "Ukmerge"){
    document.write("Pirmas miestas - Ukmerge");
}
else {
    document.write(miestai[0]);
}
// join(",");
//Ar tarp miestu yra miestas Kaunas  indexOf           


if (miestai.indexOf("Kaunas") >= 0) {
 document.write("Kaunas yra tarp isvardintu miestu");
} else {
 document.write("Tarp miestu Kauno nera");
}

//Atspausdinti masyve esancius elementus
document.write(miestai)
//Atspausdina stulpeliu
document.write("<br>")

//atspausdinti kaip ol arba ul(li) i html (SARASA)
/*document.write("<ol>")
document.write("<li>" + miestai[0] + "</li>");
document.write("<li>" + miestai[1] + "</li>");
document.write("<li>" + miestai[2] + "</li>");
document.write("<li>" + miestai[3] + "</li>");
document.write("<li>" + miestai[4] + "</li>");
document.write("<li>" + miestai[5] + "</li>");
document.write("</ol>");



// miestai.length nurodo, kad atspausdinti visus kiek yra, jei norim maziau i<6 
document.write("<ol>");*/
/*document.write("<ol>");
for (let i = 0; i < miestai.length; i++){
document.write("<li>" + miestai[i] + "</li>");
}
document.write("</ol>");

//Naudojam while

document.write("<ul>");
let l = 0;
while (l < miestai.length) {
document.write("<li>" + miestai[l] + "</li>");
l++; 
}
document.write("</ul>");*/

//paklauiam skaiciaus, kai iveda skaiciu, ji issaugome i masyva
//jei skaiciaus ne ivede, arba ivede ne skaiciu nutraukiamas ivedimas ir spausdinamas rezultatas


let skaiciumasyvas = [];
while (true) {
    let input = prompt("Koks tau skaicius patinka???");
    let skaicius = parseFloat(input); //tai ka zmogus ivede padare skaiciumi
    if(!isNaN(skaicius)){
      skaiciumasyvas.push(skaicius);
    } else {
        break;
    }

}



