"use strict";

//  1. hent listen postnumre og gem i en variabel

window.addEventListener("load", start);

let postnummerListe = [];
const adressList = [];

async function start() {
    console.log("Hello");

    postnummerListe = await getPostnumre();

    document.querySelector("#address-form").addEventListener("submit", saveInput);
    document.querySelector("#postnr").addEventListener("keyup", autofillBy)
}

async function getPostnumre() {

    const response = await fetch("postnumre.json");
    const data = await response.json();

    console.log(data);
    return data;
}

// 2. gem input fra formen i en liste

function saveInput(event) {
    event.preventDefault();

    const form = event.target;

    const newAdress = {
        navn: form.navn.value,
        adresse: form.adresse.value,
        postnr: form.postnr.value,
        by: form.by.value,
        email: form.email.value,
        nyhedsbrev: form.nyhedsbrev.checked
    }

    adressList.push(newAdress);
    console.log(adressList);

}

// 3. få formen til at udfylde by automatisk på baggrund af postnummeret

function autofillBy(event) {

    const postnrInput = event.target.value;
    // console.log(postnummer); 

    for (const postnummer of postnummerListe) {
        if (postnummer.postnr.includes(postnrInput)) {
            const by = postnummer.by;
            document.querySelector("#by").value = by;
        }
    }
}