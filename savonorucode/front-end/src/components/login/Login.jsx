const baseURL = 'https://savonoru.onrender.com';
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, onRegister, onVolunteer, onOrganization }) {
    const [isVolunteer, setIsVolunteer] = useState(true);
    const [isOrganization, setIsOrganization] = useState(false);
    const [isRegisterClicked, setIsRegisterClicked] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        name: '',    // For organizations
        address: '',    // For organizations
        workingArea: ''    // For organizations
    });

    const navigate = useNavigate();

    const volunteer = () => {
        setIsVolunteer(true);
        setIsOrganization(false);
        onVolunteer();
    }

    const organization = () => {
        setIsOrganization(true);
        setIsVolunteer(false);
        onOrganization();
    }

    const registerClicked = () => {
        setIsRegisterClicked(true);
    }

    const resetRegister = () => {
        setIsRegisterClicked(false);
        setFormData({
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            workingArea: '',
            password: '',
            name: ''
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        event.preventDefault();
        try {
            if (isVolunteer) {
                // Send volunteer registration data
                await axios.post(`${baseURL}/api/volunteers/register`, {
                    username: formData.username,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    password: formData.password
                });
                console.log('Volunteer data sent:', formData);
            } else {
                // Send organization registration data
                await axios.post(`${baseURL}/api/organisations/register`, {
                    name: formData.name,
                    username: formData.email,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    address: formData.address,
                    workingArea: formData.workingArea,
                    password: formData.password
                });
                console.log('Organization data sent:', formData);
            }
        } catch (error) {
            console.error('Error sending registration data:', error);
        }
    };

    const handleLogin = async () => {
        console.log("login clicked");
        onLogin();
        if(isVolunteer){
            navigate('/home');
        }
        else navigate('/profile');
        
        const loginData = {
            username: isVolunteer ? formData.username : formData.email,
            password: formData.password
        };
        console.log('Login data being sent:', loginData);
        try {
            const response = await axios.post(`${baseURL}/login`, loginData);
            console.log('Full response:', response);
            if (response.status === 200) {
                console.log('Login successful:', response.data.message);
                onLogin(); // Handle successful login
                if (isVolunteer) {
                    navigate('/home');
                } else {
                    navigate('/profile');
                }
            }
        } catch (error) {
            console.log('Error response:', error.response);
            if (error.response && error.response.status === 401) {
                console.error('Invalid credentials:', error.response.data.message);
            } else {
                console.error('Error during login:', error);
            }
        }
    };




    /*
    const handleLogin = async () => {
        console.log("login clicked");
        //  onLogin();
        try {
            const response = await axios.post(`${baseURL}/login`, {
                username: isVolunteer ? formData.username : formData.email,
                password: formData.password
            });
            console.log('Full response:', response);
            if (response.status === 200) {
                console.log('Login successful:', response.data.message);
                onLogin(); // Handle successful login
                if(isVolunteer){
                    navigate('/home');
                } else navigate('/profile');
            }
        } catch (error) {
            console.log('Error response:', error.response);
            if (error.response && error.response.status === 401) {
                console.error('Invalid credentials:', error.response.data.message);
            } else {
                console.error('Error during login:', error);
            }
        }
    };

     */


    /*
        const handleLogin = async () => {
            console.log("login clicked");
            console.log(formData.username);
            console.log(formData.company);
            try {
                const response = await axios.post('/login', {
                    username: formData.username,
                    password: formData.password
                });

                if (response.status === 200) {
                    console.log('Login successful:', response.data.message);
                    onLogin(); // Call the onLogin function to handle successful login
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.error('Invalid credentials:', error.response.data.message);
                } else {
                    console.error('Error during login:', error);
                }
            }
        };

     */


    if (isRegisterClicked) {
        return (
            <div className="TextContainer">
                <div>
                    <h2 className="prisijungimas">Registracija</h2>
                    <p className="under-prisijungimas">Įveskite duomenis</p>
                </div>
                <div className="input-container">
                    <div className="savanoris-organizacija">
                        <button
                            onClick={volunteer}
                            className={`bubble-button ${isVolunteer ? 'active' : ''}`}
                        ></button>
                        <p>Savanoris</p>
                        <button
                            onClick={organization}
                            className={`bubble-button ${isOrganization ? 'active' : ''}`}
                        ></button>
                        <p>Organizacija</p>
                    </div>
                    {isVolunteer ? (
                        <>
                            <input
                                className="input"
                                type="text"
                                name="firstName"
                                placeholder="Vardas"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="text"
                                name="lastName"
                                placeholder="Pavardė"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="text"
                                name="username"
                                placeholder="Vartotojo vardas"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="email"
                                name="email"
                                placeholder="El. paštas"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="text"
                                name="phoneNumber"
                                placeholder="Telefono nr."
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="password"
                                name="password"
                                placeholder="Slaptažodis"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </>
                    ) : (
                        <>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                placeholder="Įmonė"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="email"
                                name="email"
                                placeholder="El. paštas"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="text"
                                name="phoneNumber"
                                placeholder="Telefono nr."
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="text"
                                name="address"
                                placeholder="Adresas"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="text"
                                name="workingArea"
                                placeholder="Veiklos sritis"
                                value={formData.workingArea} //galimai cia oroblema buvo
                                onChange={handleChange}
                            />
                            <input
                                className="input"
                                type="password"
                                name="password"
                                placeholder="Slaptažodis"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    <button type="submit" onClick={() => {handleSubmit(); resetRegister();}} className="prisijungti-button">Sukurti paskyrą</button>
                    <div className="footer-options">
                        <p className="neturite-paskyros">Jau turite paskyrą?</p>
                        <button onClick={resetRegister} className="registruotis">Prisijungti</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="TextContainer">
                <div>
                    <h2 className="prisijungimas">Prisijungimas</h2>
                    <p className="under-prisijungimas">Įveskite prisijungimo duomenis</p>
                </div>
                <div className="input-container">
                    <div className="savanoris-organizacija">
                        <button
                            onClick={volunteer}
                            className={`bubble-button ${isVolunteer ? 'active' : ''}`}
                        ></button>
                        <p>Savanoris</p>
                        <button
                            onClick={organization}
                            className={`bubble-button ${isOrganization ? 'active' : ''}`}
                        ></button>
                        <p>Organizacija</p>
                    </div>

                    <input
                        className="input"
                        type="text"
                        name={isVolunteer ? "username" : "email"}
                        placeholder={isVolunteer ? "Vartotojo vardas" : "El. paštas"}
                        onChange={handleChange}
                        value={isVolunteer ? formData.username : formData.email}
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Slaptažodis"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                    <a className="pamirsote-slaptazodi">Pamiršote slaptažodį?</a>

                    <button onClick={handleLogin} className="prisijungti-button">Prisijungti</button>

                    <div className="footer-options">
                        <p className="neturite-paskyros">Neturite paskyros?</p>
                        <button onClick={() => {onRegister(); registerClicked();}} className="registruotis">Registruotis</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;