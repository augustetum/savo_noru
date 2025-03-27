import accept from "../../../../assets/Done.png";
import deny from "../../../../assets/Multiply.png";

function Row(){
    return(
    <tr>
        <td className="td">Ignas</td>
        <td className="td">Volodko</td>
        <td className="td"> +37061234534</td>
        <td className="td">Volodkoignas@gmail.com</td>
        <td className="td">
            <div className="button-container">
                <button className="priimti-atsaukti">
                    <img className="accept" src={accept}></img>
                </button>
                <button className="priimti-atsaukti">
                    <img className="deny" src={deny}></img>
                </button> 
            </div>
        </td>
    </tr>
    )
}

export default Row;