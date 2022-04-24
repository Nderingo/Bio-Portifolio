import React from 'react'

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { IoDocumentTextSharp } from "react-icons/io5"

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
      {/* <a href="https://drive.google.com/file/d/1MEYN1a2HQp9i5H9hOEgbEBIaHD7J32v4/view?usp=sharing" target="_blank" rel="noopener noreferrer"> 
        <h3> <IoDocumentTextSharp /> </h3> 
      </a> */}
    </section>
  )
}