import React from 'react';
import { login } from "../Redux/action/loginAction";
// import { AuthContext } from '../Contexts/AuthContext';

export const Login = () => {
    // const { login } = React.useContext(AuthContext);
    const [formDetails, setFormDetails] = React.useState({
        username: "",
        password: ""
    });

    const mapDispatchToProps = dispatch => ({
        login: isLogin => dispatch(login(isLogin))
      });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormDetails({
            ...formDetails,
            [name]: value
        });
    };

    const { username, password } = formDetails;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create post request to set the input data.
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: { "Content-Type" : "application/json" }
        })
            .then((res) => res.json())
            .then((res) => mapDispatchToProps(res.token, username));

            // login(res.token, username)
        // console.log(formDetails);
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <input
                name='username'
                type='text'
                placeholder='Username'
                value={username}
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
            <input type='submit' value='LOGIN' />
        </form>
    )
}