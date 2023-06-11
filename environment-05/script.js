"use strict";

// Envo-5:

// 1. Fetch "runners.json" i script og gem det i en variabel.

window.addEventListener("load", start);

let runnerList = [];

async function start() {
  console.log("Hello");

  runnerList = await getRunners();
  console.log(runnerList);

  loopRunners();
}

async function getRunners() {
  const response = await fetch("runners.json");
  const data = await response.json();

  return data;
}

// 2. Vis de 3 hurtigste runners på podiet på hjemmesiden og deres resultater med 2 decimaltal.

function loopRunners() {
  document.querySelector("#gold").innerHTML = "";
  document.querySelector("#silver").innerHTML = "";
  document.querySelector("#bronze").innerHTML = "";
  document.querySelector("#runnerups-list").innerHTML = "";
  runnerList.sort((runnerA, runnerB) => runnerA.time - runnerB.time);
  // filterByAva();

  for (let i = 0; i < runnerList.length; i++) {
    const runner = runnerList[i];
    const runnerTime = runner.time.toString().substring(0, 5);
    console.log(runnerTime);
    if (i === 0) {
      const gold = /* html */ `
    <p id="gold-name">${runner.name}</p>
    <p id="gold-time">${runnerTime}</p>
    <div class="podium">1</div>
    `;
      document.querySelector("#gold").insertAdjacentHTML("beforeend", gold);
    } else if (i === 1) {
      const silver = /* html */ `
    <p id="silver-name">${runner.name}</p>
    <p id="silver-time">${runnerTime}</p>
    <div class="podium">2</div>
    `;
      document.querySelector("#silver").insertAdjacentHTML("beforeend", silver);
    } else if (i === 2) {
      const bronze = /* html */ `
    <p id="bronze-name">${runner.name}</p>
    <p id="bronze-time">${runnerTime}</p>
    <div class="podium">3</div>
    `;
      document.querySelector("#bronze").insertAdjacentHTML("beforeend", bronze);
    }
    if (i >= 4 && i <= 10) {
      const runnerUps = /* html */ `
      <li>${runner.name} - time: ${runnerTime}</li>
      `;
      document.querySelector("#runnerups-list").insertAdjacentHTML("beforeend", runnerUps);
    }
  }
}

// 3. Vis de næste 7 hurtigste runners efter 3. pladsen i runner-ups listen på
// hjemmesiden med deres resultater (2 decimaltal igen)


// 4. filtrer så kun folk med navne der er 'Ava White' 

function filterByAva() {
  runnerList = runnerList.filter(runner => runner.name === "Ava White")
}