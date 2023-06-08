"use strict";

 // 1. tilføj atlet ud fra form

 window.addEventListener("load", start);

 let athleteList = [];

 function start() {
    console.log("Hello World");

    document.querySelector("#create-athlete-form").addEventListener("submit", addAthlete);

    showAthletes();
 }

 function addAthlete(event) {
    event.preventDefault();

    const form = event.target

    const newAthlete = {
        name: form.name.value,
        topSpeed: form.topSpeed.value
    }

    athleteList.push(newAthlete);
    console.log(athleteList);
    sortByTopSpeed();
    filterByTopSpeed();
    showAthletes();

 }

 // 2. vis atleter

function showAthletes() {
    document.querySelector("#athletes-list").innerHTML = "";
    for (const athlete of athleteList) {
        const html = /*html */ `
         <li>${athlete.name} - ${athlete.topSpeed}</li> 
        `;
        document.querySelector("#athletes-list").insertAdjacentHTML("beforeend", html);
    }
}

 // 3. sorter ud fra top speed 

 function sortByTopSpeed() {

    athleteList.sort((slow, fast) => fast.topSpeed - slow.topSpeed);

    // showAthletes();
 }

 function filterByTopSpeed() {

   athleteList = athleteList.filter(athlete => athlete.topSpeed <= 100 && athlete.topSpeed >= 50) 


 }
