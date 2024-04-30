import React, { useEffect, useRef } from "react";


const useOutSideClick = (callback) =>{

    const domNode = useRef(null)

    useEffect(()=>{ 
    let mayBeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', mayBeHandler )
    return () =>{
      document.removeEventListener('mousedown',mayBeHandler)
    }
  },[])


  return domNode

}

export default useOutSideClick