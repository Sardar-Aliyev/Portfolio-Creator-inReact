import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const BlogContent = ({ title, text, date }) => {
    return (
        <div className='blog-content '>
            <span>{date}</span>
            <h2>{title}</h2>
            <small>{text}</small>
            <FaArrowRight className='mx-3'/>
            <div className="line"></div>
        </div>
    )
}

export default BlogContent