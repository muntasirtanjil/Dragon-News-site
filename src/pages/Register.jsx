import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser,setUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const photoURL = e.target.photoURL.value;
        //    console.log(name,email,password,photoURL)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                setUser(user)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });


    };
    return (
        <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <form onSubmit={handleRegister} className="card-body">
                    <h1 className='text-2xl font-bold text-center'>Register your account</h1>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />
                        {/* URL */}
                        <label className="label">PhotoURL</label>
                        <input name='photoURL' type="URL" className="input" placeholder="PhotoURL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                    </fieldset>
                    <p className='text-center text-accent'>You Have Already Account ? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;