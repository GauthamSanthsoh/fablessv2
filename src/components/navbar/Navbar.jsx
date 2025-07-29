import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const isHomePage = location.pathname === '/'

  return (
    <motion.nav
      className={`container ${sticky ? 'dark-nav' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <RouterLink to="/">
        <img src={logo} alt="Logo" className='logo' />
      </RouterLink>
      <ul>
        <li>
          {isHomePage ? (
            <ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink>
          ) : (
            <RouterLink to="/">Home</RouterLink>
          )}
        </li>
        <li>
          {/* Updated About link to always point to /about route */}
          <RouterLink to="/about">About us</RouterLink>
        </li>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="dropdown-container"
        >
          Our Offerings
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                className="dropdown-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <RouterLink to="/student" className="dropdown-item">Students</RouterLink>
                <RouterLink to="/campus" className="dropdown-item">Universities/Colleges</RouterLink>
                <RouterLink to="/company" className="dropdown-item">Companies</RouterLink>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink to='programs' smooth={true} offset={-200} duration={500}>Our Ecosystem</ScrollLink>
          ) : (
            <RouterLink to="/#programs">Our Ecosystem</RouterLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink to='contact' smooth={true} offset={-230} duration={500}>
              <button className='btn'>Contact Us</button>
            </ScrollLink>
          ) : (
            <RouterLink to="/#contact">
              <button className='btn'>Contact Us</button>
            </RouterLink>
          )}
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar