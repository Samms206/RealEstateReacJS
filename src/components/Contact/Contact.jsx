import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
      <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            {/* Left Side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>
                    We always ready to help. You just need to <br />
                    we believe in doing business with you
                </span>

                <div className="flexColStart contactModes">
                    {/* firts row */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <i className="fa fa-phone-alt"></i>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call Us</span>
                                    <span>+1 234 456 7890</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="contact" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact

