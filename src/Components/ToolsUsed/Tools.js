import React from 'react'
import {
  SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiCodeforces ,
    SiNpm,


} from 'react-icons/si'
import './Tools.css'
const Tools = () => {
  return (
    <div className='tools-container'>
   <div>
    <SiVisualstudiocode size={72} className='tool-used'/>
   </div>
   <div>
    <SiPostman size={72} className='tool-used'/>
   </div>
   <div>
    <SiCodeforces size={72} className='tool-used'/>
   </div>
   <div>
    <SiNpm size={72} className='tool-used'/>
   </div>

    </div>
  )
}

export default Tools