/*
    Keep track of the value of both textfields

    Write a text if the values are the same
*/
import { useState } from 'react'
import './Email.css'

function Email() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const inputChange = (event) => {  
     
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {  
     
        setInputAgain(event.target.value)
    }

    const compareTexts = () => {
        if (input === inputAgain){
            return "Same"
        } else {
            return "Not the same"
        }
    }
 
    // Ctrl K C ===> to comment
    // Ctrl K U ===> to uncomment
    
    return (

        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange}  />
            </div>

            <h3>The value of "input": {input}</h3>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" value={inputAgain} onChange={inputAgainChange}  />
            </div>

            <h3>The value of "input": {inputAgain}</h3>

            <button>Ok</button> 

            <div className="result hidden">
                You entered ....
            </div>

            <h3>{compareTexts()}</h3>

            <h3>{input === inputAgain ? "Same" : "Not the same"}</h3>

        </article>
    )
}

export default Email