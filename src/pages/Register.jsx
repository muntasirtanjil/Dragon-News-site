import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-2xl font-bold text-center'>Register your account</h1>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        {/* URL */}
                        <label className="label">PhotoURL</label>
                        <input type="URL" className="input" placeholder="PhotoURL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>

                    </fieldset>
                    <p className='text-center text-accent'>You Have Already Account ? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;