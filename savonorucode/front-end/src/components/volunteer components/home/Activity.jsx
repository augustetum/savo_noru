import ActivityPic from "../../../assets/veiklosImage.png";
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Activity({ id, location, name, onClick }) {
    const navigate = useNavigate();

    const handleClick = () => {
        onClick(id); // Call the onClick function with the id
        navigate(`/activityDescription/${id}`);
    };

    console.log('Activity component props:', { id, location, name }); // Log the props

    return (
        <button onClick={handleClick} className="ActivityButton">
            <img className="activityPicture" src={ActivityPic} alt="Activity" />
            <div className="textContainer">
                <p className="ActivityName">{name}</p>
                <p className="ActivityLocation">{location}</p> 
            </div>
        </button>
    );
}

export default Activity;