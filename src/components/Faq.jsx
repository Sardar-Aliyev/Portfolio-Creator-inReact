import React from 'react'
import faq from '../faq.json'
import FaqContent from './FaqContent'
import '../assets/css/Faq.css'

const Faq = () => {
    return (
        <div className='faq py-5'>
            <div className="container">
                <h3>FAQ</h3>
                <h2>Frequently asked questions</h2>
                <div className="row">
                    {
                        faq.map((head, index) => (
                            <FaqContent key={index} header={head.header} body={head.body} down={head.down} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq