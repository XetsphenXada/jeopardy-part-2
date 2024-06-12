// Do not change the import statement
import placeholderQuestions from "./jeopardy-XetsphenXada-master/scripts/placeholder-questions.js";

// Separate categories
const nature = placeholderQuestions.filter((item) => item.category === "Nature");

// Variables
let guessedCatOne = [];
let guessedCatTwo = [];
let guessedCatThree = [];
let guessedCatFour = [];
let guessedCatFive = [];
let guessedCatSix = [];
let randInt
let currQues

// Functions
function getRandomInt(min, max) {
    let minimum = Math.ceil(min);
    let maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

// Category Nature-100
document.getElementById("btnOneOne").addEventListener("click", () => {
    // Disable other buttons
    document.getElementById("btnOneTwo").disabled = true;
    document.getElementById("btnOneThree").disabled = true;
    document.getElementById("btnOneFour").disabled = true;
    document.getElementById("btnOneFive").disabled = true;
    document.getElementById("btnOneSix").disabled = true;
    document.getElementById("btnTwoOne").disabled = true;
    document.getElementById("btnTwoTwo").disabled = true;
    document.getElementById("btnTwoThree").disabled = true;
    document.getElementById("btnTwoFour").disabled = true;
    document.getElementById("btnTwoFive").disabled = true;
    document.getElementById("btnTwoSix").disabled = true;
    document.getElementById("btnThreeOne").disabled = true;
    document.getElementById("btnThreeTwo").disabled = true;
    document.getElementById("btnThreeThree").disabled = true;
    document.getElementById("btnThreeFour").disabled = true;
    document.getElementById("btnThreeFive").disabled = true;
    document.getElementById("btnThreeSix").disabled = true;
    document.getElementById("btnFourOne").disabled = true;
    document.getElementById("btnFourTwo").disabled = true;
    document.getElementById("btnFourThree").disabled = true;
    document.getElementById("btnFourFour").disabled = true;
    document.getElementById("btnFourFive").disabled = true;
    document.getElementById("btnFourSix").disabled = true;
    document.getElementById("btnFiveOne").disabled = true;
    document.getElementById("btnFiveTwo").disabled = true;
    document.getElementById("btnFiveThree").disabled = true;
    document.getElementById("btnFiveFour").disabled = true;
    document.getElementById("btnFiveFive").disabled = true;
    document.getElementById("btnFiveSix").disabled = true;

    // Hide current button
    document.getElementById("btnOneOne").hidden = true;

    // Display player turn
    let disFRTurn = document.getElementById("disFRTurn");
    disFRTurn.textContent = "PLAYER 1 TURN"

    // Grab random number for question
    randInt = getRandomInt(0,9);

    // Check if question was already used
    do {
        randInt = getRandomInt(0, 9);
    } while (guessedCatOne.includes(randInt));

    // Assign question
    currQues = nature[randInt].question;

    // Console log checks
    console.log(nature);
    console.log(randInt);
    console.log(currQues);
    guessedCatOne.push(randInt);

    // Display current question
    document.getElementById("oneOne").textContent = currQues;
});