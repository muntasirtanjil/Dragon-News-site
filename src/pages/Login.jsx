import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signIn, setUser, forgetPassword } = use(AuthContext);
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password})

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorMessage)
                setError(errorCode, "incorrect password or user email")
            });


    }
    const handleForgetPassword = () => {

        if (!email) {
            alert("Please enter your email");
            return;
        }
        forgetPassword(email).then(() => {
            alert("sent a message for reset password , check your email");
        })
            .catch(error => {
                alert(error.message);
            });
    }



    return (
        <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className='text-2xl font-bold text-center'>Login your account</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        <div>
                            <button
                                type="button"
                                onClick={handleForgetPassword}
                                className="link link-hover"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                    </fieldset>
                    <p className='text-center text-accent'>Dont’t Have An Account ? <Link to="/auth/register" className='text-secondary'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;