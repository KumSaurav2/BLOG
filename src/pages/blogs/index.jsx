import React from "react";
import blogList from "../../data";
import { useParams } from "react-router-dom";
import Card from "../../Card/Card";


function Blog() {
    const { id } = useParams();
    
    const renderedBlogs = blogList.map((blog) => {
        if(blog.id === parseInt(id)) {
            return blog.index;
        }
        else { return 5500}
    });

    return (
        <div>
            <Card index={renderedBlogs} />
        </div>
    );
}

export default Blog;
