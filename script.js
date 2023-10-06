let gridContainer = document.getElementById("grid-container");
let slider = document.getElementById('slider'); // assigning the slider to a variable to retrieve its value
let defaultNumberGrids = 16; // default size of the board
let defaultBoardSize = 576;


/* grids is a "let" because the variable changes in real-time, whenever the board is re-drawn,
it will recreate all the divs, so this grids variable will be pointing to something
that no longer exists. It needs to be updated real time whenever the grids are re-created
*/

let grids = document.querySelectorAll(".gridElement");
const choices = document.querySelectorAll(".colour-choice");
let colourChoice = 'black';


// function will draw the board depending on value of slider
function drawBoard(numberOfGrids) {
    for(i = 0; i < Math.pow(numberOfGrids, 2); i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("gridElement");
        gridContainer.appendChild(newDiv);
    }   
}

// initalizes the first board
drawBoard(defaultNumberGrids);
colourGrids();


// selects all the grids, changes their dimensions to fit neatly within the board
function changeGridSizes(numberOfGrids) {
    const grids = document.querySelectorAll(".gridElement");
    grids.forEach((grid) => {
        grid.style.width = Math.floor(defaultBoardSize / numberOfGrids) + "px";
        grid.style.height = Math.floor(defaultBoardSize / numberOfGrids) + "px";
    });
}

// function that re-draws the board
function redrawBoard() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    drawBoard(slider.value);
    sliderDisplay(slider.value);
    changeGridSizes(slider.value);
    colourGrids();
}


// initalize slider display
sliderDisplay(slider.value);

// listens to the slider change and updates board size
slider.addEventListener('input', function() {
    redrawBoard();
} 
)


// function to dynamically change slider value display
function sliderDisplay(sliderValue) {
    let sliderValueElement = document.getElementById("slider-value");
    sliderValueElement.innerText = "Number of Grids: " + sliderValue;
}

function changeColour(element, selection) {
    if (selection == 'black') {
        console.log("i'm here 1");
        element.style.background = selection;
    } else if (selection == 'grayscale') {
        var currentRGB = getComputedStyle(element).backgroundColor;
        var rgbArray = currentRGB.match(/\d+/g);

        if (rgbArray !== null && rgbArray.length === 3) {
            // Parse the components as integers
            var r = parseInt(rgbArray[0]);
            var g = parseInt(rgbArray[1]);
            var b = parseInt(rgbArray[2]);

            r = Math.max(0, r - 25); // Ensure it doesn't go below 0
            g = Math.max(0, g - 25);
            b = Math.max(0, b - 25);

            element.style.background = `rgb(${r}, ${g}, ${b})`;
        }

    } else if (selection == 'random') {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        element.style.background = `rgb(${r}, ${g}, ${b})`;
    }
}


// function makes sure its pointing to correct grid elements first before invoking colour change
function colourGrids() {
    let grids = document.querySelectorAll(".gridElement");
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", (event) => {
            changeColour(grid, colourChoice);
        });
    })
}


choices.forEach((choice) => {
    choice.addEventListener('input', function() {
        redrawBoard();
        colourChoice = choice.value;
        console.log(colourChoice);
    })
})

