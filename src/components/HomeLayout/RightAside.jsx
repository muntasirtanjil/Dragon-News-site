import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import swimming from '../../assets/swimming.png';
import playGround from '../../assets/playground.png';
import classimg from '../../assets/class.png'; 


const RightAside = () => {
    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>Login With </h2>
            <div className='grid grid-cols-1 space-y-1.5'>
                <button className='btn bg-white border border-gray-800'><FcGoogle /> Google </button>
                <button className='btn bg-white border border-blue-500'><GrGithub /> Github</button>
            </div>
            <h2 className='font-bold mt-5 mb-3.5'> Find Us</h2>
            <div className=''>
                <button className='btn w-full justify-start bg-white border border-gray-800 '><FaFacebook className='text-blue-500 text-lg' /> Facebook </button>
                <button className='btn w-full justify-start bg-white border border-gray-800'><FaInstagram className='text-lg text-pink-800' /> Instagram</button>
                <button className='btn w-full justify-start bg-white border border-gray-800'><FaTwitter className='text-lg text-blue-600' />twitter </button>
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