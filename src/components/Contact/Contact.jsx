import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

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

                <div className="flexStart contactModes">
                    {/* firts row */}
                    <div className="flexColStart row">
                        {/* first mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call Us</span>
                                    <span className='secondaryText'>+1 234 456 7890</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>
                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+1 234 456 7890</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flexColStart row">
                        {/* first mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Vide Call</span>
                                    <span className='secondaryText'>+1 234 456 7890</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Video Call
                            </div>
                        </div>
                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+1 234 456 7890</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Send Message
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

