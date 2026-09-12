import React from 'react';
import Logo from '../assets/logo-text.png'

const NavBar = () => {
    return (
        <nav className='border-b-gray-200 border-b-1'>
            <div className='flex justify-between container mx-auto p-4'>
                <img src={Logo} alt="Logo" />
                <ul className='flex justify-evenly items-center gap-5'>
                    <li className='text-[#DB2777]'><a href='/'>Home</a></li>
                    <li><a href='/'>Technologies</a></li>
                    <li><a href='/'>Projects</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>

                <div className='space-x-2'>
                    <button className='p-2 px-4'>Sign In</button>
                    <button className='bg-[#D91B7E] text-white rounded-[20px] p-2 px-4'>Sign Up</button>
                </div>

                
            </div>
        </nav>
    );
};

export default NavBar;