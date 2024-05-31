const atomicNo = document.getElementById("atomicNo");
const boilingPoint = document.getElementById("boiling-point");
const meltingPoint = document.getElementById("melting-point");
const standardEnthalpy = document.getElementById("Standard-enthalpy");
const Nabtn = document.getElementById("na");
const Kbtn = document.getElementById("k");
const Rbbtn = document.getElementById("rb");
const Csbtn = document.getElementById("cs");
const libtn = document.getElementById("li");
const pElement = document.getElementById("elementSign");
const buttons = document.getElementsByTagName("button");


function liShow(){
pElement.innerHTML = "Li";
atomicNo.innerHTML = 3;
boilingPoint.innerHTML = 1615;
meltingPoint.innerHTML = 4535;
standardEnthalpy.innerHTML = "3.0";
libtn.classList.add("coloured");
Nabtn.classList.remove("coloured");
Kbtn.classList.remove("coloured");
Rbbtn.classList.remove("coloured");
Csbtn.classList.remove("coloured");

};
function naShow(){
pElement.innerHTML = "Na";
atomicNo.innerHTML = 11;
boilingPoint.innerHTML = 1156;
meltingPoint.innerHTML = 371;
standardEnthalpy.innerHTML = "2.6";	
libtn.classList.remove("coloured");
Nabtn.classList.add("coloured");
Kbtn.classList.remove("coloured");
Rbbtn.classList.remove("coloured");
Csbtn.classList.remove("coloured");

};
function kShow(){
pElement.innerHTML = "K";
atomicNo.innerHTML = 19;
boilingPoint.innerHTML = 1032;
meltingPoint.innerHTML = 336;
standardEnthalpy.innerHTML = "2.3";	
libtn.classList.remove("coloured");
Nabtn.classList.remove("coloured");
Kbtn.classList.add("coloured");
Rbbtn.classList.remove("coloured");
Csbtn.classList.remove("coloured");

};
function rbShow(){
pElement.innerHTML = "Rb";
atomicNo.innerHTML = 37;
boilingPoint.innerHTML = 959;
meltingPoint.innerHTML = 312;
standardEnthalpy.innerHTML = "2.2";	
libtn.classList.remove("coloured");
Nabtn.classList.remove("coloured");
Kbtn.classList.remove("coloured");
Rbbtn.classList.add("coloured");
Csbtn.classList.remove("coloured");

};
function csShow(){
pElement.innerHTML = "Cs";
atomicNo.innerHTML = 55;
boilingPoint.innerHTML = 942;
meltingPoint.innerHTML = 301.1;
standardEnthalpy.innerHTML = "2.1";
libtn.classList.remove("coloured");
Nabtn.classList.remove("coloured");
Kbtn.classList.remove("coloured");
Rbbtn.classList.remove("coloured");
Csbtn.classList.add("coloured");	

};
