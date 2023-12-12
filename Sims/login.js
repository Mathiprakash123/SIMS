import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";

import { FaRegMoneyBill1, FaUserGraduate } from "react-icons/fa6";
import {Link} from "react-router-dom";

import './sign.css'

const Signpage = () => {
  return (
    <div className='Body'>
    <div className="login-container">
    <img src="https://www.560degree.com/images/college.png" alt="" className='img-1'/>
      <form action="" className='form-1'>
    <legend className='header'>Student LoginPage</legend>
        
        <div className="text-1">
          <input type="text" placeholder='Username' className='user' required />
          <FaUserGraduate className='icon-1' />
        </div>
        <div className="pass">
          
          <input type="password" placeholder='Password' className='user' required />
          <RiLockPasswordFill className='icon-2'/>

        </div>
        <input type="button" value="Login"  className='btn-1'/>

        <label htmlFor="" className='or'> OR</label>
        <Link to="./login"> Sign-up</Link>
        <a href="#" className='link-1'>Sign up</a>
        <a href="#" className='link-2'>Forget password ?</a>

      </form>
    </div>
    </div>
  )
}

export default Signpage;
