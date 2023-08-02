import React, { useRef, useState } from 'react';
import './Contact.css';
const Contact = () => {
  const [email , setEmail] =useState("");
  const[name , setName] = useState("") ;
  const [phone , setPhone] = useState("");
  const [msg , setMsg] = useState("") ;
 const [showAlert , setShowAlert] = useState(false) ;
  // take a reference for email
  const emailRef = useRef() ;
  const nameRef = useRef() ;
  const phoneRef = useRef() ;
  const messageRef = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault() ;
   if(email === "" || phone === "" || name === "" || msg === ""){
      return ;
   }else{

    setShowAlert(true) ;
    // this is for control of the alert message
    setTimeout(() => {
      setShowAlert(false)
    }, 1500);
    setName("");
    setEmail("");
    setPhone("");
    setMsg("");
   }
  }
  return (
    <div className='contact' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
     {showAlert && <div className='alert alert-success' role='alert' style={{fontWeight : "bolder" , borderRadius : "10px"}}>
      Thanks for messaging us we will contact you in your email
      </div>}
      <h1 className='contact-title'>Contact <span style={{ color: "#c770f0" }}>Us</span></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' id='name' value={name} required ref={nameRef}/>
        </div>
        <div>
          <label htmlFor='phoneNumber'>PhoneNumber</label>
          <input type='text'  placeholder='Enter your phone' id='phoneNumber' value={phone} name='phoneNumber' required ref={phoneRef} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email'onChange={(e) =>  setEmail(e.target.value)}  placeholder='Enter your email' id='email' value={email} required ref={emailRef}/>
          <p className='user-email' style={{color : "#ffffff" , textAlign : "center", marginTop : "10px" , fontWeight : "bold"}}>{email}</p>
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea placeholder='Enter your message..!' onChange={(e) => setMsg(e.target.value)} id='message' ref={messageRef} value={msg}></textarea>
          <button className='send-btn'> Send message </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
