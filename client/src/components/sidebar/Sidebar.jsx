import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useOutSideClick from '../../hooks/useOutSideClick/useOutSideClick'
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';

const Sidebar = () => {

 const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const domNode = useOutSideClick(() => {})

  useEffect(() =>{
    if (isSmallScreen) {
      alert("mobile screen")
    }
  },[isSmallScreen])

  return (
    <aside ref={domNode} className='w-[10%] pt-[60px] px-2 h-[calc(100vh)] bg-[#8697c3]' >
      <ul>
        <li>
          <Link to={"/useFetch"} >useFetch</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar