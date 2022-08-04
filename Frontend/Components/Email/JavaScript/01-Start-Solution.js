function sendForm() {

    // console.log('Hello')

    // Get all "inputEmail"-elements inside of "email". Pick the first
    // const inputEmail = document.querySelectorAll(".email .inputEmail")[0]

    // Get all "inputEmail"-elements. Pick the first
    // const inputEmail = document.querySelectorAll(".inputEmail")[0]

    // Pick the first "inputEmail"-elements.
    const inputEmail = document.querySelector(".inputEmail")

    // Print the element
    // console.log("inputEmail", inputEmail)

    // Print the value
    // console.log("The value", inputEmail.value)

    const inputEmailAgain = document.querySelector(".inputEmailAgain")

    const resultArea = document.querySelector(".result")

    resultArea.classList.remove("hidden")
    resultArea.classList.remove("sad")
    resultArea.classList.remove("happy")

    if (inputEmail.value === "") {
        resultArea.classList.add("sad")
        resultArea.innerText = "Empty email address"
        return 
    }

    if (isValidEmailAddress(inputEmail.value)) {

        if (inputEmail.value === inputEmailAgain.value) {
            resultArea.classList.add("happy")
            resultArea.innerText = "The email addresses are the same :)"
        } else {
            resultArea.classList.add("sad")
            resultArea.innerText = "Not the same"
        }

    } else {
        resultArea.classList.add("sad")
        resultArea.innerText = "Invalid email address"
    }

}

function isValidEmailAddress(email){
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null
};
