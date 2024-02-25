import React from 'react'
import '../assets/css/ProductDes.css'
import imageLeft from '../assets/images/img-left.svg'
import imageLeft2 from '../assets/images/img-left2.svg'
import imageTop from '../assets/images/img-t.svg'
import imageBottom from '../assets/images/img-b.svg'

const ProductDes = () => {
    return (

        <div class="designer container-fluid ">
            <div className="head row ">
                <div className="col-12 col-md-12 col-lg-6">
                    <h4>Product Designer</h4>
                    <h2>That's me!</h2>
                </div>
                <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-end">
                    <p>Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow.</p>
                </div>
            </div>
            <div className="i-center">
                <div class="i-left-side">
                    <img src={imageLeft} alt="" className="img-fluid"/>
                </div>
                <div class="img-center">
                    <img src={imageLeft2} alt=""className="img-fluid" />
                </div>

                <div class="i-right-side">
                    <div class="right-side-top">
                        <img src={imageTop} alt=""className="img-fluid" />
                    </div>
                    <div class="right-side-bottom">
                        <img src={imageBottom} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default ProductDes