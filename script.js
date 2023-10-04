let gridContainer = document.getElementById("grid-container");
let slider = document.getElementById('slider'); // assigning the slider to a variable to retrieve its value
let defaultNumberGrids = 16; // default size of the board
let defaultBoardSize = 576;


// function will draw the board depending on value of slider
function drawBoard(numberOfGrids) {
    for(i = 0; i < Math.pow(numberOfGrids, 2); i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("gridElement");
        gridContainer.appendChild(newDiv);
    }   
}


drawBoard(defaultNumberGrids);


// selects all the grids, changes their dimensions to fit neatly within the board
function changeGridSizes(numberOfGrids) {
    const grids = document.querySelectorAll(".gridElement");
    grids.forEach((grid) => {
        grid.style.width = Math.floor(defaultBoardSize / numberOfGrids) + "px";
        grid.style.height = Math.floor(defaultBoardSize / numberOfGrids) + "px";
    });
}

// initalize slider display
sliderDisplay(slider.value);

// listens to the slider change and updates board size
slider.addEventListener('input', function() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    drawBoard(slider.value);
    sliderDisplay(slider.value);
    changeGridSizes(slider.value);
} 
)

// function to dynamically change slider value display
function sliderDisplay(sliderValue) {
    let sliderValueElement = document.getElementById("slider-value");
    sliderValueElement.innerText = "Number of Grids: " + sliderValue;
}
