const result = document.querySelector(".train .result")
const from = document.querySelector(".train .from")
const to = document.querySelector(".train .to")
const okbutton = document.querySelector(".train button")

let wayChoice = null

update()

function update() {
    console.log("update")

    hideResultArea()

    // Disable all
    from.disabled = true
    to.disabled = true
    okbutton.disabled = true

    // if (wayChoice == null) {
    //     // Disable the date pickers and ok button
    // }

    if (wayChoice == "oneway") {
        // Enable the first date picker
        from.disabled = false

        // Show the ok-button if there are some value in first date picker

        // if (from.value == "") {
        //     okbutton.disabled = true
        // } else {
        //     okbutton.disabled = false
        // }

        okbutton.disabled = from.value == ""

    }

    if (wayChoice == "roundtrip"){
        to.disabled = false
        from.disabled = false

        okbutton.disabled = from.value == "" || to.value == ""

        if (to.value != "" && to.value < from.value){
            to.value = from.value
        }

    }

}

function wayChange(way){
    console.log(`You want to change to "${way}"`)
    wayChoice = way // oneway or roundtrip
    update()
}

function makeChoice() {
    console.log("Make choice")

    showResultArea()
    
    if (wayChoice == "oneway"){
        result.innerHTML = `Du har valt att resa <b>enkelresa</b> med utresa <b>${from.value}</b>`
    }

    if (wayChoice == "roundtrip"){
        result.innerHTML = `Du har valt att resa <b>tur-o-retur</b> med utresa <b>${from.value}</b> och hemresa <b>${to.value}</b>`
    }

}

function showResultArea() {
    result.classList.remove("hide")
}

function hideResultArea() {
    result.classList.add("hide")
}