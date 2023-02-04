const axeBtn = document.getElementById("axe");
const boardGameConst = document.getElementById("game-board");
const pickAxeBtn = document.getElementById("pickaxe");
const shovelBtn = document.getElementById("shovel");
const resetBtn = document.getElementById("reset");

const grassCount = document.getElementById("grassCount");
const blocksCount = document.getElementById("blocksCount");
const dirtCount = document.getElementById("dirtCount");

const grassCountContainer = document.getElementById("garssCountContainer");
const blocksCountContainer = document.getElementById("blocksCountContainer");
const dirtCountContainer = document.getElementById("dirtCountContainer");
const theme = document.getElementById("theme");

const tiles = ["cloud", "sky", "grass", "blocks", "wood", "dirt", "flowers"];
const tiles1 = [
  "cloud",
  "sky1",
  "grass1",
  "blocks1",
  "wood1",
  "dirt1",
  "flowers1",
];

let grassInventory = 0;
let blocksInventory = 0;
let dirtInventory = 0;
let themeNum = 0;
const Counter = 0;

let selectedTool = "axe";
const sky = 1;
const grass = 2;
const blocks = 3;
const wood = 4;
const dirt = 5;
const flowers = 6;

const initMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
  [1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
  [1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3],
  [1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3],
  [1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

function drawMap() {
  for (let i = 0; i < initMap.length; i++) {
    for (let j = 0; j < initMap[i].length; j++) {
      const cell = document.createElement("div");

      cell.style.gridRowStart = i + 1;
      cell.style.gridColumnStart = j + 1;
      if (themeNum === 0) {
        cell.classList.add(tiles[initMap[i][j]]);
      } else if (themeNum === 1) {
        cell.classList.add(tiles1[initMap[i][j]]);
      }

      boardGameConst.appendChild(cell);

      cell.addEventListener("click", (event) => {
        event.preventDefault();

        if (
          selectedTool === "axe" &&
          event.target.classList.contains("grass")
        ) {
          event.target.classList.remove("grass");
          event.target.classList.add("sky");
          grassInventory += 1;
          grassCount.innerText = grassInventory;
        }

        if (
          selectedTool === "axe" &&
          event.target.classList.contains("grass1")
        ) {
          event.target.classList.remove("grass1");
          event.target.classList.add("sky1");
          grassInventory += 1;
          grassCount.innerText = grassInventory;
        }

        if (
          selectedTool === "pickaxe" &&
          event.target.classList.contains("blocks")
        ) {
          event.target.classList.remove("blocks");
          event.target.classList.add("sky");
          blocksInventory += 1;
          blocksCount.innerText = blocksInventory;
        }
        if (
          selectedTool === "pickaxe" &&
          event.target.classList.contains("blocks1")
        ) {
          event.target.classList.remove("blocks1");
          event.target.classList.add("sky1");
          blocksInventory += 1;
          blocksCount.innerText = blocksInventory;
        }

        if (
          selectedTool === "shovel" &&
          event.target.classList.contains("dirt")
        ) {
          event.target.classList.remove("dirt");
          event.target.classList.add("sky");
          dirtInventory += 1;
          dirtCount.innerText = dirtInventory;
        }

        if (
          selectedTool === "shovel" &&
          event.target.classList.contains("dirt1")
        ) {
          event.target.classList.remove("dirt1");
          event.target.classList.add("sky1");
          dirtInventory += 1;
          dirtCount.innerText = dirtInventory;
        }

        if (
          selectedTool === "grassCount" &&
          event.target.classList.contains("sky") &&
          grassInventory > 0
        ) {
          event.target.classList.remove("sky");
          event.target.classList.add("grass");
          grassInventory -= 1;
          grassCount.innerText = grassInventory;
        }

        if (
          selectedTool === "grassCount" &&
          event.target.classList.contains("sky1") &&
          grassInventory > 0
        ) {
          event.target.classList.remove("sky1");
          event.target.classList.add("grass1");
          grassInventory -= 1;
          grassCount.innerText = grassInventory;
        }

        if (
          selectedTool === "blocksCount" &&
          event.target.classList.contains("sky") &&
          blocksInventory > 0
        ) {
          event.target.classList.remove("sky");
          event.target.classList.add("blocks");
          blocksInventory -= 1;
          blocksCount.innerText = blocksInventory;
        }

        if (
          selectedTool === "blocksCount" &&
          event.target.classList.contains("sky1") &&
          blocksInventory > 0
        ) {
          event.target.classList.remove("sky1");
          event.target.classList.add("blocks1");
          blocksInventory -= 1;
          blocksCount.innerText = blocksInventory;
        }

        if (
          selectedTool === "dirtCount" &&
          event.target.classList.contains("sky") &&
          dirtInventory > 0
        ) {
          event.target.classList.remove("sky");
          event.target.classList.add("dirt");
          dirtInventory -= 1;
          dirtCount.innerText = dirtInventory;
        }

        if (
          selectedTool === "dirtCount" &&
          event.target.classList.contains("sky1") &&
          dirtInventory > 0
        ) {
          event.target.classList.remove("sky1");
          event.target.classList.add("dirt1");
          dirtInventory -= 1;
          dirtCount.innerText = dirtInventory;
        }
      });
    }
  }
}

axeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.target.classList.add("selected");
  shovelBtn.classList.remove("selected");
  pickAxeBtn.classList.remove("selected");

  selectedTool = "axe";
});
pickAxeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.target.classList.add("selected");
  axeBtn.classList.remove("selected");
  shovelBtn.classList.remove("selected");
  selectedTool = "pickaxe";
});
shovelBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.target.classList.add("selected");
  axeBtn.classList.remove("selected");
  pickAxeBtn.classList.remove("selected");

  selectedTool = "shovel";
});

grassCountContainer.addEventListener("click", (event) => {
  event.preventDefault();
  selectedTool = "grassCount";
});

blocksCountContainer.addEventListener("click", (event) => {
  event.preventDefault();
  selectedTool = "blocksCount";
});

dirtCountContainer.addEventListener("click", (event) => {
  event.preventDefault();
  selectedTool = "dirtCount";
});

function reset() {
  drawMap();
  grassInventory = 0;
  blocksInventory = 0;
  dirtInventory = 0;
  grassCount.innerText = grassInventory;
  blocksCount.innerText = blocksInventory;
  dirtCount.innerText = dirtInventory;

  selectedTool = null;
}
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  reset();
});

theme.addEventListener("click", (event) => {
  event.preventDefault();
  if (themeNum === 1) {
    themeNum = 0;
    grassCountContainer.src = "../images/grass.png";
    dirtCountContainer.src = "../images/dirt2.png";
    blocksCountContainer.src = "../images/blocks.png";
  } else if (themeNum === 0) {
    themeNum = 1;
    grassCountContainer.src = "../images/grass.png";
    dirtCountContainer.src = "../images/dirt.png";
    blocksCountContainer.src = "../images/blocks1.png";
  }
  reset();
});
drawMap();
