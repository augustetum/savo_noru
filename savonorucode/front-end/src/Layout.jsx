import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Background from './components/background/Background';
import LoginContainer from './components/login-container/Login-container';
import Login from './components/login/Login';
import Logo from "./components/mainLogo/Logo";
import Navbar from './components/organization components/nav-bar/navigation';
import Profilis from './components/organization components/navbar komponentai/Profilis/Profilis';
import Užklausos from './components/organization components/navbar komponentai/Užklausos/Užklausos';
import PridetiVeikla from './components/organization components/navbar komponentai/PridetiVeikla/PridetiVeikla';
import NavbarVol from './components/volunteer components/Volnavbar/Volnavbar';
import Home from './components/volunteer components/home/Home';
import ActvityDescript from './components/volunteer components/homeActivity/ActivityDescription';
import Veikla2 from './components/organization components/navbar komponentai/pridetiVeikla2/Veikla2';

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [volunteer, setVolunteer] = useState(true);

  function handleVolunteer(){
      setVolunteer(true);
  }

  function handleOrganization(){   
      setVolunteer(false);
  }

  function handleLogin() {
    setIsLoggedIn(true);
    setIsRegistered(false);
  }

  function handleRegister() {
    setIsRegistered(true);
    setIsLoggedIn(false);
  }

  let content;
  if (isRegistered) {
    content = <Login onLogin={handleLogin} onRegister={handleRegister}/>;
  } else {
    content = <Login onLogin={handleLogin} onRegister={handleRegister} onVolunteer={handleVolunteer} onOrganization={handleOrganization} />;
  }

  return (
    <Router>
      <Background>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Logo />} />
          
          {/* organizacijos */}
          <Route path="/profile" element={<Profilis />} />
          <Route path="/užklausos" element={<Užklausos />} />
          <Route path="/prideti-veikla" element={<PridetiVeikla />} />
          <Route path="/prideti-veikla/2" element={<Veikla2 />} />


          {/* savanoriu */}
          <Route path="/home" element={<Home />} />
          <Route path="/activityDescription/:id" element={<ActvityDescript />} />
        </Routes>

        {isLoggedIn ? 
        (
          volunteer ? 
          (
            <NavbarVol />            
          ) 
          : 
          (
            <Navbar/>         
          )
        ) 
        :
        (
          <LoginContainer>
            {content}
          </LoginContainer>
        )}
      </Background>
    </Router>
  );
}

export default Layout;