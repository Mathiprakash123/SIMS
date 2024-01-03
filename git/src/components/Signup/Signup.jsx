import React from 'react'
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";

import { RiMailSendFill } from "react-icons/ri";
const Signup = () => {
  return (
    <div>
        <div className="login">
          <div className="sign-container">
            <form action="" className="login-form">
                <h1 className="login-header">Student Sign Up Page</h1>
                <input type="text" className="login-username" placeholder='Enter Firstname'/><FaUserGraduate className='user-logo'/>
                <input type="text" className="login-username" placeholder='Enter Lastname'/><FaUserGraduate className='user-logo'/>
              <input type="email" className="login-password" placeholder='Enter Email'/><RiMailSendFill className='user-logo' />
              <br /><br />
              <input type="password" className="login-password" placeholder=' Enter Password'/><RiLockPasswordFill className='user-logo'/>

             <Link to={'/'}><button className="login-button">Login</button></Link>


            </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;