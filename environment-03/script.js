"use strict";

import { events } from "./data.js";

window.addEventListener("load", start);

function start() {
    console.log(events);

    showEvents();
}

function showEvents() {
    document.querySelector("#students-list").innerHTML = "";

    events.sort(sortByDate);

    for (const event of events) {
        console.log(event);
        showEvent(event)
    }
}

function showEvent(event) {
    const html = /*html */ `
    
    <li>Title: ${event.title}</li>
    <li>Description: ${event.description}</li>
    <li>Date: ${event.date}</li>
    <br>
    `
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", html);
}

function sortByDate(a, b) {

    const dateOne = new Date(a.date).getTime();
    const dateTwo = new Date(b.date).getTime();

    return dateOne - dateTwo;

}

