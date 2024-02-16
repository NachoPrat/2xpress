import React, {useState} from 'react'
import './LoginSignup.css'

import contraseña from '../assets/contraseña.png'
import correo from '../assets/correo.png'

export const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                <div className='input'>
                    <img src={correo} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className='input'>
                    <img src={contraseña} alt="" />
                    <input type="password" placeholder="Enter your password" />
                </div>
                
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password"><span>Lost Password?</span></div>}   
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
