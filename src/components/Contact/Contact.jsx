import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import loc_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import next_icon from '../../assets/next-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message<img src={msg} alt="" /></h3>
            <p>Feel free to reach out throught contact form or find our contact information below. Your feedback, questions and 
                suggestion are important to us as we strive to provide exceptional service to community
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />contact mail</li>
                <li><img src={phone_icon} alt="" />contact phone</li>
                <li><img src={loc_icon} alt="" />contact address</li>
            </ul>
        </div>
        <div className="cotact-col">
            <form>
                <label>Name:</label>
                <input type="text" name='name' placeholder='Enter Your name' required/>
                <label>Phone:</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label htmlFor="type">I am a:</label>
                <select name="profession" required>
                <option value="">Select one</option>
                <option value="Student">Student</option>
                <option value="Company">Company</option>
                <option value="College">College</option>
                </select>
                <label><br />Write your message here:</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit</button>
            </form>
            <span></span>
        </div>
      
    </div>
  )
}

export default Contact
