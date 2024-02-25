import React, { useRef } from 'react'
import Logo from '../assets/images/logo.svg'
import { FaBars } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Button from './Button';
import '../assets/css/Navbar.css'


const Navbar = () => {

    const overlayMenu = useRef()


    const openOverlay = () => {
        overlayMenu.current.style.width = '100%'
    }

    const closeOverlay = () => {
        overlayMenu.current.style.width = '0'
    }
    return (
        <>
            <div className="overlay-menu" ref={overlayMenu}>
                <RxCross2 className='x-icon' onClick={closeOverlay} />
                <div className="nav-links">
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>Services</a>
                    <a href="#" className='nav-link'>Blog</a>
                    <a href="#" className='nav-link'>Projects</a>
                    <Button text='Book a call' nameOfclass='overlay-Btn' />
                    <FaArrowRight className='text-white h1 ' />
                </div>
            </div>
            <nav className="navbar navbar-expand-lg py-4 px-2">
                <div className="container">
                    <img src={Logo} alt="" className='navimg'  />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars onClick={openOverlay} className='over-Btn' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content align-items-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <Button text='Book a call' nameOfclass='navBtn' /><FaArrowRight />
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar