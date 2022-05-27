


import React from 'react'

export default function Nav({ view, setView }) {
  return (
    <section className='nav-main'>
        <h1>Emmanuel Lyimo</h1>
        <div className='nav-menu'>
          <a href='#about' onClick={() => setView('about')}>
            { view === "about" ? ( <h4 className='selected-view'>about</h4> ) : ( <h4>about</h4> ) }
          </a>
          <a href='#work' onClick={() => setView('work')}>
            { view === "work" ? ( <h4 className='selected-view'>work</h4> ) : ( <h4>work</h4> ) }
          </a>
          <a href="https://docs.google.com/file/d/16T7r1CP8a1tOtByiyt2_EQI1-YpTwOirrwBEDTe-Oxs/edit?usp=sharing">
            <h4>resume</h4>
          </a>
          <a href='#contact' onClick={() => setView('contact')}>
            { view === "contact" ? ( <h4 className='selected-view'>contact</h4> ) : ( <h4>contact</h4> ) }
          </a>
        </div>
        
    </section>
  )
}