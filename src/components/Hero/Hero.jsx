import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  const handleLearnMore = () => {
    const section = document.getElementById('learn-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='hero container'>
      <div className="hero-txt">
        <h1>'Taping out' the next generation of semiconductor talent:</h1>
        <p>Transforming the young semiconductor enthusiasts into <b>highly skilled, employable</b> chip designers and budding <b>fabless Enterprenuers</b></p>
        <div className="hero-buttons">
          <button className='btn' onClick={handleLearnMore}>
            Learn More <img src={dark_arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
