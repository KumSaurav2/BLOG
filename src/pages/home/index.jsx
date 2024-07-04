import React, { useState } from "react";
import Header from "../../components/home/header";
import SearchBar from "./search/index";
import BlogList from "../../components/home/BlogList";
import blogList from '../../data.jsx';
import NoBlog from "../../components/common/Error/index";
import Footer from "../../Footer/Footer.jsx";
import './index.css';




function Home () {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');
    const handleSearchSubmit = (event) =>{
        event.preventDefault();
        handleSearchResult();
    };
    const handleSearchResult=()=>{
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter(blogs=>
            blogs.category.toLowerCase().includes(searchKey.toLocaleLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };
    function handleClearSearch () {
        setBlogs(blogList);
        setSearchKey('');
    };
    return(
        <div className="Container-main"> 
            <Header/>
            <SearchBar 
                value={searchKey} 
                formSubmit={handleSearchSubmit} 
                handleSearchKey={(event)=>{setSearchKey(event.target.value)}}
                clearSearch={handleClearSearch}
            />
            {!blogs.length ? <NoBlog /> : <BlogList blog={blogs} />}
            <Footer />
        </div>
    );
}
export default Home;