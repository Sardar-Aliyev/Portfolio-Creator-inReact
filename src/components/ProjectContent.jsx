import React from 'react'
import arrow from '../assets/images/ox.svg'

const ProjectContent = ({ picture, product, head, view }) => {
    return (
        <div className='cards col-12 col-md-6 col-lg-4 g-3'>
            <div className="card">
                <img src={picture} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{product}</h3>
                    <h4 className="card-text">{head}</h4>
                    <a href="#" className="view me-1">{view} </a>
                    <img src={arrow} alt="ox" />
                </div>
            </div>
           </div>
    )
}

export default ProjectContent