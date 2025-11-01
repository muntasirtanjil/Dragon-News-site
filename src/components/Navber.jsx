import React, { use } from 'react';
import { Link, NavLink,  } from 'react-router';
import userImage from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navber = () => {
    const { user, logOut } = use(AuthContext)
   
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("user trying to logOut")
            })
            .catch((error) => {
                alert(error)
            });
    };

    return (
        <div className='flex justify-between items-center' >
            <div className=""> {user && user.email}</div>

            <div className="nav flex gap-5 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>

            </div>
            <div className="login-btn flex gap-3.5 items-center">
                <img className='w-12 rounded-full border border-gray-300' src={`${user ? user.photoURL : userImage}`} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn px-10 btn-primary'>LogOut</button> : <Link to="/auth/login" className='btn px-10 btn-primary'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navber;