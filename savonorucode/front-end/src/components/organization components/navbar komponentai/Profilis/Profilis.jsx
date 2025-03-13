import "./Profilis.css"
import Aktyvios from "./AktyviosSav";

function Profilis() {
    return (
        <div className="profileContainer">
            <h1 className="profilis">Profilis</h1>
            <form className="inputContainer">
                <p>Įmonė</p>
                <input className="userInput"></input>
            </form>
            <form className="inputContainer">
                <p>El.paštas</p>
                <input className="userInput"></input>
            </form>
            <form className="inputContainer">
                <p>Veiklos sritis</p>
                <input className="userInput"></input>
            </form>
            <form className="inputContainer">
                <p>Tel. nr.</p>
                <input className="userInput"></input>                
            </form>
            <form className="inputContainer">
                <p>Slaptažodis</p>
                <input className="userInput"></input>
            </form>

            <div className="activeList">
                <h1 className="aktyviosSavan">Aktyvios savanorystės</h1>
                <Aktyvios />
                <Aktyvios />
                <Aktyvios />
                <Aktyvios />
            </div>
            
        </div>
    )
}

export default Profilis