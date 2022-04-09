import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Contexts/AuthContext';

export const Register = () => {
    // const { login } = React.useContext(AuthContext);
    const [formDetails, setFormDetails] = React.useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormDetails({
            ...formDetails,
            [name]: value
        });
    };

    const showAlert = (er) => {
        if(er===false) {
            alert("Registration is successful.")
        }
        else {
            alert("User is already exist. Go to login page.")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create post request to set the input data.
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: { "Content-Type" : "application/json" }
        })
            .then((res) => res.json())
            .then((res) => showAlert(res.error))
            .catch((err) => console.log(err))

        // console.log(formDetails);
    }

    const gotoLogin = () => {
        navigate('/login')
    }

    const {name, email, password, username, mobile, description } = formDetails;

//     "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register Page</h1>
            <input
                name='name'
                type='text'
                placeholder='Name'
                value={name}
                onChange={handleChange}
            />
            <br/>
            <input
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={handleChange}
            />
            <br/>
            <input
                name='password'
                type='text'
                placeholder='Password'
                value={password}
                onChange={handleChange}
            />
            <br/>
            <input
                name='username'
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleChange}
            />
            <br/>
            <input
                name='mobile'
                type='number'
                placeholder='Mobile'
                value={mobile}
                onChange={handleChange}
            />
            <br/>
            <input
                name='description'
                type='text'
                placeholder='Description'
                value={description}
                onChange={handleChange}
            />
            <br/>
            <input type='submit' value='REGISTER' />
            <br/>
            <button onClick={gotoLogin}>Redirect to login page</button>
        </form>
    )
}
