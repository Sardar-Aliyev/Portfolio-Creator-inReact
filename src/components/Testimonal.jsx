import React from 'react'
import boy from '../assets/images/boy.svg'
import dot from '../assets/images/dot.svg'
import left from '../assets/images/whiteVector.svg'
import right from '../assets/images/WhiteVectorR.svg'


import '../assets/css/Testimonal.css'

const Testimonal = () => {
    return (
        <div className='container testimonal py-4'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="d-flex justify-content-start flex-column py-3">
                        <h4>Testimonials</h4>
                        <h2>Word on the street</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="boy-pic col-12 col-md-6">
                    <img src={boy} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6">
                    <div className="center d-flex  flex-column justify-content-between">
                        <div className="dot">
                            <img src={dot} alt=""className='img-fluid' />
                        </div>
                        <h3>Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.</h3>
                        <div className="founder d-flex justify-content-between ">
                            <div className="d-flex  flex-column">
                                <h6>John Frankin</h6>
                                <small>Founder, Double Bunch</small>
                            </div>
                            <div class="bottom-figure">
                                <div class="bottom-f">
                                    <img src={left} alt="" className='img-fluid'  />
                                </div>
                                <div class="bottom-f">
                                    <img src={right} alt=""className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Testimonal