import React from 'react';
import './signup.css';

function SignUpForm() {
    return (
        <>
        <div className='signup'>
       
            <video autoPlay muted loop id="video-bg">
            <source src={require('./pexels-mikhail-nilov-6981404 (1080p).mp4')} type="video/mp4" />
            </video>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Sign Up Here</h3>

                <label htmlFor="fullname">Full Name</label>
                <input type="text" placeholder="Full Name" id="fullname" />

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button className='signup-btn'>Sign Up</button>
            </form>
            </div>
        </>
    );
}

export default SignUpForm;
