
/*
Copy the HTML-code from the exercise

Change "class" to "className"

Note that React is more senitive about the HTML-code
*/
import './Email.css'
function Email() {

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

            <button>Ok</button>

            <div className="result hidden">
                You entered ....
            </div>

        </article>


    )
}

export default Email