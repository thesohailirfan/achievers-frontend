import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })
    

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('https://achievers-backend.herokuapp.com/user/login', {...user})
            .then((req, res) => {
                console.log(res);
                console.log(req);
                localStorage.setItem('accesstoken',req.data.accesstoken);
            })
            localStorage.setItem('firstLogin', true)
            localStorage.setItem('email', {...user}.email)
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2 className="loginHeading">Login</h2>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Login</button>
                </div>
                <div className="newUserPart">New user? Click here to <Link to="/register">Register</Link></div>
            </form>
        </div>
    )
}

export default Login;
