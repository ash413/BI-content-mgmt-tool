import { useState } from "react";

export default function LoginPage() {
    const [username,SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    async function login(ev) {
        ev.preventDefault();
        await fetch('https://localhots:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
    }

    return (
        <form className="login" onSubmit={ login }>
            <h1>Login</h1>
            <input type="text" 
                placeholder="username" 
                value={username} 
                onChange={ev => SetUsername(ev.target.value)} />
            <input type="password" 
                placeholder="password" 
                value={password}
                onChange={ev => SetPassword(ev.target.value)} />
            <button>Login</button>
        </form>
    );
}