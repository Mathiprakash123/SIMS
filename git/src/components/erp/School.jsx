import React from 'react'
import Home from '../navcomponents/Home';
import './school.css';
import Footer from '../footer/footer';
import Estimated from './Esitmated/Estimated';
import About from '../navcomponents/About';
import Navbar from '../navbar';
import Main from './main';
const School = () => {
  return (
    <><Navbar/>    
    <Main/> 
    <div className="school-container">
      <h1 className='school-text'>
      <div className='school-header'>School ERP</div>School ERP
        <p>MasterSoft Cloud-based School ERP is a complete solution developed with the aim of impacting Learning Outcomes & Campus Management by automating all life cycles - Student, Faculty & Administration and providing actionable insights via Smart Analytics.
        </p>
        <p>
        Latest Technology & Smart Integration

        </p>
        <p>Smart features such as BI Tools, Biometric Identification, Mobile Apps, Auto-triggered notifications, and Bus tracking and much more to ensure best outcomes & transparency between school & parents.
        </p>
        <p>CSMS supports all Boards, CBSE, ICSE, State, IB & Cambridge.
        </p>
        <p>Enables active communication between key stakeholders to improve student learning.
        </p>Statistical Analysis presented by BI Tools suggests valuable inferences.</h1>
      <img src="https://www.iitms.co.in/images/school-erp-dashboard.webp" className='school-img' />

    </div>
   
    </>

  )
}

export default School;