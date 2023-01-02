// Interaction with rate buttons and pushing rate inside sentence 
// ==============================================================

let ratingStates = document.querySelectorAll(".rating-state-btn");
let rateSelected = document.getElementById("rating-component-after__state-result-sentence__rate-selected");

ratingStates.forEach(rate => {
    rate.addEventListener("click", () => {
        rateSelected.innerHTML = "You selected " + rate.value + " out of 5";
        ratingStates.forEach(btn => btn.style.backgroundColor = "hsl(213, 19%, 18%)");
        rate.style.backgroundColor = "hsl(217, 12%, 63%)"; 
        rate.style.color = "hsl(0, 0%, 100%)";
    });
});

// Change of component state after pressing submit button =======
// ==============================================================

let componentStateBefore = document.getElementById("rating-component-before");
let componentStateAfter = document.getElementById("rating-component-after");
let submitRate = document.getElementById("submit");
let submitMsg = document.getElementById("submit-pop-up-msg");

submitRate.addEventListener("click", () => {
    if (rateSelected.innerHTML) {
        componentStateBefore.style.display = "none";
        componentStateAfter.style.display = "block";
    } else {submitMsg.style.display = "block"};
});
