import React from 'react';
import './faqs.css';
import { useEffect,useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const FaqsQandA = [
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
  {
    Question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo recusandae provident atque mollitia. Facilis numquam, accusamus fuga sapiente voluptatem ut',
    Answers:
      '9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maxime!',
  },
];

const Faqs = () => {

  useEffect(()=>{
    Aos.init({duration:2000});

  },[])
    const [showMore, setShowMore] = useState(false);
    const handleReadMoreClick = () => {
        setShowMore(!showMore);
      };
  return (
    <div className='faq-container-1' data-aos="fade-up">
      <h1 className="faq-header">FAQs On Student Information System (SIS)</h1>
      {FaqsQandA.slice(0, showMore ? FaqsQandA.length : 3).map((faqs, index) => (
        <div key={index} className="faq-container">
          <div className="answers">{faqs.Answers}</div>
          <div className="question">{faqs.Question}</div>
          
        </div>
        
      ))}
       <button className='container-btn-1' onClick={handleReadMoreClick}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
    </div>
  );
};

export default Faqs;
