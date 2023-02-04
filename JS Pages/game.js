const axeBtn = document.getElementById("axe");
const boardGameConst = document.getElementById("game-board");
const pickAxeBtn = document.getElementById("pickaxe");
const shovelBtn = document.getElementById("shovel");

const tiles = ["cloud", "sky", "grass", "blocks", "wood", "dirt"];
let grassInventory = 0;
let blockInventory = 0;
let dirtInventory = 0;

const Counter = 0;

let selectedTool = "axe";
const sky = 1;
const grass = 2;
const blocks = 3;
const wood = 4;
const dirt = 5;
const initMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
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
      cell.classList.add(tiles[initMap[i][j]]);

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
        }

        if (
          selectedTool === "pickaxe" &&
          event.target.classList.contains("blocks")
        ) {
          event.target.classList.remove("blocks");
          event.target.classList.add("sky");
          blockInventory += 1;
        }

        if (
          selectedTool === "shovel" &&
          event.target.classList.contains("dirt")
        ) {
          event.target.classList.remove("dirt");
          event.target.classList.add("sky");
          dirtInventory += 1;
        }
      });
    }
  }
}

axeBtn.addEventListener("click", (event) => {
  event.preventDefault();

  selectedTool = "axe";
});
pickAxeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  selectedTool = "pickaxe";
});
shovelBtn.addEventListener("click", (event) => {
  event.preventDefault();

  selectedTool = "shovel";
});

drawMap();
