import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

  return (
    <header className='w-full h-[50px] border-b-2 border-solid border-[#111] bg-[#111] text-white fixed top-0 left-0 px-3 flex items-center justify-between transition-all' style={{top:visible ? "0" : '-50px'}} >
        <Link to={"/"} >LOGO</Link>
        <h2 className='cursor-pointer' >Logout</h2>
    </header>
  )
}

export default Header