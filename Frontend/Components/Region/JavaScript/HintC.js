
// Current solution: 

const municipality = document.querySelector(".region .municipality")
const county = document.querySelector(".region .county")

const countyData = [

    { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    { countyCode: "03", countyName: "Uppsala län", municipalities: [{ code: "05", name: "Håbo" }, { code: "19", name: "Älvkarleby" }, { code: "30", name: "Knivsta" }] },
    { countyCode: "04", countyName: "Södermanlands län", municipalities: [{ code: "28", name: "Vingåker" }, { code: "61", name: "Gnesta" }, { code: "80", name: "Nyköping" }] },
    { countyCode: "05", countyName: "Östergötlands län", municipalities: [{ code: "09", name: "Ödeshög" }, { code: "12", name: "Ydre" }, { code: "13", name: "Kinda" }] }

]

renderCounty()

function renderCounty() {
    console.log("renderCounty")
    let html = `<option value="">Välj län...</option>`

    for(let c of countyData){

        html += `<option value="${c.countyCode}">${c.countyName}</option>`
    }

    county.innerHTML = html
}

function renderMunicipality() {

    if (county.value == "") {
        municipality.classList.add("hide")
        return
    }

    let html= 
        `<option value="">Välj kommun...</option>
        `

    // Find the right county in "countyData" 
    const selectedCounty =  countyData.find(x => x.countyCode == county.value)

    for(let m of selectedCounty.municipalities) {
        
        const municipalityFullCode = selectedCounty.countyCode + m.code
        
        html += `<option value="${m.code}">${municipalityFullCode} ${m.name}</option>`

    }

    municipality.classList.remove("hide")
    municipality.innerHTML = html
}

function countyChanged() {

    console.log("country changed to " + county.value)

    renderMunicipality()
}

function municipalityChanged() {
  
    console.log("municipality changed!")

    /* todo: add code here */    

}