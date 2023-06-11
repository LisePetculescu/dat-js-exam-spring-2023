"use strict";

// Envo-7:
// 1. Lav en tom liste og en funktion, der kan tilføje rum til listen gennem formen.

window.addEventListener("load", start);

const roomList = [];

function start() {
  console.log("Hello");

  document.querySelector("#create-room-form").addEventListener("submit", createRoom);
}

function createRoom(event) {
  event.preventDefault();

  const form = event.target;

  const newRoom = {
    name: form.name.value,
    width: form.width.value,
    length: form.length.value,
    calculated: form.width.value * form.length.value
  };

  roomList.push(newRoom);
  console.log(roomList);
  sortByChoice()
  loopRooms();
}

// 2. Vis rummene på hjemmesiden. Længde, vidde og areal skal fremgå.

function loopRooms() {
  document.querySelector("#rooms-table").innerHTML = "";
  for (const room of roomList) {
    showRoom(room);
  }
}

function showRoom(room) {
  const html = /* html */ `
      <tr>
         <td>${room.name}:</td>
         <td>${room.width} m</td>
         <td>${room.length} m</td>
         <td>${room.calculated} m^2 area</td>
    <tr>
    `;

    document.querySelector("#rooms-table").insertAdjacentHTML("beforeend", html);
}

// 3. Lav EN funktion, der kan sortere rummene efter vidde, længde og areal. Opdater
// visningen dernæst. (Kan testes i konsollen på browseren)

function sortByChoice(choice) {
    roomList.sort((roomA, roomB) => roomA[choice] - roomB[choice])
    loopRooms();

}
