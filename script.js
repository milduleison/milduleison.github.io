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

let cityRow = "VLN-Vilnius";
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
console.log(`ar miestas yra Vilnius: ${arVilnius}` );








