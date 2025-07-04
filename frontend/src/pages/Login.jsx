import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCred.user.getIdToken();
            const res = await fetch('http://localhost:3001/api/auth/me', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const user = await res.json();
            onLogin(user);
        } catch (err) {
            console.error("Login failed:", err);
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
            <input type={password} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Passowrd" />
            <button type="submit">Login</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default Login;