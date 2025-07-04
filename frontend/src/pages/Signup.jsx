import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = ({ onSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            const token = await userCred.user.getIdToken();
            const res = await fetch('http://localhost:3001/api/auth/me', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const user = await res.json();
            onSignup(user);
        } catch (err) {
            console.error("Signup failed:", err);
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Sign Up</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default Signup;