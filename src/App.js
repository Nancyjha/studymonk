import React from 'react';
import "./index.css"
import LoginForm from './Login';
import RegistrationForm from './Registrationform';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import Navbar from './Navbar';
const App = () => {
  return(
   <div>
   <Navbar/> 
   <Routes>
      
     <Route path="/" element={<HomePage/>}/>
     <Route path="/register" element={<RegistrationForm/>}/>
     <Route path="/login" element={<LoginForm/>}/>
   </Routes>
   </div>
  )
 };

export default App;
