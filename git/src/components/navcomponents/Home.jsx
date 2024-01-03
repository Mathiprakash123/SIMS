import React, { useEffect, useState } from 'react';
import '../../assets/home.css';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Estimated from '../erp/Esitmated/Estimated';
import Faqs from './faqs/Faqs';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Keyfeatures from './keyfeatures/Keyfeatures';



const testimonials = [
  {
    image: 'https://www.iitms.co.in/testimonials/PMKhodke.webp',
    name: 'Dr. P. M. Khodke',
    role: 'Central Project Advisor at NPIU, Formerly Principal of GEC Karad',
    text: 'The e-Governance ERP has been customized with functional requirements of GCEK & system is fully functional. This ERP campus software generates various MIS reports which are highly beneficial to us.',
  },
  {
    image: 'https://www.iitms.co.in/testimonials/PMKhodke.webp',
    name: 'Dr. P. M. Khodke',
    role: 'Central Project Advisor at NPIU, Formerly Principal of GEC Karad',
    text: 'The e-Governance ERP has been customized with functional requirements of GCEK & system is fully functional. This ERP campus software generates various MIS reports which are highly beneficial to us.',
  },
  {
    image: 'https://www.iitms.co.in/testimonials/PMKhodke.webp',
    name: 'Dr. P. M. Khodke',
    role: 'Central Project Advisor at NPIU, Formerly Principal of GEC Karad',
    text: 'The e-Governance ERP has been customized with functional requirements of GCEK & system is fully functional. This ERP campus software generates various MIS reports which are highly beneficial to us.',
  },
  {
    image: 'https://www.iitms.co.in/testimonials/PMKhodke.webp',
    name: 'Dr. P. M. Khodke',
    role: 'Central Project Advisor at NPIU, Formerly Principal of GEC Karad',
    text: 'The e-Governance ERP has been customized with functional requirements of GCEK & system is fully functional. This ERP campus software generates various MIS reports which are highly beneficial to us.',
  },
  {
    image: 'https://www.iitms.co.in/testimonials/PMKhodke.webp',
    name: 'Dr. P. M. Khodke',
    role: 'Central Project Advisor at NPIU, Formerly Principal of GEC Karad',
    text: 'The e-Governance ERP has been customized with functional requirements of GCEK & system is fully functional. This ERP campus software generates various MIS reports which are highly beneficial to us.',
  },
  {
    image: 'https://www.iitms.co.in/testimonials/PMKhodke.webp',
    name: 'Dr. P. M. Khodke',
    role: 'Central Project Advisor at NPIU, Formerly Principal of GEC Karad',
    text: 'The e-Governance ERP has been customized with functional requirements of GCEK & system is fully functional. This ERP campus software generates various MIS reports which are highly beneficial to us.',
  },
  // Add more testimonials as needed
];

const Home = () => {

 
  useEffect(()=>{
    Aos.init({duration:2000});

  },[])

  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <Navbar />
      <div className="header " data-aos="fade-up"> 
      Welcome to Student Information Management System
      </div>
     
      <div className="home-cards"  data-aos="fade-up">

     
        <img src="https://media.licdn.com/dms/image/D4D12AQFKigI453O4JQ/article-cover_image-shrink_600_2000/0/1698902678435?e=2147483647&v=beta&t=1XgPOLznEYcDorZN6KTTYD48zdfgz0J2dzOb9ZOuvIE" alt="" className="home-images" />
        <div className="home-card-1 text">
          <h1 className="home-card-header">What Is Student Information System (SIS)</h1>
          <p className="home-card-text-1">
            The student management system enables coordination, scheduling and communication between the faculty members and admin for institute's operations. The system simplifies the process of information tracking for both the management and parents.
            Student Management System (SMS) is a software designed to track and manage all the data created by the school such as a student's grades, attendance, interpersonal activity records, etc., as well as other school-related data.
          </p>
        </div>
      </div>

       {/* Client Satisfaction Section */}
       <div className="satisfaction-continer" data-aos="fade-up">
        <h1 className="satisfaction-header"> We Have Over 99% Client Satisfaction Ratings</h1>
        <hr />
        <br /><br />
        <div className="container-2" >
          {testimonials.slice(0, showMore ? testimonials.length : 3).map((testimonial, index) => (
            <div key={index} className="container-2-1">
              <div className="container-2-1-1">
                <img src={testimonial.image} alt="" className="container-2-1-image" />
                <p className="container-2-1-text">
                  {testimonial.name}
                  <br />
                  <span>{testimonial.role}</span>
                </p>
              </div>
              <p className="container-2-1-text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <button className='container-btn-1' onClick={handleReadMoreClick}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>


      <Keyfeatures/>
      {/* Key Statistics Section */}




    
 




      {/* Educational ERP Products Section */}
      <div className="container-4" data-aos="fade-up">
        <h1 className="container-4-header">Educational ERP Products</h1>
        <hr />
        <p className="container-4-text">
          MasterSoft Education ERP Software is a cloud-based software for schools, colleges, and universities that automates all major processes of an Educational institute. The Education ERP campus system ensures management of all academic & non-academic operations and ensuring transparency across all departments.
        </p>
        <p className="container-4-text">
          MasterSoft Education ERP Software is a cloud-based software for schools, colleges, and universities that automates all major processes of an Educational institute. The Education ERP campus system ensures management of all academic & non-academic operations and ensuring transparency across all departments.
        </p>
        <p className="container-4-text">
          MasterSoft Education ERP Software is a cloud-based software for schools, colleges, and universities that automates all major processes of an Educational institute. The Education ERP campus system ensures management of all academic & non-academic operations and ensuring transparency across all departments.
        </p>
        <p className="container-4-text">
          MasterSoft Education ERP Software is a cloud-based software for schools, colleges, and universities that automates all major processes of an Educational institute. The Education ERP campus system ensures management of all academic & non-academic operations and ensuring transparency across all departments.
        </p>

        {/* Add more paragraphs for educational ERP products as needed */}
      </div>
            <br /><br />


    

        <div className="container-5" data-aos="fade-up">
          <div className="container-5-1" data-aos="fade-up">
            <h1 className="container-5-header">MasterSoft Educational ERP Offers</h1>
            <p className="container-5-text">We offer campus management solutions that improve institutional productivity,boost efficiency, and positive outcome
             ratio by streamlining work processes and enabling institutions go paperless.</p>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatum voluptas libero est eos aspernatur fugit aperiam blanditiis deleniti repellat! Magnam voluptatem accusamus inventore? Soluta amet animi perspiciatis minima veniam.</p>
          </div>
          <div className="container-5-2" data-aos="fade-up">

            <h1 className="container-5-2-header">Centralized Database</h1>
            <hr />
            <p className="container-5-2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis, doloremque nobis placeat quidem porro veritatis commodi assumenda autem, recusandae numquam nulla sunt eligendi. Inventore obcaecati natus consectetur aut libero.</p>
          </div>
          <div className="container-5-2" data-aos="fade-up">
          <h1 className="container-5-2-header">Absolute Support</h1>
            <hr />
            <p className="container-5-2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis, doloremque nobis placeat quidem porro veritatis commodi assumenda autem, recusandae numquam nulla sunt eligendi. Inventore obcaecati natus consectetur aut libero.</p>
          </div>
          
          <div className="container-5-2" data-aos="fade-up">

            <h1 className="container-5-2-header">Centralized Database</h1>
            <hr />
            <p className="container-5-2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis, doloremque nobis placeat quidem porro veritatis commodi assumenda autem, recusandae numquam nulla sunt eligendi. Inventore obcaecati natus consectetur aut libero.</p>
            </div>
            <div className="container-5-2" data-aos="fade-up">
            <h1 className="container-5-2-header">Absolute Support</h1>
            <hr />
            <p className="container-5-2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis, doloremque nobis placeat quidem porro veritatis commodi assumenda autem, recusandae numquam nulla sunt eligendi. Inventore obcaecati natus consectetur aut libero.</p>
            </div>
            <div className="container-5-2" data-aos="fade-up">
            <h1 className="container-5-2-header">Absolute Support</h1>
            <hr />
            <p className="container-5-2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis, doloremque nobis placeat quidem porro veritatis commodi assumenda autem, recusandae numquam nulla sunt eligendi. Inventore obcaecati natus consectetur aut libero.</p>
            </div>
          
        </div>
       <Estimated/>
       <Faqs />
        <Footer/>
    </div>
  );
};

export default Home;
