import React, {useState} from "react";


function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {

        if (username === "bianca" && password === "parola") {
            alert("Înregistrare reușită!");
        } else {

            alert("Înregistrare eșuată. Vă rugăm introduceți un nume de utilizator sau o parolă validă.");
        }
    };


    return (
        <div>
            <h2>Sign up</h2>
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
            <button onClick={handleSignIn}>Save</button>

        </div>
    );
}

export default Signup;