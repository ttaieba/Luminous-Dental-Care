import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-center p-4 my-5">
            <h1>Welcome to <span className="text-primary fw-bold">Our Service</span>  We <br />
                Register Here
            </h1>
            <input type="email" placeholder="email " name="" id="" />
            <br />
            <br />
            <input type="password" placeholder="password" name="" id="" />
            <br /><br />

            <button type="submit">Register</button>
            <br /><br />

            <Link to="/login" className="text-primary py-4">Already registered? please login</Link>
        </div>
    );
};

export default Register;