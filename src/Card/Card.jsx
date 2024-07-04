import React from 'react';
import blogList from '../data.jsx';
import "./Card.css"
import { Link } from 'react-router-dom';
import Header from '../components/home/header/index.jsx';
import Footer from '../Footer/Footer.jsx';

const Card = (props) => {
    let Index;
   props.index.forEach(element => {
    if(element !== 5500){
        Index = element;
    }
   });
   const blogItem = blogList[parseInt(Index)];
    

    const { id, index, name, img, category, author, authorImg, about } = blogItem;

    return (
        <div className='mainDivCard'>
        <Header />
            <Link className='Link' to="/">⭪ Back</Link>
            <div className='dispalyItem'>
                <h3>
                    <span><br/></span>
                    {name}
                    <span> 
                    <p>{about}</p>  
                    </span>
                </h3>
                <footer>
                <div className='blogItem-footer'>
                    <img src={authorImg} alt='Not Found'/>
                    <div>
                        <h6>
                            {author}
                        </h6>
                        <p>Just Now</p>
                    </div>
                </div>
            </footer>
                <img src={img} alt='Not Found' className='cover'/> 
            </div>
            <Footer />
    </div>
    );
}

export default Card;
