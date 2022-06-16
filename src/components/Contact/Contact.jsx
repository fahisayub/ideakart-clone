import React from 'react'
import "./Contact.css"

const Contact = () => {


  return (
    <div id='contact'>
      <br />
      <br />
      <p id='headingSk'>You can contact our team by filling this form - </p>
      <div id='boxcontact'>
      <div className='contactForm1'>
        <div>
        <label>Firstname *</label>
        <br />
        <input type="text" placeholder='Please enter your first name'/>
        <br />
        </div>
        <div>
        <label>Lastname *</label>
        <br />
        <input type="text" placeholder='Please enter your last name'/>
        <br />
        </div>
        </div>
        <div className='contactForm2'>
        <div>
        <label>Email *</label>
        <br />
        <input type="email" placeholder='Please enter your email' />
        </div>
        <div>
        <label>Phone *</label>
        <br />
        <input type="number" placeholder='Please enter your number' />
        <br />
        </div>
      </div>
      <div id='textarea'>
      <textarea name="" id="" cols="30" rows="10" placeholder='Message for me'></textarea>
      <br />
      <button id="contactbutton">Contact</button>
      </div>
      </div>
    </div>
  )
}

export default Contact