import React from 'react'
import { Link } from 'react-router-dom';

import './main.css';

const Main = () => {
  return (
<>    <div className='buttons'>
        <Link to={'/school'}><button className='main-btn'>
            School ERP
        </button></Link>
        <Link to={'/college'} ><button className='main-btn'>
            College ERP
        </button ></Link>

        <Link to={'/university'}><button className='main-btn'>
            University ERP
        </button></Link>
        
        
        </div>

        </>


  )
}

export default Main;