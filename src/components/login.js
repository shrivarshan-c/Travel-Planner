import React from 'react';
import './login.css';
function logOnclick()
        {
            window.location.href = '/'
        }

function LoginForm() {
    return (

        
        <>
        <div className='login'>
            <video autoPlay muted loop id="video-bg">
            <source src={require('./pexels-mikhail-nilov-6981404 (1080p).mp4')} type="video/mp4" />

            </video>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button className='login-btn' onClick={logOnclick}>Log In</button>
            </form>
            </div>
        </>
    );
}

export default LoginForm;
