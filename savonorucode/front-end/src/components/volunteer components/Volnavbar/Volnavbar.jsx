import { Link } from 'react-router-dom';
import userPic from "../../../assets/User.png";
import Group from "../../../assets/Group Message.png";
import Home from "../../../assets/Home.png";
import "./Volnavbar.css";



function navbarVol(){
    return(
        <div className="VolnavBarContainer">
            <Link to="/home" className="Vollink-icon">
                <img className="Volicons" src={Home} alt="Group Message" />
                <p>Pagrindinis</p>
            </Link>

            <Link to="" className="Vollink-icon">
                <img className="Volicons" src={Group} alt="Group Message" />
                <p>Žinutės</p>
            </Link>

            <Link to="" className="Vollink-icon">
                <img className="Volicons" src={userPic} alt="User" />
                <p>Profilis</p>
            </Link>
        </div>
    )
}

export default navbarVol;