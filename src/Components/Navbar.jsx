import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

// const StyledLink = styled(Link)`
//     text-decoration: none;
//     margin: 5px;
//     color: black;
//     font-size: 25px;
// `

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/employees">Employees</Link>
            <Link to="/employees-create">Add Employee</Link>
        </div>
    )
}
