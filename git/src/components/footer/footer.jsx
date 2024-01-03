import React from 'react'
import './footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useState,useEffect } from 'react';
import Terms from './terms and conditions/Terms';
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000});

  },[])
  return (
    <div> 
      <Terms/>
      <footer class="footer-section" data-aos="fade-up">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
              <div class="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Call us</h4>
                <span>9876543210 0</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h4>Mail us</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
        
        <div class="row">
          
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <br />
              <ul>
                
                <li><a href="#">about</a></li>
                <li><a href="#">services</a></li>
               
                <li><a href="#">Contact</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our Services</a></li>
                
                <li><a href="#">Contact us</a></li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 text-center text-lg-left">
            <div class="copyright-text">
              <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div class="footer-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer