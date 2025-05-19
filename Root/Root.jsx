import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../src/Components/Navbar/Navbar';

const Root = () => {
    return (
        <div className='max-w-5xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;