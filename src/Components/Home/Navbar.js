import React, { useState, useEffect } from 'react'
// import'../App.css'
import'./Navbar.css'
// import ReorderIcon from '@material-ui/icons/Reorder';


function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const [logo, setLogo] = useState("logo");

const listenScrollEvent = (event) =>  {
  if (window.scrollY < 73) {
    return setLogo("logo")
  } else if (window.scrollY > 70) {
    return setLogo("logo2")
  } 
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);
    return (
        <div className='Navbar'>
        

        <div className='leftSide'>
        <a href="/"><img src={require('../Images/hanger2.jpg').default} className={logo}/></a>
       
        
        </div> 
        

        <div className='rightSide'>
        <div className='links' id={showLinks ? 'hidden' : ''}>
        <a href="/StyleCard">Style Card</a>
        <a href="/Tips">Tips & Tricks</a>
        <a href="/GiveBack">Give Back</a>
        </div>

        <button onClick={() => setShowLinks(!showLinks)}>
        {""}
        {/* <ReorderIcon/> */}
        </button>
        </div> 
        </div>
    )
}

export default Navbar
