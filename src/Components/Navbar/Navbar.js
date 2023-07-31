import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, fas  , faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faPhoneAlt, faAddressCard  } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
library.add(fas);
const Navbar = () => {
  return (
    <div className='container'>
    <div>
        <h1 className='name'>Mohamed..</h1>
    </div>
    <div className='navbar-container'>
     <Link to="/">
     <FontAwesomeIcon className='icon' icon={faHome}/>
     <span>Home</span>
     </Link>
     <Link to="/about">
     <FontAwesomeIcon className='icon' icon={faAddressCard}/>
     <span> About </span>
     </Link>
     <Link to="/project">
     <FontAwesomeIcon className='icon' icon={faBriefcase}/>
     <span> Project </span>
     </Link>
     <Link to="/contact">
     <FontAwesomeIcon className='icon' icon={faPhoneAlt}/>
     <span> Contact </span>
     </Link>
    </div>
    </div>
  )
}

export default Navbar