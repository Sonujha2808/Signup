// In src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import Home from './Components/Home';
import { useAuth } from './context/AuthContext';

function App() {
    const {user} = useAuth();
console.log(user)
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={user ?<Home /> : <Login/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
