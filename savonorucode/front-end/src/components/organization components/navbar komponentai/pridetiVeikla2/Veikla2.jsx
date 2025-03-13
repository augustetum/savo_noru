import axios from 'axios';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import './Veikla2.css'; // Import the CSS file
const baseURL = 'https://savonoru.onrender.com';


function Veikla2() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [secondDate, setSecondDate] = useState(dayjs());
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        startDate: '',
        endDate: '',
        organisation: {
            id: ''
        },
        volunteeringPositions: [
            {
                name: '',
                maxVolunteers: ''
            }
        ],
        hobbies: [
            'GAMTA',
            'ZMONES'
        ]
    });
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNameKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setNameList([...nameList, { name, number: '' }]);
            setName('');
        }
    };

    const handleNumberChange = (index, event) => {
        const newList = [...nameList];
        newList[index].number = event.target.value;
        setNameList(newList);
    };

    const handlePatvirtinti = async () => {
        const dataToSend = {
            name: formData.name,
            description: formData.description,
            location: formData.location,
            startDate: selectedDate.toISOString(),
            endDate: secondDate.toISOString(),
            organisation: {
                id: 41 // Replace with the actual organisation ID
            },
            volunteeringPositions: nameList.map(item => ({
                name: item.name,
                maxVolunteers: item.number
            })),
            hobbies: ["GAMTA", "ZMONES"], // Replace with actual hobbies if available
            picture: selectedFile, // Add picture to formData
        };
    
        try {
            const response = await axios.post(`${baseURL}/api/volunteering-opportunities/create`, dataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                console.log('Data submitted successfully');
                navigate('/prideti-veikla'); // Navigate to a success page or another route
            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request data:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    };

    function atgal() {
        navigate('/prideti-veikla');
    }




    // const getCurrentUserId = async () => {
    //     try {
    //         const response = await axios.get(`${baseURL}/api/users/current-id`)

    //         const userId = response.data;
    //         console.log('Current user ID:', userId);
    //         // Use the user ID as needed
    //     } catch (error) {
    //         console.error('Error fetching current user ID:', error);
    //     }
    // };
    
    // // Call the function when needed
    // getCurrentUserId();

    return (
        <div className="veikla2-container">
            <h1 className="veikla2-header">Sfera</h1>
            <form className="veikla2-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text"
                    placeholder="pavadinimas"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="veikla2-input"
                />
                <input
                    type="text"
                    placeholder="aprašymas"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="veikla2-input"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="veikla2-file-input"
                />
                <input 
                    name="location"
                    placeholder="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="veikla2-input"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => <input {...params} className="veikla2-date-input" />}
                    />
                    <DatePicker
                        label="Select Second Date"
                        value={secondDate}
                        onChange={(newValue) => setSecondDate(newValue)}
                        renderInput={(params) => <input {...params} className="veikla2-date-input" />}
                    />
                </LocalizationProvider>
            </form>
            {selectedFile && (
                <div className="veikla2-selected-file-container">
                    <h3>Selected File:</h3>
                    <p>{selectedFile.name}</p>
                    <img src={URL.createObjectURL(selectedFile)} alt="Selected" width="200" />
                </div>
            )}
            <input
                className="veikla2-name-input"
                value={name}
                name={`volunteeringPositions.name`}
                onChange={handleNameChange}
                onKeyPress={handleNameKeyPress}
                placeholder="tipažas"
            />
            <div className="veikla2-name-list-container">
                {nameList.map((item, index) => (
                    <div key={index} className="veikla2-name-list-item">
                        <p>{item.name}</p>
                        <input
                            type="number"
                            name={`volunteeringPositions.maxVolunteers`}
                            placeholder="skaicius"
                            value={item.number}
                            onChange={(event) => handleNumberChange(index, event)}
                            className="veikla2-number-input"
                        />
                    </div>
                ))}
            </div>
            <button type="submit" onClick={handlePatvirtinti} className="veikla2-submit-button">Submit</button>
            <p>--------</p>
            <button onClick={atgal}>atgal</button>


        </div>
    );
}

export default Veikla2;