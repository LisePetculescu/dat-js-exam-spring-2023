"use strict";

//  1. hent listen over runners og indsæt i en variabel

window.addEventListener("load", start);

let runnerList = [];

async function start() {
  console.log("Hello");

  runnerList = await getRunners();
  sortByTime();
  console.log(runnerList);

  showRunners();
}

async function getRunners() {
  const response = await fetch("runners.json");
  const data = await response.json();

  console.log(data);

  return data;

  //   runnerList.push(data);
  //   sortByTime();
  //   console.log(runnerList);
}

//  2. sorter listen hurtigst først

function sortByTime() {
  runnerList.sort((runnerA, runnerB) => runnerA.time - runnerB.time);
}

//  3. vis de tre hurtigste på podiet og resten i runner ups

function showRunners() {
  document.querySelector("#podium").innerHTML = "";
  document.querySelector("#runnerups-list").innerHTML = "";

  for (let i = 0; i < runnerList.length; i++) {
    const runner = runnerList[i];
    console.log(runner);
   

    if (i < 3) {
      showRunnerPodium(runner, i + 1);
    } else {
      showRunnerRunnerUps(runner);
    }
  }
}

function showRunnerPodium(runner, position) {
  // console.log("**********************************", runner.time);
   const runnerTimeSplit = runner.time.toString();
   const runnerTime = runnerTimeSplit.substring(0, 4);
  if (position === 2) {
    const silver = /* html */ `
         <div id="silver">
                    <p id="silver-name">${runner.name}</p>
                    <p id="silver-time">${runnerTime}</p>
                    <div class="podium">2</div>
                </div>
        `;
    document.querySelector("#podium").insertAdjacentHTML("beforeend", silver);
  }
  if (position === 1) {
    const gold = /* html */ `
         <div id="gold">
                    <p id="gold-name">${runner.name}</p>
                    <p id="gold-time">${runnerTime}</p>
                    <div class="podium">1</div>
                </div>
        `;
    document.querySelector("#podium").insertAdjacentHTML("beforeend", gold);
  }
  if (position === 3) {
    const bronze = /* html */ `
         <div id="bronze">
                    <p id="bronze-name">${runner.name}</p>
                    <p id="bronze-time">${runnerTime}</p>
                    <div class="podium">3</div>
                </div>
        `;
    document.querySelector("#podium").insertAdjacentHTML("beforeend", bronze);
  }
}

function showRunnerRunnerUps(runner) {
  const runnerTimeSplit = runner.time.toString();
  const runnerTime = runnerTimeSplit.substring(0, 4);
  console.log(runner);

  const html = /* html */ `
    <li>${runner.name} - time: ${runnerTime}</li>
    `;

  document.querySelector("#runnerups-list").insertAdjacentHTML("beforeend", html);
}
