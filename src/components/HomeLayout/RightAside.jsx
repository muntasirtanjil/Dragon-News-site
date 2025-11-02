import React, { use } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import swimming from '../../assets/swimming.png';
import playGround from '../../assets/playground.png';
import classimg from '../../assets/class.png';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';


const RightAside = () => {
    const { user, LoginWithGoogle } = use(AuthContext);
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        LoginWithGoogle(provider).then((result) => {
            console.log(result);
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            {
                user ? <p></p> : <div>
                    <h2 className='text-xl font-bold mb-4'>Login With </h2>
                    <div className='grid grid-cols-1 space-y-1.5'>
                        <button onClick={handleGoogleLogin} className='btn bg-white border border-gray-800'><FcGoogle /> Google </button>
                        <button className='btn bg-white border border-blue-500'><GrGithub /> Github</button>
                    </div>
                </div>
            }
            <h2 className='font-bold mt-5 mb-3.5'> Find Us</h2>
            <div className=''>
                <Link target="_blank" to={'https://web.facebook.com/profile.php?id=61551265644671'}> <button className='btn w-full justify-start bg-white border border-gray-800 '>  <FaFacebook className='text-blue-500 text-lg' /> Facebook </button> </Link>
                <Link> <button className='btn w-full justify-start bg-white border border-gray-800'>   <FaInstagram className='text-lg text-pink-800' /> Instagram</button></Link>
                <Link><button className='btn w-full justify-start bg-white border border-gray-800'>   <FaTwitter className='text-lg text-blue-600' />twitter </button></Link>
            </div>
            <div className='bg-base-200 py-5 px-4 my-6'>
                <p className='font-bold text-xl'>Q-Zoon</p>
                <img src={swimming} alt="" />
                <img src={classimg} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default RightAside;