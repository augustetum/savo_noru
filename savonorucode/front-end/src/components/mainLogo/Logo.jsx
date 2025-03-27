import logo from "../../assets/logo.png"
import "./Logo.css"


function Logo(){
    return(
        <div className="TextLogoContainer">
            <div className="GreetingsText">
                <h1 className="Greetings">Sveiki atvykę į SavoNoru</h1>
                <p className="UnderGreeting">Prisijunkite, kad galėtumėte tęsti</p>                
            </div>
            <div className="Logo-wrapper">
                <img src={logo} className="logo"/>                  
            </div>
        </div>
    )            
}

export default Logo;