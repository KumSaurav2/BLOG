import React from 'react';
import './styles.css';
import Chip from '../../../common/Chip';
import { Link } from 'react-router-dom';
import { useState } from 'react';

let intId = "0";
export const BlogItem = (props) => {
   
    return (
        <div className='blogItem-wrap'>
            <img src={props.img} alt='Not Found' className='cover'/>
            <Chip className="chip" label={props.category} />
            <h3>{props.name}</h3>
            <p>{props.about}</p>
            <footer>
                <div className='blogItem-footer'>
                    <img src={props.authorImg} alt='Not Found'/>
                    <div>
                        <h6>
                            {props.author}
                        </h6>
                        <p>Just Now</p>
                    </div>
                </div>
                <Link className='linkTo' to={`/home/blog/${props.id}`}>⭬</Link>
            </footer>
        </div>
    )
}


