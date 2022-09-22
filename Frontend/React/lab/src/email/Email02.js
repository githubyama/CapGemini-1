
/*
    Write stuff in console when user clicks button
*/

import './Email.css'

function Email() {

    // function buttonclicked(event) {
    //     console.log("The button is clicked!")
    //     console.log("The event", event)
    //     console.log("The target", event.target)
    // }

    // Same as above, but just in a different form
    // The parameter "event" is automatically sent from the button

    const buttonclicked = (event) => {
        console.log("The button is clicked!")

        // Show information about the event: which button, if alt-key is pressed, clientX, clientY
        console.log("The event", event)

        // Show info about the target (the OK-button in this case)
        console.log("The target", event.target)        
    }

    return (

        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" />
            </div>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" />
            </div>

            {/* "onClick" is case sensitive*/}

            {/* Inline function */}
            <button onClick={()=>{console.log("good morning!")}}>Ok1</button> 

            {/* Inline function and pickup the event */}
            <button onClick={(event)=>{console.log(event)}}>Ok2</button> 
            
            {/* Connect the click event with my own function. Note: it's not a function call like buttonclicked() */}            
            <button onClick={buttonclicked}>Ok3</button> 

            <div className="result hidden">
                You entered ....
            </div>

        </article>


    )
}

export default Email