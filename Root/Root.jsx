import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../src/Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-5xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;