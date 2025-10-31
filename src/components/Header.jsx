import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-2.5'>
            <img src={logo} alt="" />
            <h3 className='text-accent'>Journalism Without Fear or Favour</h3>
            <p className='font-semibold'>{format(new Date(),"EEEE, MMMM d, yyyy")}</p>
            
        </div>
    );
};

export default Header;