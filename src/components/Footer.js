import React from 'react'

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin,BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <section className='footer-container'>
      <a href="esal29t@gmail.com"> 
        <h3> <MdEmail /> </h3> 
      </a>
      <a href="https://github.com/Nderingo" target="_blank" rel="noopener noreferrer">
        <h3> <BsGithub /> </h3>
      </a>
      <a href="http://linkedin.com/in/emmanuel-s-lyimo-4b53a996/" target="_blank" rel="noopener noreferrer"> 
        <h3> <BsLinkedin /> </h3>
      </a>
      <a href="https://twitter.com/ELyimo12" target="_blank" rel="noopener noreferrer">
        <h3> <BsTwitter /> </h3>
      </a>
      
    </section>
  )
}