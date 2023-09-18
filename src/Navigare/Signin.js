import React, {useState} from "react";
import {Link} from "react-router-dom";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {

        if (username === "bianca" && password === "parola") {
            alert("Autentificare reușită!");
        } else {

            alert("Autentificare eșuată. Nume de utilizator sau parolă incorectă.");
        }
    };


    return (
        <>
            <h2>Sign in</h2>
            <div className="sign-ip-form">

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSignIn}>Autentificare</button>
                <Link to="/Signup">Nu ai cont?</Link>
            </div>
        </>
    );
}

export default SignIn;
