import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInImg from '../../images/icons8-linkedin.svg';
import GithubImg from '../../images/icons8-github.svg' ;
import GmailImg from '../../images/icons8-gmail.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
     <p>
     Designed and Developed by Mohammed Yasser
     </p>
     <div className='copyright'>
      <p>Copyright © 2023 </p>
     </div>
     <div className='contact-links'>
        <Link to="https://github.com/Mhmdyasser33">
          <img src={GithubImg} alt='github' style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <Link to="https://www.linkedin.com/in/mohamed-yasser-31872821b/">
          <img src={LinkedInImg} alt='linked-in' style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
        <Link to="https://mail.google.com/mail/u/0/#inbox">
          <img src={GmailImg} alt='gmail' style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>
      </div>
    </div>
  )
}

export default Footer