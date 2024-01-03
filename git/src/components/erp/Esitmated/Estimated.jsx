import React from 'react'
import './estimated.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useState,useEffect } from 'react';
const Estimated = () => {
  useEffect(()=>{
    Aos.init({duration:2000});

  },[])
  return (
    <div className="estimated-container"  data-aos="fade-up">
    <div className="estimated-container-header">Our Esteemed Clients <hr /></div>
    
    <div className="estimated-container-1">
        
        <img src="https://www.iitms.co.in/customers/gov-inst/Mizoram-University.webp" alt="" className='estimated-img'/>
        <img src="https://www.iitms.co.in/customers/gov-inst/SVNIT-Surat.webp" alt="" className="estimated-img" />
        <img src="https://www.iitms.co.in/customers/private/Deccan_Education_Society_Pune.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/private/Deccan_Education_Society_Pune.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/gov-inst/NIT-Srinagar.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/Ramnarain-Ruia.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/private/BIT-mesra.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/private/SVCE-Chennai.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/lnmiit-jaipur.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/gov-inst/NIT-Goa.jpg" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/Nutan-Maratha.webp" alt="" className='estiimated-img'/>
        <img src="https://www.iitms.co.in/customers/schools/st-xavier-group.webp" alt="" className='estiimated-img'/>
       <img src="https://www.iitms.co.in/customers/schools/Queen-Mary.png" alt="" className="estimated-img" />
        </div>
  </div>
  )
}

export default Estimated;