import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: '', number: null, age:null, currentYear: '', academicField: '', city: '', country: '', pin: null
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('https://achieverscircle.herokuapp.com/user/register', {...user})
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <input type="text" name="number" required
                placeholder="Phone Number" value={user.number} onChange={onChangeInput} />

                <input type="text" name="age" required
                placeholder="Age" value={user.age} onChange={onChangeInput} />

                <input type="text" name="currentYear" required
                placeholder="Current Academic Year" value={user.currentYear} onChange={onChangeInput} />
                
                <input type="text" name="academicField" required
                placeholder="Academic Field" value={user.academicField} onChange={onChangeInput} />    

                <input type="text" name="city" required
                placeholder="City" value={user.city} onChange={onChangeInput} />

                <input type="text" name="country" required
                placeholder="Country" value={user.country} onChange={onChangeInput} />

                <input type="text" name="pin" required
                placeholder="Pincode" value={user.pin} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                </div>
                <div className="newUserPart">Already a user? Click here to <Link to="/login">Login</Link></div>
            </form>
        </div>
    )
}

export default Register