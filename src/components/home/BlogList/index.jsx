import React from 'react'
import { BlogItem } from './BlogItem';
import './styles.css';


const BlogList = (props) => {
  return (
    <div className='blogList-wrap'>
        {props.blog.map(blogs=> <BlogItem id={blogs.id} key={blogs.id} author={blogs.author} authorImg={blogs.authorImg} img={blogs.img} name={blogs.name} about={blogs.about} category={blogs.category}/>)}
    </div>
  )
}

export default BlogList