import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handdleSubmit, handleEmail, handlePassword, submit } = useAuth()
    return (
        <div className="text-center p-4 my-5">

            <h1>Welcome to <span className="text-primary fw-bold">Our Service</span>  We <br />
                Register Here
            </h1>
            <h4>{submit.email}</h4>
            <form onSubmit={handdleSubmit} >
                <input onChange={handleEmail} type="email" placeholder="email " name="" id="" />
                <br />
                <br />
                <input onChange={handlePassword} type="password" placeholder="password" name="" id="" />
                <br /><br />

                <button type="submit">Register</button>
                <br /><br />
            </form>
            <Link to="/login" className="text-primary py-4">Already registered? please login</Link>
        </div>
    );
};

export default Register;