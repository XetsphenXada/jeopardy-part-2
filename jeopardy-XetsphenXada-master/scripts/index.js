// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

document.getElementById("btnFROneOne").addEventListener("click", () => {
    document.getElementById("btnFROneTwo").disabled = true;
    document.getElementById("btnFROneThree").disabled = true;
    document.getElementById("btnFROneFour").disabled = true;
    document.getElementById("btnFROneFive").disabled = true;
    document.getElementById("btnFROneSix").disabled = true;
})