/*
    Keep track on what the user writes in the textbox (this is saved in "state")
   
    The GUI is automatically updated when the state is changed
*/
import { useState } from 'react'
import './Email.css'

function Email() {

    const [input, setInput] = useState("")

    /*
    When you want to change a state, don't write

        input = "aaa"
        
    ...instead write

        setInput("aaa")

    */

    const inputChange = (event) => {
        // event.target =>       that's "input"
        // event.target.value => that's the entered value in the box

        // Let's change "input" to the value in the box       
        
        setInput(event.target.value)

        // Think
        // input = event.target.value
    }

    return (

        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange}  />
            </div>

            <h3>The value of "input": {input}</h3>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" />
            </div>

            <button>Ok</button> 

            <div className="result hidden">
                You entered ....
            </div>

        </article>


    )
}

export default Email