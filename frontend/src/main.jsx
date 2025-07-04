import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <nav style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <Link to="/">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Login onLogin={setUser} />} />
                <Route path="/signup" element={<Signup onSignup={setUser} />} />
                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
