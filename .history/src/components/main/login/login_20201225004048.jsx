import React from 'react';

const Login = (props) => (
    <form action="POST" className="login">
        <input type="text" placeholder="Put in ID">Login</input>
        <input type="password" placeholder="Put in password">Password</input>
        <button className="login"></button>
        <button className="sign"></button>
    </form>);

export default Login;