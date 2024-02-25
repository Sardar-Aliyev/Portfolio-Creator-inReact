import React from 'react'
import Blogjson from '../blog.json'
import BlogContent from './BlogContent'
import '../assets/css/Blogs.css'
import left from '../assets/images/left.svg'
import right from '../assets/images/right.svg'
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
    return (
        <div className='blogs  py-5'>
            <div className="container">
                <div className="blog-header">
                    <div className="vector-right">
                        <div className="top">
                            <img src={left} alt="" />
                        </div>
                        <div className="top">
                            <img src={right} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" left-blog col-12 col-md-12 col-lg-6  ">
                        <h5>Blogs</h5>
                        <h3>Latest Blogs</h3>
                        <small>View all</small>
                        <FaArrowRight className='mx-3' />
                    </div>
                    <div className="right-blog col-12 col-md-12 col-lg-6 ">
                        {
                            Blogjson.map(blog => (
                                <BlogContent date={blog.date} title={blog.title} text={blog.text} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blogs