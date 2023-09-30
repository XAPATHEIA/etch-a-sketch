let gridContainer = document.getElementById("grid-container");
console.log(gridContainer)

for(i = 0; i < 16; i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("gridElement");
    gridContainer.appendChild(newDiv);
}