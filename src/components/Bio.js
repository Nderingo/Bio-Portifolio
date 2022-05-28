import React from 'react'
import esalPic from "../images/profile12.jpg";

// Do we want to try this to organize the bio, pic, etc.
// import { Card, CardGroup, Row, Col, Container } from "react-bootstrap/";

import { SiHtml5, SiCss3, SiSvelte, SiJavascript, SiMysql, SiSequelize, SiGraphql, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiInsomnia, SiApollographql } from "react-icons/si"

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          margin: 'auto',
          width: '70%',
          height: 5
      }}
  />
);

export default function Bio() {
  return (
    <section className='about-container mt-4 col-10'>
        <div>
          <p>Full stack web developer . Recent graduate of University of Washington’s Full Stack Coding Boot Camp Program (partnership with Trilogy Education Services). I helped lead teams to create Don't Get Bored  application and a gameRec. I am excited to employ my skillset in JavaScript, HTML, CSS, and more, to pivot my career and create better, healthier, more responsible, and honest spaces on the web.</p>
          
          <ColoredLine color="purple" />

          <h4 className='nav-main nav-menu'>toolkit</h4>
          <div className='tools-container col-10'>
            
            <h1><SiHtml5 alt="HTML"/></h1>
            <h1><SiCss3 alt="CSS"/></h1>
            <h1><SiJavascript alt="JS/Javascript"/></h1>
            <h1><SiSvelte alt="Svelte"/></h1>

            <h1><SiMongodb alt="MongoDB"/></h1>
            <h1><SiExpress alt="Express"/></h1>
            <h1><SiReact alt="React"/></h1>
            <h1><SiNodedotjs alt="Node.js"/></h1>


            <h1><SiMysql alt="MySQL"/></h1>
            <h1><SiSequelize alt="Sequelize"/></h1>
            <h1><SiGraphql alt="GraphQL"/></h1>
            
      
            <h1><SiInsomnia alt="Insomnia"/></h1>
            <h1><SiApollographql alt="Apollo"/></h1>

          </div>
        </div>

        <div className='col-2 portfolio-picture'>
          <img alt="Emma Lyimo - Full Stack Dev" src={esalPic} />
        </div>
    </section>
  )
}