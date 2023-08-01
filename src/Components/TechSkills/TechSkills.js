import React from 'react'
import
 {CgCPlusPlus} from "react-icons/cg";
 import {
    DiReact ,
    DiPython,
    DiGit,
    DiJavascript ,
    DiDatabase,
    DiBootstrap,
    DiHtml5 ,
    DiCss3 ,
    DiSass ,
    DiFirebase,
    DiGithub,

 } from 'react-icons/di'
 import './TechSkills.css'
const TechSkills = () => {
  return (
     <div className='tech-skill-container' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div>
      <DiHtml5 size={72} className='tech-skill'/>
     </div>
            <div>
            <DiCss3 size={72} className='tech-skill'/>
            </div>
<div>
     <DiJavascript size={72} className='tech-skill'/>
</div>
<div>
    <DiBootstrap size={72} className='tech-skill'/>
</div>
        <div>
        <DiSass size={72} className='tech-skill'/>
        </div>
<div>
     <DiReact size={72} className='tech-skill'/>
</div>

<div>
     <CgCPlusPlus size={72} className='tech-skill'/>
</div>

<div>
     <DiPython size={72} className='tech-skill'/>
</div>
<div>

     <DiGit size={72} className='tech-skill'/>
</div>
<div>
     <DiDatabase size={72} className='tech-skill'/>
</div>
<div>
     <DiFirebase size={72} className='tech-skill'/>
</div>
<div>
     <DiGithub size={72} className='tech-skill'/>
</div>
     </div>
  )
}

export default TechSkills