let disFRTurn = document.getElementById("disFRTurn");
let btnActive;
let scoreAdd;

function buttonClicked() {
    document.getElementById("btnOneOne").disabled = true;
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
    return
}

function buttonUnclicked() {
    document.getElementById("btnOneOne").disabled = false;
    document.getElementById("btnOneTwo").disabled = false;
    document.getElementById("btnOneThree").disabled = false;
    document.getElementById("btnOneFour").disabled = false;
    document.getElementById("btnOneFive").disabled = false;
    document.getElementById("btnOneSix").disabled = false;

    document.getElementById("btnTwoOne").disabled = false;
    document.getElementById("btnTwoTwo").disabled = false;
    document.getElementById("btnTwoThree").disabled = false;
    document.getElementById("btnTwoFour").disabled = false;
    document.getElementById("btnTwoFive").disabled = false;
    document.getElementById("btnTwoSix").disabled = false;
    
    document.getElementById("btnThreeOne").disabled = false;
    document.getElementById("btnThreeTwo").disabled = false;
    document.getElementById("btnThreeThree").disabled = false;
    document.getElementById("btnThreeFour").disabled = false;
    document.getElementById("btnThreeFive").disabled = false;
    document.getElementById("btnThreeSix").disabled = false;

    document.getElementById("btnFourOne").disabled = false;
    document.getElementById("btnFourTwo").disabled = false;
    document.getElementById("btnFourThree").disabled = false;
    document.getElementById("btnFourFour").disabled = false;
    document.getElementById("btnFourFive").disabled = false;
    document.getElementById("btnFourSix").disabled = false;

    document.getElementById("btnFiveOne").disabled = false;
    document.getElementById("btnFiveTwo").disabled = false;
    document.getElementById("btnFiveThree").disabled = false;
    document.getElementById("btnFiveFour").disabled = false;
    document.getElementById("btnFiveFive").disabled = false;
    document.getElementById("btnFiveSix").disabled = false;
    return
}

function nullContent() {
    document.getElementById("OneOne").textContent = null;
    document.getElementById("OneTwo").textContent = null;
    document.getElementById("OneThree").textContent = null;
    document.getElementById("OneFour").textContent = null;
    document.getElementById("OneFive").textContent = null;
    document.getElementById("OneSix").textContent = null;

    document.getElementById("TwoOne").textContent = null;
    document.getElementById("TwoTwo").textContent = null;
    document.getElementById("TwoThree").textContent = null;
    document.getElementById("TwoFour").textContent = null;
    document.getElementById("TwoFive").textContent = null;
    document.getElementById("Six").textContent = null;
    
    document.getElementById("ThreeOne").textContent = null;
    document.getElementById("ThreeTwo").textContent = null;
    document.getElementById("ThreeThree").textContent = null;
    document.getElementById("ThreeFour").textContent = null;
    document.getElementById("ThreeFive").textContent = null;
    document.getElementById("ThreeSix").textContent = null;

    document.getElementById("FourOne").textContent = null;
    document.getElementById("FourTwo").textContent = null;
    document.getElementById("FourThree").textContent = null;
    document.getElementById("FourFour").textContent = null;
    document.getElementById("FourFive").textContent = null;
    document.getElementById("FourSix").textContent = null;

    document.getElementById("FiveOne").textContent = null;
    document.getElementById("FiveTwo").textContent = null;
    document.getElementById("FiveThree").textContent = null;
    document.getElementById("FiveFour").textContent = null;
    document.getElementById("FiveFive").textContent = null;
    document.getElementById("FiveSix").textContent = null;
    return
};

// Category 1-1
document.getElementById("btnOneOne").addEventListener("click", () => {
    scoreAdd = 100;
    // document.getElementsByClassName("btnCategory").disabled = true;
    buttonClicked();
    document.getElementById("guess").disabled = false;
    document.getElementById("pass").disabled = false;
    document.getElementById("btnOneOne").hidden = true;
    document.getElementById("oneOne").textContent = "Test";
});

// Category 2-1
document.getElementById("btnOneTwo").addEventListener("click", () => {
    scoreAdd = 100;
    buttonClicked();
    document.getElementById("guess").disabled = false;
    document.getElementById("pass").disabled = false;
    document.getElementById("btnOneTwo").hidden = true;
    document.getElementById("oneTwo").textContent = "Test";
});

document.getElementById("pass").addEventListener("click", () => {
    document.getElementById("oneOne").textContent = null;
    document.getElementById("oneTwo").textContent = null;
    nullContent();
    buttonUnclicked();
    document.getElementById("guess").disabled = true;
    // document.getElementById("btnFROneOne").hidden = false;
    // document.getElementById("btnFROneOne").disabled = false;
    // document.getElementById("btnFROneTwo").disabled = false;
    // document.getElementById("btnFROneThree").disabled = false;
    // document.getElementById("btnFROneFour").disabled = false;
    // document.getElementById("btnFROneFive").disabled = false;
    // document.getElementById("btnFROneSix").disabled = false;

    // document.getElementById("btnFRTwoOne").disabled = false;
    // document.getElementById("btnFRTwoTwo").disabled = false;
    // document.getElementById("btnFRTwoThree").disabled = false;
    // document.getElementById("btnFRTwoFour").disabled = false;
    // document.getElementById("btnFRTwoFive").disabled = false;
    // document.getElementById("btnFRTwoSix").disabled = false;
    
    // document.getElementById("btnFRThreeOne").disabled = false;
    // document.getElementById("btnFRThreeTwo").disabled = false;
    // document.getElementById("btFRThreeThree").disabled = false;
    // document.getElementById("btnFRThreeFour").disabled = false;
    // document.getElementById("btnFRThreeFive").disabled = false;
    // document.getElementById("btnFRThreeSix").disabled = false;

    // document.getElementById("btnFRFourOne").disabled = false;
    // document.getElementById("btnFRFourTwo").disabled = false;
    // document.getElementById("btnFRFourThree").disabled = false;
    // document.getElementById("btnFRFourFour").disabled = false;
    // document.getElementById("btnFRFourFive").disabled = false;
    // document.getElementById("btnFRFourSix").disabled = false;

    // document.getElementById("btnFRFiveOne").disabled = false;
    // document.getElementById("btnFRFiveTwo").disabled = false;
    // document.getElementById("btnFRFiveThree").disabled = false;
    // document.getElementById("btnFRFiveFour").disabled = false;
    // document.getElementById("btnFRFiveFive").disabled = false;
    // document.getElementById("btnFRFiveSix").disabled = false;
});