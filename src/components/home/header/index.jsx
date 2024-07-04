import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='home-header'>
        <label>Daily Blogger</label>
        <Link className='link' to="/">FEED</Link>
        <Link className='link' to="/">POSTS</Link>
    </header>
  )
}

export default Header;