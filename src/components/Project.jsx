import React, { useEffect, useState } from 'react'
import ProjectContent from './ProjectContent'
import Button from './Button'
import '../assets/css/Project.css'


import axios from 'axios'


const Project = () => {
    const [project, setproject] = useState([])

    useEffect(() => {
        axios.get("src/project.json")
            .then(res => setproject(res.data))
    }, [])
    
    return (
        <div className='project container pt-4'>
            <div className="row ">
                <div className="left col-12 col-md-6 col-lg-6">
                    <h4>Projects</h4>
                    <h2>I bring results.<br />My clients are proof.</h2>
                </div>
                <div className="right col-12 col-md-6 col-lg-6">
                    <Button text='View all projects' nameOfclass='book-btn' />
                </div>
            </div>

            <div className="row">
                {

                    project.map((p, index) => (
                        <ProjectContent key={index} picture={p.image} product={p.title} head={p.text} view={p.view} />
                    ))

                }
            </div>
        </div>


    )
}

export default Project