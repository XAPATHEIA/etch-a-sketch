let gridContainer = document.getElementById("grid-container");
let slider = document.getElementById('slider'); // assigning the slider to a variable to retrieve its value
let defaultValue = 16; // default size of the board


// function will draw the board depending on number of slider
function drawBoard(numberOfGrids) {
    for(i = 0; i < numberOfGrids; i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("gridElement");
        gridContainer.appendChild(newDiv);
    }   
}


drawBoard(defaultValue);

// listens to the slider change and updates board size
slider.addEventListener('input', function() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    drawBoard(slider.value);
} 
)


