const result = document.querySelector(".result")
const allStars = document.querySelectorAll(".movie .rating img")

let chosenStars = 0

function hoverStar(number) {
    lightAllStarsUpTo(number)
}

function leftStar() {
    lightAllStarsUpTo(chosenStars)
}

function clickStar(number) {
    /* insert code here */

    chosenStars = number
}

function resetStars() {
    /* insert code here */
}

function lightAllStarsUpTo(number) {


    for (let i = 1; i <= number; i++) {
        allStars[i - 1].src = "star.png"
    }

    /* insert code here */
}