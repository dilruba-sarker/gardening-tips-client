import React, { useEffect, useState } from 'react';

const Darkmode = () => {
const [theme,setTheme]=useState('light')
useEffect(()=>{
    const savedTheme=localStorage.getItem('theme')
    const systemPefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
    if(savedTheme){
        setTheme(savedTheme)
    }else if (systemPefersDark){
          setTheme("dark")
    }
},[])
useEffect(()=>{
   const html=document.documentElement;
   html.setAttribute('data-theme',theme)
   localStorage.setItem('theme',theme)
},[theme])
const toggleTheme=()=>{
    setTheme(theme==='light'?'dark':'light')
}
    return (
      <button 
      onClick={toggleTheme}
      aria-level={`switch to ${theme==='dark'?'light':'dark'}mode`}
      className='absolute top-6  rounded-full bg-amber-50 dark:bg-gray-950 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
      >


        {
            theme==='dark'?(<span className='text-blue-700'>🌞</span>):(<span className='text-red-500'>🌙</span>)
        }
      </button>
    );
};

export default Darkmode;