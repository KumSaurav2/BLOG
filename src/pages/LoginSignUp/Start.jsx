import React, { useState } from 'react'
import './Start.css';

var temp = 0;

const Start = () => {
  const [loginClass, setLoginClass] = useState('LoginForm');
  const [whiteBackClass, setWhiteBackClass] = useState('whiteBack');
  const [loginWelcomeClass, setLoginWelcomeClass] = useState('LoginWelcome');
  const [signUpWelcomeClass, setSignUpWelcomeClass] = useState('SignUpWelcome');
  const [signUpClass, setSignUpClass] = useState('SignUpFormInitial');
  const [LinkCover, setLinkCover] = useState('div11');
  const handleSignUp = () => {
    temp = 1;
    setLoginClass('LoginFormAnim');
    setWhiteBackClass('whiteBackAnim');
    setLoginWelcomeClass('LoginWelcomeGo');
    setSignUpWelcomeClass('SignUpWelcomeGo');
    setSignUpClass('SignUpFormAnimReverse');
    setLinkCover('div11Go');
  }
  const  handleLogIn= () => {
    if(temp !== 0){
      setWhiteBackClass('whiteBackAnim2');
      setLoginWelcomeClass('LoginWelcomeGoReverse');
      setSignUpClass('SignUpFormAnim');
      setSignUpWelcomeClass('SignUpWelcomeGoReverse');
      setLoginClass('LoginFormAnimReverse');
      setLinkCover('div11Reverse');
    }
  }    
  return (
    <div className='bodyDiv'>
      <div className='mainDiv'>
      <div className={whiteBackClass}></div>
        <div className='LogInSignUp'>
          <div className={LinkCover}></div>
          <button className='LinkStart linkLogin' onClick={handleLogIn}>LOGIN</button>
          <button className='LinkStart linkSignUp' onClick={handleSignUp}>SIGNUP</button>
        </div>
        <div className={loginWelcomeClass}>
          <h3>Welcome Back!</h3>
          <p>Please Login to your account to continue.</p>
          <h5>Happy Blogging</h5>
        </div>
        <form className={loginClass}>
          <h3>Login to Your Account</h3>
          <input className='Input1' type='email' placeholder='   Email'/>
          <input className='Input2' type='password' placeholder='   Password' />
          <h4>Fogot Your Password?</h4>
          <button className="LoginButton" type='submit'>Log In</button>
        </form>
        <div className={signUpWelcomeClass}>
          <h3>HI THERE!</h3>
          <p>Please enter your details to continue.</p>
          <h5>Happy Blogging</h5>
        </div>
        <form className={signUpClass}>
          <h3>Sing Up to Daily Blogger</h3>
          <input className='Input1' type='email' placeholder='   Email'/>
          <input className='Input3' type='text' placeholder='   Name'/>
          <input className='Input2' type='password' placeholder='   Password' />
          <button className="SignUpButton" type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Start