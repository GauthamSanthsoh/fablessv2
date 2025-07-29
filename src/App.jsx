import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Program/Programs'
import Title from './components/Title/Title'
import About from './components/About/About' // Your existing About component
import Approach from './components/approach/approach'
import Milestone from './components/Milestone/Milestone'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer'
import Student from './components/Student/Student'
import Campus from './components/Campus/Campus'
import Company from './components/Company/Company'
import Learn from './components/Learn/Learn'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <div id="learn-section">
        <Learn />
      </div>
      <Title subTitle='Our Ecosystem' title='' />
      <Programs />
      {/* Remove About from here since it will be a separate page */}
      <Title subTitle='Our Approach' title='Our 3E approach guides young semiconductor enthusiasts bridging academic fundamentals to a successful tape-out.' />
      <Approach />
      <Milestone />
      <Title subTitle='Contact Us' title='Get in touch' />
      <Contact />
    </div>
  </>
)

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Add this route for About page */}
          <Route path="/student" element={<Student />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/company" element={<Company />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App