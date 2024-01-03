import React from 'react'
import '../login/login.css'
import { FaUserGraduate } from "react-icons/fa6";
import { RiMailSendFill } from "react-icons/ri";
import { TbPasswordUser } from "react-icons/tb";

import { Link } from 'react-router-dom';
const ForgetPass = () => {
  return (
    <div className='login'>
        <div className="forget-container">
            <form action="" className="login-form">
                <h1 className="login-header">Forget Password Page</h1>
                <input type="text" className="login-username" placeholder='Enter Username'/><FaUserGraduate className='user-logo'/>
              <input type="email" className="login-password" placeholder='Enter Email'/><RiMailSendFill className='user-logo' />

              <Link to={'/'}><button className="login-button">SEND OTP</button></Link>
             <br /><br /><br /> <input type="text" className="login-username" placeholder='Enter OTP'/><TbPasswordUser className='user-logo'/>

             <Link to={'/'}><button className="login-button">Login</button></Link>


            </form>
        </div>
    </div>
  )
}

export default ForgetPass;