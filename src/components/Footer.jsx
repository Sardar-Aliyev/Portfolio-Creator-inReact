import React from 'react'
import message from '../assets/images/message.svg'
import '../assets/css/Footer.css'
import logo from '../assets/images/Footer-img.svg'

const Footer = () => {

    const footermap = ['About', 'Contact', 'Dribbble', 'Services', 'Blog', 'Instagram', 'Experience', 'Projects', 'Twitter']

    return (
        <div className='footer pt-5 pb-3'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 up-footer d-flex justify-content-start flex-column ">
                        <h1>Ready to make something kickass?</h1>
                        <h2>Let's get on a call.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="down-footer d-flex justify-content-between align-items-center flex-wrap g-3">
                        <div className="col-12 col-md-6 left-side py-5  ">
                            <img src={logo} alt="" className='img-fluid logo' />
                            <small className='py-2'>4353 Delaware Avenue, San Francisco, USA</small>
                            <div className="message">
                                <img src={message} alt="" className='img-fluid me-1' />
                                <span>hi@thefolio.com</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 right-side d-flex justify-content-between align-items-center">
                            <div className="menu ">
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                                <a href="#">Services</a>
                            </div>
                            <div className="menu">
                                <a href="#">Dribble</a>
                                <a href="#">Blog</a>
                                <a href="#">Instagram</a>
                            </div>
                            <div className="menu">
                                <a href="#">Experience</a>
                                <a href="#">Projects</a>
                                <a href="#">Twitter</a>
                            </div>

                            {/* {
                              footermap.map((x, index) => (
                                <h5>{x}</h5>
                               ))
                                    } */}
                        </div>
                    </div>
                </div>
                <div className="author ">
                    <span>All rights reserved © </span> <a href="" className='text-light'>Sardar Alıyev</a>
                </div>
            </div>

        </div>
    )
}

export default Footer