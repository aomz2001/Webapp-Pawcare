import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Aboutus from './component/Pageother/Aboutus'
import FindMentor from './component/Pageother/FindMentor'
import SignupProvider from './component/Pageother/SignupProvider'
import Signup from './component/Login/Signup'
import Profile from './component/Profile/Profile'
import Footer from './component/footer/footer'
import SignupComponent from './component/Login/SignupComponent'
import Conprivacy from './component/condition/conprivacy'
import AdminEditServ from './component/adminEdit/AdminEditServ'
import NavbarIn from './component/Navbar/NavbarIn';
import ProfileShowinfo from './component/Profile/ProfileShowinfo';

function App() {

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <>
     {token ? <NavbarIn onLogout={handleLogout} /> : <Navbar />}
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/findmentor" element={<FindMentor />} />
          <Route path="/signupprovider" element={<SignupProvider />} />
          <Route path="/signup" element={<Signup onSignUp={() => setIsSignedUp(true)} />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile-showinfo" element={<ProfileShowinfo/>} />
          <Route path="/signupcomponent" element={<SignupComponent/>} />
          <Route path="/conprivacy" element={<Conprivacy/>} />
          <Route path="/admineditserv" element={<AdminEditServ/>} />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
