import { Link } from 'react-router-dom';
import "./navigation.css";
import userPic from "../../../assets/User.png";
import List from "../../../assets/List View.png";
import Jump from "../../../assets/Jump.png";
import Group from "../../../assets/Group Message.png";



function navbar(){
    return(
        <div className="navBarContainer">
            <Link to="/profile" className="link-icon">
                <img className="icons" src={userPic} alt="User" />
                <p>Profilis</p>
            </Link>
            <Link to="/prideti-veikla" className="link-icon">
                <img className="icons" src={List} alt="List View" />
                <p>Pridėti veiklą</p>
            </Link>
            <Link to="/užklausos" className="link-icon">
                <img className="icons" src={Jump} alt="Jump" />
                <p>Užklausos</p>
            </Link>
            <Link to="/org-profilis" className="link-icon">
                <img className="icons" src={Group} alt="Group Message" />
                <p>Žinutės</p>
            </Link>
        </div>
    )
}

export default navbar;