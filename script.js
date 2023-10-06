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

/* TODO:
    - Add event listener so that whenever a colouring choice is selected, the grid will
    respond to that change, do it so that it has real-time changes, mid colouring
    - Add function that will change grid background colours to either black, constantly changing
    shades of black or random
    - Create an event listener/function that clears grid colouring depending on whether the mouse leaves
    the grid or if another colouring choice/board size is selected, idk which is better yet.
*/





function changeColour(element, selection) {
    if (selection == 'black') {
        console.log("i'm hereaaa");
        element.style.background = selection;
    } else if (selection == 'grayscale') {
        element.style.background = selection;
    } else if (selection == 'random') {
        return null;
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
        colourGrids();
    })
})

