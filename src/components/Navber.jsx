import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImage from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navber = () => {
    const { user} = use(AuthContext)
    return (
        <div className='flex justify-between items-center' >
            <div className=""> {user && user.email}</div>
            
            <div className="nav flex gap-5 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>

            </div>
            <div className="login-btn flex gap-3.5 items-center">
                <img src={userImage} alt="" />
                <Link to="/auth/login" className='btn px-10 btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default Navber;