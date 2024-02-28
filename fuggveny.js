import { CIPOLISTA } from "./adat.js";
console.log(CIPOLISTA)

export function listaConsolraIr(lista){

    for (let i = 0; i < lista.length; i++) {
        console.log(`Típus: ${lista[i].tipus}, ár: ${lista[i].ar}`);
    }
}

export function felsorolasOsszeallit(lista){

    let txt = "<ul>";
    for (let i = 0; i < lista.length; i++) {
    txt += `<li> Típus: ${lista[i].tipus}, ár: ${lista[i].ar} </li>`
    
    }
    txt += "</ul>";

    console.log(txt);
    return txt
}

export function div_termek(lista){
    
    let box = "";
    for (let i = 0; i < lista.length; i++) {
    box += "<div class='tarolo'>"
    box += `<h3> ${lista[i].tipus} </h3>`
    box += `<p> ${lista[i].szin} </p>`
    box += `<p> ${lista[i].ar} </p>`

    box += "</div>";
    }

    console.log(box);
    return box

}

export function osszeg(lista){
    let ar = "";
    for (let i = 0; i < lista.length; i++) {
        
    }

    console.log(ar);
    return ar

}

export function legdragabb(lista){
    let max = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[max].ar < lista[i].ar){
            max = i;
        }
    }
    return max

}

export function koromcipodb(lista){
    let db = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[db].nev === "körömcipő"){
            db++;
        }
    }
    return db
}
