import { CIPOLISTA } from "./adat.js";
import { div_tabla, div_termek, felsorolasOsszeallit, koromcipodb, legdragabb, listaConsolraIr, osszeg } from "./fuggveny.js";

/* írd ki a consolra a cipőlista típusait! mehet mellé az ára is! */


listaConsolraIr(CIPOLISTA);

// HTML DOM-ba írjuk ki felsorolásba
// 1. megfogjuk a html megfelelő elemét
//const CIPOKELEM = document.getElementById("cipok");
const CIPOKELEM = document.querySelector("#cipok");
console.log(CIPOKELEM);

// 2. összeállítjuka html kódot
let txt = felsorolasOsszeallit(CIPOLISTA);

// 3. beletesszük az elembe
CIPOKELEM.innerHTML="<h3>Szép nap van, vegyünk cipőt!</h3>"
CIPOKELEM.innerHTML += txt;


const CIPODIV = document.querySelector("#dives");
let box = div_termek(CIPOLISTA);
CIPODIV.innerHTML += box;

const CIPOTABLA = document.querySelector("#tablazat");
let ar = osszeg(CIPOLISTA);
CIPOTABLA.innerHTML += `<p> Az összes termék ára: ${ar}</p>`;
let max = legdragabb(CIPOLISTA);
CIPOTABLA.innerHTML += `<p> A legdrágább termék neve: ${max}</p>`;
let db = koromcipodb(CIPOLISTA);
CIPOTABLA.innerHTML += `<p> Hány körömcipő van: ${db}</p>`