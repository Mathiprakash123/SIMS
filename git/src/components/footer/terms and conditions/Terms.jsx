import React, { useState } from 'react';
import './terms.css';
const Terms = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const openTermsModal = () => setShowTermsModal(true);
  const closeTermsModal = () => setShowTermsModal(false);

  const openPrivacyModal = () => setShowPrivacyModal(true);
  const closePrivacyModal = () => setShowPrivacyModal(false);

  return (
    <div className='terms-conatiner'>
 
      <h1>Student Information Management</h1>
   

    
      <button onClick={openTermsModal} className='terms-button'>View Terms and Conditions</button>


      <button onClick={openPrivacyModal} className='terms-button'>View Privacy Policy</button>

   
      {showTermsModal && (
        <div className="modal">
          <div className="modal-content">
           
            <h2>Terms and Conditions</h2>
            <p># Terms and Conditions

              Welcome to [Your Project Name]!

              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use [Your Project Name] if you do not accept all of the terms and conditions stated on this page.

              ## License

              Unless otherwise stated, [Your Company/Project Name] and/or its licensors own the intellectual property rights for all material on [Your Project Name]. All intellectual property rights are reserved.

              You must not:
              - Republish material from [Your Project Name]
              - Sell, rent, or sub-license material from [Your Project Name]
              - Reproduce, duplicate, or copy material from [Your Project Name]

              ## Disclaimer

              The materials on [Your Project Name] are provided on an 'as is' basis. [Your Company/Project Name] makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

              ...

              ## Changes to Terms

              reserves the right to revise these terms and conditions at any time. By using this website, you are agreeing to be bound by the current version of these terms and conditions.

</p>
            <button onClick={closeTermsModal} className='terms-close'>Close</button>
          </div>
        </div>
      )}

  
      {showPrivacyModal && (
        <div className="modal">
          <div className="modal-content">
         
            <h2>Privacy Policy</h2>
            <p># Privacy Policy

              Your privacy is important to us. It is [Your Company/Project Name]'s policy to respect your privacy regarding any information we may collect from you across our website, [Your Project Name], and other sites we own and operate.

              ## Information We Collect

              We may collect personal information that you voluntarily provide to us when you:
              - Register on the site
              - Subscribe to a newsletter
              - Fill out a form
              - Use certain features of the site

              ## How We Use Your Information

              The information we collect may be used to:
              - Personalize your experience
              - Improve our website
              - Respond to your inquiries

              ## Cookies

              We use cookies to store information about visitor preferences and to record user-specific information on visits and pages the user views for statistical purposes.

              ## Third-Party Services

              We may employ third-party companies and individuals for various reasons, including analytics, customer support, and payment processing. These third parties may have access to your personal information as necessary to perform their functions.

              ...

              ## Changes to This Privacy Policy

              We reserve the right to update our Privacy Policy from time to time. We encourage you to review this page periodically for any changes.

</p>
            <button onClick={closePrivacyModal} className='terms-close'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terms;
