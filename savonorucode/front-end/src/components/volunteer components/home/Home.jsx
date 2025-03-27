import React, { useState, useEffect } from 'react';
import Activity from './Activity';
import './ActivityHome.css';
import Bell from '../../../assets/Bell.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const baseURL = 'https://savonoru.onrender.com';

function Home() {
    const [Nauji, setNauji] = useState(true);
    const [Tinkami, setTinkami] = useState(false);
    const [data, setData] = useState([]); // State variable to store array of data
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // State variable to track loading state
    const navigate = useNavigate();

    const fetchData = async () => {
        console.log('fetchData called'); // Log to ensure fetchData is called
        setLoading(true); // Set loading state to true before making the request
        try {
            const response = await axios.get(`${baseURL}/api/volunteering-opportunities/all`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Fetched data:', response.data); // Console log the fetched data
            if (Array.isArray(response.data)) {
                console.log('Data is an array:', response.data);
                setData(response.data); // Assuming response.data is an array
            } else {
                console.error('Data is not an array:', response.data);
                setError('Fetched data is not an array');
            }
        } catch (err) {
            console.error('Error fetching data:', err); // Log detailed error
            setError(err.message);
        } finally {
            setLoading(false); // Set loading state to false after the request completes
        }
    };

    useEffect(() => {
        console.log('useEffect called'); // Log to ensure useEffect is called
        fetchData();
    }, []);

    const handleActivityClick = (id) => {
        navigate(`/activityDescription/${id}`);
    };

    return (
        <div className="contentContainer">
            <button className="Bell">
                <img src={Bell} alt="Bell" />
            </button>
            <div className="head-container">
                <h1 className="HeadName">Atrask kur&nbsp;<br />savanoriausi šiandien</h1>
                <input placeholder="Ieškoti" className="underHead" />
            </div>

            <div className="button-container">
                <button onClick={() => setNauji(true)} className={`buttons ${Nauji ? 'active' : ''}`}>Nauji skelbimai</button>
                <button onClick={() => setTinkami(true)} className={`buttons ${Tinkami ? 'active' : ''}`}>Tinkami jums</button>
            </div>
            {error && <p>Error: {error}</p>}
            <div className="white-container">
                {loading ? (
                    <p>Loading...</p> // Render loading indicator while loading
                ) : (
                    data.map((item, index) => {
                        console.log('Rendering item:', item); // Log each item being rendered
                        return (
                            <div key={index}>
                                <Activity id={item.id} location={item.location} name={item.name} onClick={() => handleActivityClick(item.id)} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Home;