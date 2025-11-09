import React from 'react';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src='https://afiles.webengage.com/58add2d9/e3d7dabb-10ad-4d96-a39f-ba8194fdc9c7.png'
          className='w-10' 
           alt='' />
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:bg-red-600 transition' to='/'>
            ورود به حساب 
          </Link>
          <Link
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg
             transition'
            to='/'
          >
            ثبت نام 
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;