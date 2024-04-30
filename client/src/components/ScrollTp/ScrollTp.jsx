import React, { useState } from 'react'

const ScrollTp = () => {

    
    const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling behavior
    });
  };

  // Function to toggle visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener to toggle visibility of the button
  window.addEventListener('scroll', toggleVisibility);
  return (
    <>
           <button
      className="w-[50px] h-[50px] rounded-full bg-[#111] text-white fixed bottom-[5%] right-[5%] flex items-center justify-center"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <svg fill="#fff" height="20px" width="20px" version="1.1" id="Layer_1"  viewBox="0 0 330 330"  stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
    </button>
    </>
  )
}

export default ScrollTp
