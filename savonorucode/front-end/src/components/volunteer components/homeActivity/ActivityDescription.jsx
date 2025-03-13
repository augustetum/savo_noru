import Hand from "../../../assets/transpRankytes.png";
import './ActivityDescription.css';
import Bell from "../../../assets/Bell.png";
import ActivityPic from "../../../assets/veiklosImage.png";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RoleButton from './RoleButton';
import FeedBack from './Feedback';

const baseURL = 'https://savonoru.onrender.com';


function ActivityDescription() {
    const { id } = useParams(); // Get the ID from the URL parameters
    const [Aprašymas, setAprašymas] = useState(true);
    const [Rolės, setRolės] = useState(false);
    const [Atsiliepimai, setAtsiliepimai] = useState(false);
    const [chosenRole, setChosenRole] = useState(null); // Update to store the chosen role object
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [description, setDescription] = useState(''); // State variable to store description
    const [roles, setRoles] = useState([]); // State variable to store roles
    const [comments, setComments] = useState([]); // State variable to store comments
    const [name, setName] = useState(''); // State variable to store name
    const [startDate, setStartDate] = useState(''); // State variable to store start date
    const [endDate, setEndDate] = useState(''); // State variable to store end date
    const [location, setLocation] = useState(''); // State variable to store location
    const [error, setError] = useState('');

    const fetchActivityDetails = async () => {
        try {
            console.log('Fetching activity details for ID:', id); // Log the ID
            const response = await axios.get(`${baseURL}/api/volunteering-opportunities/${id}`); // Fetch data based on ID
            console.log('Fetched activity details:', response.data); // Console log the fetched data
            setDescription(response.data.description || ''); // Assuming response.data contains description
            setRoles(response.data.volunteeringPositions || []); // Assuming response.data contains volunteeringPositions
            setComments(response.data.comments || []); // Assuming response.data contains comments
            setName(response.data.name || ''); // Assuming response.data contains name
            setStartDate(response.data.startDate || ''); // Assuming response.data contains startDate
            setEndDate(response.data.endDate || ''); // Assuming response.data contains endDate
            setLocation(response.data.location || ''); // Assuming response.data contains location
        } catch (err) {
            console.error('Error fetching activity details:', err); // Log detailed error
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchActivityDetails();
    }, [id]);

    useEffect(() => {
        console.log('Roles state updated:', roles); // Log the roles state
    }, [roles]);

    const handleAtgal = () => {
        setChosenRole(null); // Update to reset the chosen role object
    };

    const handleDalyvautiClick = () => {
        if(chosenRole){        
            setIsButtonClicked(true);
        }
    };

    const handleRoleChosen = (roleChosen) => {
        setChosenRole(roleChosen); // Update to store the chosen role object
    };

    const handleAprašymas = () => {
        setAprašymas(true);
        setRolės(false);
        setAtsiliepimai(false);
    };

    const handleRolės = () => {
        setAprašymas(false);
        setRolės(true);
        setAtsiliepimai(false);
    };

    const handleAtsiliepimai = () => {
        setAprašymas(false);
        setRolės(false);
        setAtsiliepimai(true);
    };

    return (
        <div className="description-container">
            <button className="Bell">
                <img src={Bell} alt="Bell" />
            </button>
            <img className="transpHands" src={Hand} alt="Hands" />
            <h1 className="activityName">Savanorystė </h1>
            <h1 className="activityName">{name}</h1>
            <div className="whiteContainer">
            <p className="date">{`${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()} ${location}`}</p> 
                <div className="lightPurple-container">
                    <div className="purple-container">
                        <img className="activPic" src={ActivityPic} alt="Activity" />
                        <div className="Role">
                            <p className="chosenRole">
                                {chosenRole ? `Rolė: ${chosenRole.name}` : "Rolė nepasirinkta"}
                            </p>

                            <button
                                onClick={handleDalyvautiClick}
                                className={`attendButton ${isButtonClicked ? 'clicked' : ''}`}
                            >
                                Dalyvauti
                            </button>

                            {isButtonClicked ? (<p className="uzsireginta">Užsiregistruota</p>) : null}
                        </div>
                    </div>
                    <div>
                        <button onClick={handleAprašymas} className={`threeButtons ${Aprašymas ? 'active' : ''}`}>Aprašymas</button>
                        <button onClick={handleRolės} className={`threeButtons ${Rolės ? 'active' : ''}`}>Rolės</button>
                        <button onClick={handleAtsiliepimai} className={`threeButtons ${Atsiliepimai ? 'active' : ''}`}>Atsiliepimai</button>
                    </div>

                    {Aprašymas ? (
                        <div className="textbox-container">
                            <p>{description}</p>
                        </div>
                    ) : (
                        Rolės ? (
                            <div className="buttons-container">
                                {roles.length > 0 ? (
                                    roles.map((role, index) => (
                                        <RoleButton key={index} role={role} onRoleChosen={handleRoleChosen} />
                                    ))
                                ) : (
                                    <p>No roles available</p>
                                )}
                            </div>
                        ) : (
                            <div className="feedBack-container">
                                {comments.length > 0 ? (
                                    comments.map((comment, index) => (
                                        <FeedBack key={index} comment={comment} />
                                    ))
                                ) : (
                                    <p>No comments available</p>
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default ActivityDescription;